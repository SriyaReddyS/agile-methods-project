/* Run: node scripts/validate-profiles.cjs
 * Static checks; does not prove that remote images load in a browser.
 */
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = name => fs.readFileSync(path.join(root, name), "utf8");
const jsFiles = ["animal-data.js", "animal-cards.js", "animal-detail.js", "home-animals.js", "script.js"];
for (const file of jsFiles) new vm.Script(read(file), { filename: file });
const context = vm.createContext({});
vm.runInContext(read("animal-data.js") + "\nthis.profiles = ANIMALS;", context);
const animals = context.profiles;
assert.equal(animals.length, 20, "Expected 20 profiles");
assert.equal(new Set(animals.map(a => a.id)).size, 20, "Duplicate profile IDs");
const ids = new Set(animals.map(a => a.id));
for (const a of animals) {
  assert.match(a.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  for (const field of ["commonName", "scientificName", "description", "habitat", "range", "ecologicalImportance"]) {
    assert.ok(a[field], a.id + " missing " + field);
  }
  assert.ok(a.status?.code && a.status?.label, a.id + " missing status");
  assert.ok(Array.isArray(a.threats) && a.threats.length, a.id + " missing threats");
  assert.ok(Array.isArray(a.conservationMethods) && a.conservationMethods.length, a.id + " missing conservation methods");
  assert.ok(Array.isArray(a.sources) && a.sources.length, a.id + " missing sources");
  const sourceIds = new Set(a.sources.map(s => s.id));
  assert.equal(sourceIds.size, a.sources.length, a.id + " duplicate source ID");
  for (const src of a.sources) assert.match(src.url, /^https:\/\//);
  const facts = [a.description, a.habitat, a.range, a.ecologicalImportance, a.population, a.status, ...a.threats, ...a.conservationMethods, ...(a.localActions || [])].filter(Boolean);
  for (const fact of facts) for (const id of (fact.sources || [])) assert.ok(sourceIds.has(id), a.id + " references missing source " + id);
  assert.ok(a.image?.src, a.id + " missing image");
  assert.ok(a.image?.alt && a.image?.credit && a.image?.license && a.image?.licenseUrl && a.image?.sourceUrl, a.id + " incomplete image attribution");
  if (!a.image.src.startsWith("https://")) assert.ok(fs.existsSync(path.join(root, a.image.src)), a.id + " missing local image");
  assert.match(a.image.licenseUrl, /^https:\/\//);
  assert.match(a.image.sourceUrl, /^https:\/\//);
  assert.ok(!a.description.text.includes("This profile summarizes"), a.id + " placeholder prose");
  assert.equal(context.getAnimalById(a.id).id, a.id);
  assert.equal(context.getAnimalProfileUrl(a), "animal.html?id=" + encodeURIComponent(a.id));
}
for (const [html, required] of Object.entries({
  "index.html": ["script.js", "animal-data.js", "home-animals.js", "animals.html"],
  "animals.html": ["script.js", "animal-data.js", "animal-cards.js"],
  "animal.html": ["script.js", "animal-data.js", "animal-detail.js"]
})) {
  const page = read(html);
  for (const file of required) assert.ok(page.includes(file), html + " missing " + file);
}
const home = read("home-animals.js");
const featured = [...home.matchAll(/"(amur-leopard|sumatran-orangutan|hawksbill-sea-turtle|red-panda|blue-whale|snow-leopard)"/g)].map(m => m[1]);
assert.equal(featured.length, 6);
for (const id of featured) assert.ok(ids.has(id), "Unknown featured species " + id);
console.log("PASS: JS syntax, 20 profiles, sources, images metadata, links, and page dependencies.");
