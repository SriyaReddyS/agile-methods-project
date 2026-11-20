# Animal dataset audit (2026-11-20)

Branch: `feature/expand-to-50-animal-profiles`. This is a **static dataset inventory, not a completed independent factual or browser verification**.

## Results
- 50 records and 50 unique scientific-name strings.
- 30 new records have `image.src = null`; no license-verified photographs have been added for these.
- Every record contains a Pittsburgh-facing `localActions` or `protectionActions` field. These actions have not been individually validated for availability or impact.
- Species status labels are **as stored**, not independently checked against the current IUCN assessments. Some labels may be outdated or taxonomically nuanced.
- Browser tests (desktop, mobile, image loading, card filtering, links, console errors): **NOT RUN**. No pass/fail claims are made.
- Prior duplicate `Dicerorhinus sumatrensis` entry was replaced with `Diceros bicornis` in commit `2c9f283`.

## Per-species inventory
| # | Common name | Scientific name | Stored IUCN code (unverified) | Photo path configured | Pittsburgh action field |
|---|---|---|---|---|---|
| 1 | Amur Leopard | *Panthera pardus orientalis* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 2 | Hawksbill Sea Turtle | *Eretmochelys imbricata* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 3 | Sumatran Orangutan | *Pongo abelii* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 4 | African Forest Elephant | *Loxodonta cyclotis* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 5 | Vaquita | *Phocoena sinus* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 6 | Javan Rhino | *Rhinoceros sondaicus* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 7 | Sumatran Rhino | *Dicerorhinus sumatrensis* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 8 | Saola | *Pseudoryx nghetinhensis* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 9 | Philippine Eagle | *Pithecophaga jefferyi* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 10 | Sunda Pangolin | *Manis javanica* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 11 | Cross River Gorilla | *Gorilla gorilla diehli* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 12 | Red Panda | *Ailurus fulgens* | EN | Yes (file existence/license unverified) | Yes (content unverified) |
| 13 | Tiger | *Panthera tigris* | EN | Yes (file existence/license unverified) | Yes (content unverified) |
| 14 | Asian Elephant | *Elephas maximus* | EN | Yes (file existence/license unverified) | Yes (content unverified) |
| 15 | Blue Whale | *Balaenoptera musculus* | EN | Yes (file existence/license unverified) | Yes (content unverified) |
| 16 | Whale Shark | *Rhincodon typus* | EN | Yes (file existence/license unverified) | Yes (content unverified) |
| 17 | Kemp's Ridley Sea Turtle | *Lepidochelys kempii* | CR | Yes (file existence/license unverified) | Yes (content unverified) |
| 18 | Snow Leopard | *Panthera uncia* | VU | Yes (file existence/license unverified) | Yes (content unverified) |
| 19 | Giant Panda | *Ailuropoda melanoleuca* | VU | Yes (file existence/license unverified) | Yes (content unverified) |
| 20 | Polar Bear | *Ursus maritimus* | VU | Yes (file existence/license unverified) | Yes (content unverified) |
| 21 | African Savanna Elephant | *Loxodonta africana* | EN | No | Yes (content unverified) |
| 22 | African Wild Dog | *Lycaon pictus* | EN | No | Yes (content unverified) |
| 23 | Bornean Orangutan | *Pongo pygmaeus* | CR | No | Yes (content unverified) |
| 24 | Chimpanzee | *Pan troglodytes* | EN | No | Yes (content unverified) |
| 25 | Eastern Lowland Gorilla | *Gorilla beringei graueri* | CR | No | Yes (content unverified) |
| 26 | Fin Whale | *Balaenoptera physalus* | VU | No | Yes (content unverified) |
| 27 | Giant Otter | *Pteronura brasiliensis* | EN | No | Yes (content unverified) |
| 28 | Green Sea Turtle | *Chelonia mydas* | LC | No | Yes (content unverified) |
| 29 | Hector's Dolphin | *Cephalorhynchus hectori* | EN | No | Yes (content unverified) |
| 30 | Indian Pangolin | *Manis crassicaudata* | EN | No | Yes (content unverified) |
| 31 | Indus River Dolphin | *Platanista minor* | EN | No | Yes (content unverified) |
| 32 | Jaguar | *Panthera onca* | NT | No | Yes (content unverified) |
| 33 | Mountain Gorilla | *Gorilla beringei beringei* | EN | No | Yes (content unverified) |
| 34 | North Atlantic Right Whale | *Eubalaena glacialis* | CR | No | Yes (content unverified) |
| 35 | Southern Rockhopper Penguin | *Eudyptes chrysocome* | VU | No | Yes (content unverified) |
| 36 | Sumatran Elephant | *Elephas maximus sumatranus* | CR | No | Yes (content unverified) |
| 37 | Black Rhinoceros | *Diceros bicornis* | CR | No | Yes (content unverified) |
| 38 | Tiger Shark | *Galeocerdo cuvier* | NT | No | Yes (content unverified) |
| 39 | African Lion | *Panthera leo* | VU | No | Yes (content unverified) |
| 40 | Cheetah | *Acinonyx jubatus* | VU | No | Yes (content unverified) |
| 41 | Clouded Leopard | *Neofelis nebulosa* | VU | No | Yes (content unverified) |
| 42 | Dhole | *Cuon alpinus* | EN | No | Yes (content unverified) |
| 43 | Gharial | *Gavialis gangeticus* | CR | No | Yes (content unverified) |
| 44 | Golden Lion Tamarin | *Leontopithecus rosalia* | EN | No | Yes (content unverified) |
| 45 | Greater One-Horned Rhinoceros | *Rhinoceros unicornis* | VU | No | Yes (content unverified) |
| 46 | Hippopotamus | *Hippopotamus amphibius* | VU | No | Yes (content unverified) |
| 47 | Malayan Tapir | *Tapirus indicus* | EN | No | Yes (content unverified) |
| 48 | Monarch Butterfly | *Danaus plexippus* | EN | No | Yes (content unverified) |
| 49 | Okapi | *Okapia johnstoni* | EN | No | Yes (content unverified) |
| 50 | Pygmy Hippopotamus | *Choeropsis liberiensis* | EN | No | Yes (content unverified) |

## Outstanding verification protocol
1. For each species, open its current IUCN Red List assessment and record assessment year, taxon, status, population trend and range. Cross-check ecological roles and threats against primary conservation bodies; do not treat generic IUCN search pages as proof of specific claims.
2. For each missing image, locate a correctly identified Commons file, inspect the individual file page, author, source, license and restrictions. Download into the repository and record `src`, `alt`, `credit`, `license`, `licenseUrl`, `sourceUrl`. Creative Commons attribution should include title (if given), author, source and license. Never invent credits or licenses.
3. In a real browser, load `animals.html`, verify 50 cards, search/filter behavior, every `animal.html?id=...` page, images and external links. Repeat on desktop and mobile viewport; record console errors and screenshots.
4. Do not merge to `main` until all checks pass.
