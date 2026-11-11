/* Download licensed Commons originals into images/ so pages do not hotlink
 * to a rate-limited redirect endpoint. Keeps author/license/source metadata.
 * Run: node scripts/vendor-images.cjs
 */
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const { setTimeout: delay } = require("node:timers/promises");
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "animal-data.js");
let source = fs.readFileSync(dataPath, "utf8");
const context = vm.createContext({});
vm.runInContext(source + "\nthis.animals = ANIMALS;", context);
const animals = context.animals.filter(a => a.image.src.startsWith("https://commons.wikimedia.org/"));
const agent = { "User-Agent": "WildlifeGuardianStudentProject/1.0 (licensed Wikimedia Commons photo download)" };
async function fetchRetry(url, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { headers: agent, signal: AbortSignal.timeout(45000) });
      if (res.ok) return res;
      if (i === attempts - 1 || ![429, 500, 502, 503, 504].includes(res.status)) throw new Error("HTTP " + res.status + " " + url);
    } catch (e) { if (i === attempts - 1) throw e; }
    await delay(1500 * (i + 1));
  }
}
(async () => {
  let completed = 0;
  const failed = [];
  for (const a of animals) {
    try {
    const title = decodeURIComponent(a.image.sourceUrl.split("/wiki/File:")[1]).replaceAll("_", " ");
    const api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&iiurlwidth=640&titles=" + encodeURIComponent("File:" + title);
    const info = await (await fetchRetry(api)).json();
    const page = Object.values(info.query.pages)[0];
    const url = page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url;
    if (!url) throw new Error("No image found on Commons: " + title);
    const ext = path.extname(title).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) throw new Error("Unexpected format: " + url);
    const local = "images/" + a.id + ext;
    const response = await fetchRetry(url);
    const type = response.headers.get("content-type") || "";
    if (!type.startsWith("image/")) throw new Error("Not an image: " + title + " " + type);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 1000 || bytes.length > 25_000_000) throw new Error("Unexpected image size: " + title + " " + bytes.length);
    fs.writeFileSync(path.join(root, local), bytes);
    const oldValue = JSON.stringify(a.image.src);
    if (!source.includes(oldValue)) throw new Error("Source image URL missing from data: " + a.id);
    source = source.replace(oldValue, JSON.stringify(local));
    completed++;
    console.log(a.id + ": " + bytes.length + " bytes");
    } catch (error) {
      failed.push(a.id + ": " + error.message);
      console.warn("Deferred: " + a.id + " (" + error.message + ")");
    }
    await delay(3500);
  }
  fs.writeFileSync(dataPath, source);
  console.log("Downloaded " + completed + " licensed images. Deferred " + failed.length + " due to remote failures.");
})().catch(e => { console.error(e); process.exitCode = 1; });
