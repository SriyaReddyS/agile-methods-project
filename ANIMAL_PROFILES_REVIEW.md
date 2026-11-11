# Animal Conservation Profiles: 20-species expansion

This branch expands the existing 3 animal profiles to 20. The directory renders cards from `ANIMALS`; each card links to `animal.html?id=<species-id>`.

## What changed
- 17 additional English species profiles with status, description, habitat, geographic range, threats, ecological role, protection methods, Pittsburgh conservation education, and cited source links.
- Completed ecological importance and conservation methods for the original three profiles.
- Added previous/next/directory navigation and responsive action cards.

## Photo rights and publication checklist
The original three licensed photographs remain unchanged. **All 17 new animals intentionally have `image.src: null`.** This renders the site's existing accessible “Photo coming soon” placeholder rather than claiming rights to unverified photos. Before publication, select a licensed image for each animal, download it to `images/`, and fill `src`, `alt`, `credit`, `license`, `licenseUrl`, and `sourceUrl`. Verify the individual photo's license and any share-alike requirements. Conservation organization photos are NOT automatically free to reuse.

## Data review checklist
- Recheck global IUCN status and assessment year for all 20 taxa, especially subspecies versus species.
- Verify that each cited page directly supports every sentence and update or replace broad organization pages with specific assessment references where possible.
- Avoid undated population estimates. New profiles intentionally omit estimates rather than inventing them.
- Confirm every external URL resolves and every new licensed image is attributed correctly.
- Test all 20 cards and URLs on desktop and mobile and check browser console errors.
- Discuss scope and directory/search integration with the Product Owner and teammate responsible for filters.

**Taxonomy note:** Green sea turtle is not included. The global IUCN assessment published in 2025 lists it as Least Concern; Kemp's ridley turtle is used instead.

## Quick browser-console smoke checks
Open `animals.html` with a local web server, then run:
```js
console.assert(ANIMALS.length === 20, "Expected 20 animals");
console.assert(new Set(ANIMALS.map(a => a.id)).size === 20, "Duplicate animal IDs");
console.assert(document.querySelectorAll(".animal-card").length === 20, "Missing cards");
for (const animal of ANIMALS) {
  const sourceIds = new Set(animal.sources.map(s => s.id));
  const facts = [animal.description, animal.habitat, animal.range, animal.ecologicalImportance,
    ...(animal.threats || []), ...(animal.conservationMethods || []), ...(animal.localActions || [])].filter(Boolean);
  for (const fact of facts) {
    console.assert((fact.sources || []).every(id => sourceIds.has(id)), "Missing source for " + animal.id);
  }
}
```
