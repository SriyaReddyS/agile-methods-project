/* Run: node scripts/validate-profiles.cjs
 * Static checks; does not prove that remote images load in a browser.
 */
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = name => fs.readFileSync(path.join(root, name), "utf8");
const jsFiles = ["animal-data.js", "animal-cards.js", "animal-detail.js", "home-animals.js", "script.js", "chatbot.js", "organization-data.js", "organization-cards.js", "server/organizations.js"];
for (const file of jsFiles) new vm.Script(read(file), { filename: file });
const context = vm.createContext({});
vm.runInContext(read("animal-data.js") + "\nthis.profiles = ANIMALS;", context);
const animals = context.profiles;
assert.ok(animals.length > 0, "Expected at least one profile");
assert.equal(new Set(animals.map(a => a.id)).size, animals.length, "Duplicate profile IDs");
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
  // image.src: null is the documented placeholder state until a licensed photo is chosen.
  if (a.image?.src) {
    assert.ok(a.image.src.startsWith("images/"), a.id + " must use a local image");
    assert.ok(fs.existsSync(path.join(root, a.image.src)), a.id + " missing local image");
    assert.ok(a.image.alt && a.image.credit && a.image.license && a.image.licenseUrl && a.image.sourceUrl, a.id + " incomplete image attribution");
    assert.match(a.image.licenseUrl, /^https:\/\//);
    assert.match(a.image.sourceUrl, /^https:\/\//);
  }
  assert.ok(!a.description.text.includes("This profile summarizes"), a.id + " placeholder prose");
  assert.equal(context.getAnimalById(a.id).id, a.id);
  assert.equal(context.getAnimalProfileUrl(a), "animal.html?id=" + encodeURIComponent(a.id));
}
for (const [html, required] of Object.entries({
  "index.html": ["script.js", "animal-data.js", "animal-cards.js", "home-animals.js", "animals.html", "chatbot.js", "chatbot.css"],
  "animals.html": ["script.js", "animal-data.js", "animal-cards.js", "chatbot.js", "chatbot.css"],
  "animal.html": ["script.js", "animal-data.js", "animal-detail.js", "chatbot.js", "chatbot.css"]
})) {
  const page = read(html);
  for (const file of required) assert.ok(page.includes(file), html + " missing " + file);
}
// Ask AI entry points: landing nav/buttons and the profile button open the same widget.
assert.ok(read("index.html").includes("data-open-chatbot"), "index.html missing Ask AI entry point");
assert.ok(read("animal-detail.js").includes("data-open-chatbot"), "animal-detail.js missing Ask AI button");
assert.ok(read("chatbot.js").includes("data-open-chatbot"), "chatbot.js missing opener delegation");
assert.ok(read("chatbot.js").includes("New chat"), "chatbot.js missing chat reset");
// Verified Pittsburgh organization directory the chatbot answers from.
vm.runInContext(read("organization-data.js") + "\nthis.orgs = ORGANIZATIONS;", context);
assert.ok(Array.isArray(context.orgs) && context.orgs.length >= 1, "expected at least one organization");
for (const org of context.orgs) {
  assert.ok(org.id && org.name, "org missing id or name");
  assert.equal(new URL(org.website).protocol, "https:", org.id + " website must be https");
}
const home = read("home-animals.js");
const featured = [...home.matchAll(/"(amur-leopard|sumatran-orangutan|hawksbill-sea-turtle|red-panda|blue-whale|snow-leopard)"/g)].map(m => m[1]);
assert.equal(featured.length, 6);
for (const id of featured) assert.ok(ids.has(id), "Unknown featured species " + id);
console.log("PASS: JS syntax, " + animals.length + " profiles, sources, images metadata, links, and page dependencies.");
