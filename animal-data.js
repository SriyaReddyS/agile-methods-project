/* ==================================
   Wildlife Guardian
   Species Data
   ----------------------------------
   Data only. Pages that render animals
   (detail page, animal cards) read from
   ANIMALS and must not hardcode content.

   To add a species: add one object to
   ANIMALS. Its "id" becomes the profile
   URL: animal.html?id=<id>

   Field notes:
   - status: global IUCN Red List category for the named taxon.
   - habitat.filters: applicable directory habitat options.
   - population: optional. Always dated;
     estimates go stale, so re-check them.
   - image.src: null until a team-owned or
     properly licensed photo is available.
     Every photo needs credit, license,
     licenseUrl, and sourceUrl. Check each
     Wikimedia Commons file's own license.
   - sources: each fact lists the ids of
     the sources that support it.
================================== */

const ANIMALS = [
{
        id: "amur-leopard",
        commonName: "Amur Leopard",
        scientificName: "Panthera pardus orientalis",
        status: {
            code: "CR",
            label: "Critically Endangered",
            authority: "IUCN Red List subspecies",
            sources: [
                "iucn-amur-leopard"
            ]
        },
        image: {
            src: "images/amur-leopard.jpg",
            alt: "Amur leopard with a spotted coat standing on rocks at Colchester Zoo",
            credit: "William Warby, Colchester Zoo",
            license: "CC BY 2.0",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Panthera_pardus_orientalis_Colchester_Zoo_(1).jpg"
        },
        description: {
            text: "The Amur leopard is a leopard subspecies found only in the Russian Far East and Northeast China. It lives in temperate forests and depends on hoofed prey such as sika deer.",
            sources: ["wcs-amur-leopard"]
        },
        habitat: {
            text: "Temperate deciduous and mixed forests with high tree cover and plenty of hoofed prey (ungulates). Leopards use areas with heavy cattle grazing less, likely because grazing affects sika deer, one of their main prey species.",
            sources: [
                "wcs-amur-leopard"
            ],
            filters: [
                "temperate"
            ]
        },
        range: {
            text: "Found only in the Russian Far East and Northeast China. Some individuals use land on both sides of the Russia–China border.",
            sources: ["wcs-amur-leopard"]
        },
        threats: [
            { text: "Habitat loss", sources: ["wcs-amur-leopard"] },
            { text: "Lack of prey", sources: ["wcs-amur-leopard"] },
            { text: "Disease, such as canine distemper virus", sources: ["wcs-amur-leopard"] },
            { text: "Inbreeding depression in a very small population", sources: ["wcs-amur-leopard"] }
        ],
        ecologicalImportance: {
            text: "Amur leopards are forest predators that feed on roe deer, sika deer, and wild boar. This predator–prey relationship is part of the forest food web. Protecting leopards also requires protecting their prey and the connected forests they share with other wildlife.",
            sources: ["wcs-amur-leopard"]
        },
        protectionActions: [
            {
                text: "From Pittsburgh, donate online or organize a small school or neighborhood fundraiser for WCS. Its Amur leopard work includes removing snares that threaten prey and working with communities in the species’ range. General donations support WCS’s wider conservation work; check with WCS before describing a gift as earmarked for leopards.",
                sources: ["wcs-amur-leopard", "wcs-support"]
            },
            {
                text: "Create a short, source-linked presentation for a Pittsburgh classroom, campus club, or community group about Amur leopards and their prey. Share WCS’s conservation work and online support options so participants can help from home rather than needing to travel to leopard habitat.",
                sources: ["wcs-amur-leopard", "wcs-support"]
            }
        ],
        population: {
            text: "About 84 adults and subadults were estimated in 2014–2015 (published 2018). Surveys on both sides of the border suggest numbers are rising, but no newer total has been verified for this site.",
            asOf: "2014–2015",
            sources: ["wcs-amur-leopard"]
        },
        sources: [
            {
                id: "wcs-amur-leopard",
                title: "Amur Leopard",
                publisher: "Wildlife Conservation Society (WCS) China",
                url: "https://china.wcs.org/Wildlife/Amur-Leopard.aspx",
                accessed: "2026-11-02"
            },
            {
                id: "iucn-amur-leopard",
                title: "IUCN Red List assessment for Panthera pardus orientalis",
                publisher: "IUCN Red List",
                url: "https://www.iucnredlist.org/species/15957/5333757",
                assessed: "2008-06-30",
                published: "2008",
                accessed: "2026-11-20"
            },
            {
                id: "wcs-support",
                title: "Get Involved",
                publisher: "Wildlife Conservation Society",
                url: "https://www.wcs.org/get-involved",
                accessed: "2026-11-06"
            }
        ]
    },
{
        id: "hawksbill-sea-turtle",
        commonName: "Hawksbill Sea Turtle",
        scientificName: "Eretmochelys imbricata",
        status: {
            code: "CR",
            label: "Critically Endangered",
            authority: "IUCN Red List",
            note: "Also listed as endangered throughout its range under the U.S. Endangered Species Act.",
            sources: [
                "iucn-hawksbill",
                "mtsg-hawksbill-2007",
                "noaa-hawksbill"
            ]
        },
        image: {
            src: "images/hawksbill-sea-turtle.jpg",
            alt: "Hawksbill sea turtle with a narrow, pointed beak swimming in blue water above a coral reef",
            credit: "Diego Delso, Ras Muhammad National Park, Egypt",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Tortuga_carey_(Eretmochelys_imbricata),_parque_nacional_Ras_Muhammad,_Egipto,_2022-03-28,_DD_56.jpg"
        },
        description: {
            text: "The hawksbill is a small to medium-sized sea turtle named for its narrow, hawk-like beak. It feeds mainly on sponges and is most closely associated with coral reefs. Its patterned shell has made it a target of the tortoiseshell trade.",
            sources: ["fws-hawksbill"]
        },
        habitat: {
            text: "Mostly nearshore foraging grounds, especially healthy coral reefs, plus rocky areas, lagoons, and shallow coastal waters. Adults are seldom seen in water deeper than about 65 feet. Hatchlings spend roughly 1 to 5 years in the open ocean. Females nest on tropical sandy beaches.",
            sources: [
                "noaa-hawksbill",
                "fws-hawksbill"
            ],
            filters: [
                "marine"
            ]
        },
        range: {
            text: "Warm waters of the Atlantic, Pacific, and Indian Oceans. In U.S. waters and nearby, it is widely distributed in the Caribbean Sea and western Atlantic Ocean.",
            sources: ["noaa-hawksbill", "fws-hawksbill"]
        },
        threats: [
            { text: "Illegal trade in tortoiseshell, turtles, and eggs", sources: ["noaa-hawksbill", "fws-hawksbill"] },
            { text: "Bycatch in fishing gear, especially gillnets and hook-and-line fisheries", sources: ["noaa-hawksbill"] },
            { text: "Loss of nesting beaches and coral reefs from coastal development, climate change, and pollution", sources: ["noaa-hawksbill"] },
            { text: "Beachfront lighting that disorients hatchlings", sources: ["fws-hawksbill"] },
            { text: "Predation of eggs and hatchlings, including by introduced dogs, cats, and pigs", sources: ["noaa-hawksbill"] },
            { text: "Vessel strikes and marine debris", sources: ["noaa-hawksbill"] }
        ],
        ecologicalImportance: {
            text: "Hawksbills play an important role in marine ecosystems as sponge-eating sea turtles. Their narrow beaks let them feed in reef cracks and crevices, linking sponges and other reef organisms to the reef food web. Protecting their feeding habitat also protects the coral reef communities they depend on.",
            sources: ["noaa-hawksbill", "fws-hawksbill"]
        },
        protectionActions: [
            {
                text: "When shopping in Pittsburgh stores or online, refuse real tortoiseshell jewelry, combs, and ornaments. Ask what a product is made from and choose a clearly identified non-wildlife alternative if the material is uncertain; illegal hawksbill shell trade remains a threat.",
                sources: ["noaa-hawksbill", "fws-hawksbill"]
            },
            {
                text: "Carry reusable bags and bottles in Pittsburgh, secure trash, and avoid balloon releases. Join an Allegheny CleanWays land or river cleanup through its volunteer listings. Local cleanup prevents litter entering waterways; it is an indirect contribution to reducing ocean debris, not a local hawksbill rescue activity.",
                sources: ["noaa-hawksbill", "allegheny-cleanways"]
            },
            {
                text: "Share NOAA’s hawksbill information with a Pittsburgh school or community group, including the risks from marine debris and the shell trade. These are actions residents can take and explain from home, even though hawksbills do not live in Pittsburgh’s rivers.",
                sources: ["noaa-hawksbill"]
            }
        ],
        population: null,
        sources: [
            {
                id: "noaa-hawksbill",
                title: "Hawksbill Turtle",
                publisher: "NOAA Fisheries",
                url: "https://www.fisheries.noaa.gov/species/hawksbill-turtle",
                updated: "2026-07-27",
                accessed: "2026-11-02"
            },
            {
                id: "fws-hawksbill",
                title: "Hawksbill Sea Turtle (Eretmochelys imbricata)",
                publisher: "U.S. Fish & Wildlife Service",
                url: "https://www.fws.gov/species/hawksbill-sea-turtle-eretmochelys-imbricata",
                accessed: "2026-11-02"
            },
            {
                id: "mtsg-hawksbill-2007",
                title: "Hawksbill turtle (Eretmochelys imbricata) Red List status assessment, 2007",
                publisher: "IUCN SSC Marine Turtle Specialist Group (hosted by WIDECAST)",
                url: "https://www.widecast.org/Resources/Docs/MTSG_Assessment_EI_2007.pdf",
                accessed: "2026-11-02"
            },
            {
                id: "iucn-hawksbill",
                title: "IUCN Red List assessment for Eretmochelys imbricata",
                publisher: "IUCN Red List",
                url: "https://www.iucnredlist.org/species/8005/12881238",
                assessed: "2008-06-30",
                published: "2008",
                accessed: "2026-11-20"
            },
            {
                id: "allegheny-cleanways",
                title: "Land-Based Cleanups",
                publisher: "Allegheny CleanWays",
                url: "https://www.alleghenycleanways.org/land-based-cleanups.html",
                accessed: "2026-11-06"
            }
        ]
    },
{
        id: "sumatran-orangutan",
        commonName: "Sumatran Orangutan",
        scientificName: "Pongo abelii",
        status: {
            code: "CR",
            label: "Critically Endangered",
            authority: "IUCN Red List",
            sources: [
                "iucn-orangutan"
            ]
        },
        image: {
            src: "images/sumatran-orangutan.jpg",
            alt: "Close-up of a Sumatran orangutan with long reddish-brown hair and a pale beard, arms raised and holding a rope",
            credit: "Steffen Prößdorf, Zoo Dresden",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:2025-05-11_Zoo_Dresden_STP_3563-2.jpg"
        },
        description: {
            text: "The Sumatran orangutan is a great ape found only on the Indonesian island of Sumatra. It lives mainly in lowland primary forest in the north of the island.",
            sources: ["apes-atlas-orangutan"]
        },
        habitat: {
            text: "Primary tropical forest, mostly below 1,500 metres above sea level. Orangutan density declines with altitude, and few if any breeding populations live higher up.",
            sources: [
                "apes-atlas-orangutan",
                "adw-orangutan"
            ],
            filters: [
                "tropical"
            ]
        },
        range: {
            text: "Endemic to Sumatra, Indonesia. Most wild individuals occur in northern Sumatra, particularly the Leuser Ecosystem. Reintroduced orangutans also occur in the Bukit Tigapuluh landscape.",
            sources: [
                "iucn-orangutan",
                "apes-atlas-orangutan"
            ]
        },
        threats: [
            { text: "Habitat loss and fragmentation from oil-palm plantations and logging", sources: ["apes-atlas-orangutan", "sos-challenges", "adw-orangutan"] },
            { text: "New roads that split up forests and give poachers access", sources: ["apes-atlas-orangutan", "sos-challenges"] },
            { text: "Illegal pet trade and deliberate killing", sources: ["apes-atlas-orangutan", "sos-challenges", "adw-orangutan"] },
            { text: "Conflict with people, such as crop raiding", sources: ["apes-atlas-orangutan", "sos-challenges"] },
            { text: "Land-use planning that opens habitat to plantations, timber, and mining", sources: ["apes-atlas-orangutan"] }
        ],
        ecologicalImportance: {
            text: "Sumatran orangutans disperse seeds as they travel through the forest eating fruit. This helps maintain the diversity of rainforest trees and other woody plants. Protecting their forest habitat also shelters the many other species that share it.",
            sources: ["adw-orangutan"]
        },
        protectionActions: [
            {
                text: "When buying groceries, cosmetics, or household products in Pittsburgh or online, look for RSPO-certified sustainable palm oil and check manufacturers’ sourcing policies. Use the Palm Oil Scan app recommended by the Sumatran Orangutan Society (SOS). SOS recommends sustainable, deforestation-free sourcing rather than a blanket palm-oil boycott.",
                sources: ["sos-palm-oil"]
            },
            {
                text: "Email brands or ask Pittsburgh retailers to stock products with certified sustainable palm oil and publish deforestation-free sourcing commitments. Share what you learn with a school or neighborhood group to help others make informed purchases.",
                sources: ["sos-palm-oil"]
            },
            {
                text: "Donate online or hold a Pittsburgh community fundraiser for SOS’s work with partners in Sumatra. Its work includes protecting and reconnecting forest habitat, restoring degraded forest, and supporting forest-edge communities; participation does not require overseas travel.",
                sources: ["sos-palm-oil"]
            }
        ],
        population: {
            text: "About 13,846 individuals were estimated in 2016 (Wich et al. 2016). This was higher than an earlier estimate of about 6,600 because of better survey methods, not population growth. The IUCN assessment (Singleton et al. 2023) reports that overall numbers continue to decline.",
            asOf: "2016",
            sources: ["apes-atlas-orangutan"]
        },
        sources: [
            {
                id: "apes-atlas-orangutan",
                title: "Sumatran Orangutan",
                publisher: "IUCN SSC A.P.E.S. Portal — Apes Atlas",
                url: "https://apesatlas.iucnapesportal.org/index.php/Sumatran_Orangutan",
                updated: "2025-10-30",
                accessed: "2026-11-02"
            },
            {
                id: "esabii-orangutan",
                title: "Pongo abelii",
                publisher: "ESABII Data Portal, Biodiversity Center of Japan",
                url: "https://www.esabii.biodic.go.jp/database/mammal/primates/pongo_abelii.html",
                accessed: "2026-11-02"
            },
            {
                id: "iucn-orangutan",
                title: "IUCN Red List assessment for Pongo abelii",
                publisher: "IUCN Red List",
                url: "https://www.iucnredlist.org/species/121097935/259045437",
                assessed: "2017-10-16",
                published: "2024",
                accessed: "2026-11-20"
            },
            {
                id: "adw-orangutan",
                title: "Pongo abelii — Sumatran orangutan",
                publisher: "Animal Diversity Web, University of Michigan Museum of Zoology",
                url: "https://animaldiversity.org/accounts/Pongo_abelii/",
                accessed: "2026-11-06"
            },
            {
                id: "sos-palm-oil",
                title: "About Palm Oil: The Problem, The Impact & The Solution",
                publisher: "Sumatran Orangutan Society",
                url: "https://www.orangutans-sos.org/learn/palm-oil/",
                accessed: "2026-11-06"
            },
            {
                id: "sos-challenges",
                title: "Conservation Challenges",
                publisher: "Sumatran Orangutan Society",
                url: "https://www.orangutans-sos.org/learn/conservation-challenges/",
                accessed: "2026-11-06"
            }
        ]
    },
{
        "id": "african-forest-elephant",
        "commonName": "African Forest Elephant",
        "scientificName": "Loxodonta cyclotis",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "primary-african-forest-elephant"
            ]
        },
        "image": {
            "src": "images/african-forest-elephant.jpg",
            "alt": "African forest elephant",
            "credit": "VIGNA christian",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:African_Forest_Elephant.jpg"
        },
        "description": {
            "text": "A smaller African elephant with rounded ears and relatively straight tusks, native to tropical forests.",
            "sources": [
                "primary-african-forest-elephant"
            ]
        },
        "habitat": {
            "text": "Humid lowland rainforest, forest clearings, and connected woodland habitats.",
            "sources": [
                "primary-african-forest-elephant"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Central and West Africa, especially the Congo Basin.",
            "sources": [
                "primary-african-forest-elephant"
            ]
        },
        "threats": [
            {
                "text": "Ivory poaching",
                "sources": [
                    "primary-african-forest-elephant"
                ]
            },
            {
                "text": "Forest conversion and fragmentation",
                "sources": [
                    "primary-african-forest-elephant"
                ]
            },
            {
                "text": "Conflict with people",
                "sources": [
                    "primary-african-forest-elephant"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Forest elephants disperse large seeds over long distances and help maintain tropical forest diversity.",
            "sources": [
                "primary-african-forest-elephant"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support forest habitat protection",
                "sources": [
                    "primary-african-forest-elephant"
                ]
            },
            {
                "text": "Reject ivory products and wildlife trafficking",
                "sources": [
                    "primary-african-forest-elephant"
                ]
            },
            {
                "text": "Support locally led anti-poaching efforts",
                "sources": [
                    "primary-african-forest-elephant"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "primary-african-forest-elephant",
                "title": "IUCN Red List assessment for Loxodonta cyclotis",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/181007989/292481365",
                "assessed": "2026-01-09",
                "published": "2026",
                "accessed": "2026-11-20"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "vaquita",
        "commonName": "Vaquita",
        "scientificName": "Phocoena sinus",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-vaquita"
            ]
        },
        "image": {
            "src": "images/vaquita.png",
            "alt": "Artist’s illustration of a vaquita porpoise swimming; not a wildlife photograph",
            "mediaType": "illustration",
            "credit": "좀비 브렌다",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Vaquita_swimming_through_the_void._(Phocoena_Sinus).png"
        },
        "description": {
            "text": "A rare porpoise restricted to Mexico's Gulf of California.",
            "sources": [
                "primary-vaquita",
                "iucn-vaquita"
            ]
        },
        "habitat": {
            "text": "Shallow, productive coastal waters of the upper Gulf of California.",
            "sources": [
                "primary-vaquita",
                "iucn-vaquita"
            ],
            "filters": [
                "marine"
            ]
        },
        "range": {
            "text": "Only the northern Gulf of California, Mexico.",
            "sources": [
                "primary-vaquita",
                "iucn-vaquita"
            ]
        },
        "threats": [
            {
                "text": "Entanglement and drowning in gillnets",
                "sources": [
                    "primary-vaquita",
                    "iucn-vaquita"
                ]
            },
            {
                "text": "Illegal totoaba fishing",
                "sources": [
                    "primary-vaquita",
                    "iucn-vaquita"
                ]
            },
            {
                "text": "Extremely small surviving population",
                "sources": [
                    "primary-vaquita",
                    "iucn-vaquita"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Vaquitas are native marine predators in a highly productive coastal food web.",
            "sources": [
                "primary-vaquita",
                "iucn-vaquita"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support gillnet-free fisheries",
                "sources": [
                    "primary-vaquita"
                ]
            },
            {
                "text": "Support enforcement against illegal fishing",
                "sources": [
                    "primary-vaquita"
                ]
            },
            {
                "text": "Learn about responsible seafood choices",
                "sources": [
                    "primary-vaquita"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-vaquita",
                "title": "IUCN Red List assessment for Phocoena sinus",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/17028/214541137",
                "assessed": "2022-03-02",
                "published": "2022",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-vaquita",
                "title": "Vaquita",
                "publisher": "NOAA Fisheries",
                "url": "https://www.fisheries.noaa.gov/species/vaquita",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "javan-rhino",
        "commonName": "Javan Rhino",
        "scientificName": "Rhinoceros sondaicus",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-javan-rhino"
            ]
        },
        "image": {
            "src": "images/javan-rhino.jpg",
            "alt": "Historical circa-1900 postcard showing a Javan rhinoceros, not a contemporary wildlife photograph",
            "mediaType": "historical",
            "credit": "Unknown photographer (historical postcard, circa 1900)",
            "license": "Public domain",
            "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Javan_Rhino_1900.jpg"
        },
        "description": {
            "text": "A rare one-horned rhinoceros surviving in one Indonesian national park.",
            "sources": [
                "primary-javan-rhino",
                "iucn-javan-rhino"
            ]
        },
        "habitat": {
            "text": "Dense tropical lowland forest, wet clearings, and freshwater habitats.",
            "sources": [
                "primary-javan-rhino",
                "iucn-javan-rhino"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Ujung Kulon National Park on Java, Indonesia.",
            "sources": [
                "primary-javan-rhino",
                "iucn-javan-rhino"
            ]
        },
        "threats": [
            {
                "text": "Single-site population vulnerable to disasters",
                "sources": [
                    "primary-javan-rhino",
                    "iucn-javan-rhino"
                ]
            },
            {
                "text": "Poaching risk",
                "sources": [
                    "primary-javan-rhino",
                    "iucn-javan-rhino"
                ]
            },
            {
                "text": "Invasive plants reducing food habitat",
                "sources": [
                    "primary-javan-rhino",
                    "iucn-javan-rhino"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "As a large browser, this rhinoceros influences vegetation and forest dynamics.",
            "sources": [
                "primary-javan-rhino",
                "iucn-javan-rhino"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support protection of Ujung Kulon",
                "sources": [
                    "primary-javan-rhino"
                ]
            },
            {
                "text": "Support invasive plant removal and habitat restoration",
                "sources": [
                    "primary-javan-rhino"
                ]
            },
            {
                "text": "Reject rhino horn products",
                "sources": [
                    "primary-javan-rhino"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-javan-rhino",
                "title": "IUCN Red List assessment for Rhinoceros sondaicus",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/19495/18493900",
                "assessed": "2019-05-28",
                "published": "2020",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-javan-rhino",
                "title": "Javan Rhinos",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/rhino/javan-rhino/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "sumatran-rhino",
        "commonName": "Sumatran Rhino",
        "scientificName": "Dicerorhinus sumatrensis",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-sumatran-rhino"
            ]
        },
        "image": {
            "src": "images/sumatran-rhino.jpg",
            "alt": "Sumatran rhinoceros photographed at Cincinnati Zoo",
            "credit": "Ltshears",
            "license": "CC BY-SA 3.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:SumatranRhino2_CincinnatiZoo.jpg"
        },
        "description": {
            "text": "The smallest living rhinoceros, with two horns and a hairy coat.",
            "sources": [
                "primary-sumatran-rhino",
                "iucn-sumatran-rhino"
            ]
        },
        "habitat": {
            "text": "Dense tropical lowland and montane forests.",
            "sources": [
                "primary-sumatran-rhino",
                "iucn-sumatran-rhino"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Remaining isolated populations in Indonesia, principally Sumatra and Borneo.",
            "sources": [
                "primary-sumatran-rhino",
                "iucn-sumatran-rhino"
            ]
        },
        "threats": [
            {
                "text": "Severely fragmented populations",
                "sources": [
                    "primary-sumatran-rhino",
                    "iucn-sumatran-rhino"
                ]
            },
            {
                "text": "Limited breeding opportunities",
                "sources": [
                    "primary-sumatran-rhino",
                    "iucn-sumatran-rhino"
                ]
            },
            {
                "text": "Poaching and forest loss",
                "sources": [
                    "primary-sumatran-rhino",
                    "iucn-sumatran-rhino"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "This forest browser helps shape vegetation and its protection also safeguards diverse forest habitats.",
            "sources": [
                "primary-sumatran-rhino",
                "iucn-sumatran-rhino"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support connected forest habitat",
                "sources": [
                    "primary-sumatran-rhino"
                ]
            },
            {
                "text": "Support science-led breeding and recovery programs",
                "sources": [
                    "primary-sumatran-rhino"
                ]
            },
            {
                "text": "Reject illegal rhino horn trade",
                "sources": [
                    "primary-sumatran-rhino"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-sumatran-rhino",
                "title": "IUCN Red List assessment for Dicerorhinus sumatrensis",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/6553/18493355",
                "assessed": "2019-05-29",
                "published": "2020",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-sumatran-rhino",
                "title": "Sumatran Rhinos",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/rhino/sumatran-rhino/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "saola",
        "commonName": "Saola",
        "scientificName": "Pseudoryx nghetinhensis",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-saola"
            ]
        },
        "image": {
            "src": "images/saola.jpg",
            "alt": "Saola photographed in Vietnam",
            "credit": "Dao Nguyen and James Hardcastle",
            "license": "CC BY 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pseudoryx_nghetinhensis_318199.jpg"
        },
        "description": {
            "text": "An elusive forest-dwelling bovine sometimes called the Asian unicorn.",
            "sources": [
                "primary-saola",
                "iucn-saola"
            ]
        },
        "habitat": {
            "text": "Evergreen forests and stream valleys in the Annamite Mountains.",
            "sources": [
                "primary-saola",
                "iucn-saola"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Annamite Mountains of Laos and Vietnam.",
            "sources": [
                "primary-saola",
                "iucn-saola"
            ]
        },
        "threats": [
            {
                "text": "Wire snares set for other wildlife",
                "sources": [
                    "primary-saola",
                    "iucn-saola"
                ]
            },
            {
                "text": "Forest degradation",
                "sources": [
                    "primary-saola",
                    "iucn-saola"
                ]
            },
            {
                "text": "Extremely rare and poorly documented populations",
                "sources": [
                    "primary-saola",
                    "iucn-saola"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Protecting saola habitat benefits many other threatened Annamite forest species.",
            "sources": [
                "primary-saola",
                "iucn-saola"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support snare removal programs",
                "sources": [
                    "primary-saola"
                ]
            },
            {
                "text": "Support community-based forest protection",
                "sources": [
                    "primary-saola"
                ]
            },
            {
                "text": "Avoid products linked to illegal wildlife trade",
                "sources": [
                    "primary-saola"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-saola",
                "title": "IUCN Red List assessment for Pseudoryx nghetinhensis",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/18597/166485696",
                "assessed": "2015-11-27",
                "published": "2020",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-saola",
                "title": "Saola",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/saola/",
                "accessed": "2026-11-20"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "philippine-eagle",
        "commonName": "Philippine Eagle",
        "scientificName": "Pithecophaga jefferyi",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-philippine-eagle"
            ]
        },
        "image": {
            "src": "images/philippine-eagle.jpg",
            "alt": "Philippine eagle at the Philippine Eagle Center in Davao",
            "credit": "RoyKabanlit",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Philippine_Eagle_at_the_Philippine_Eagle_Center_001.jpg"
        },
        "description": {
            "text": "A large forest eagle endemic to the Philippines.",
            "sources": [
                "primary-philippine-eagle",
                "iucn-philippine-eagle"
            ]
        },
        "habitat": {
            "text": "Old-growth and mature tropical forest with tall nesting trees.",
            "sources": [
                "primary-philippine-eagle",
                "iucn-philippine-eagle"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Endemic to the Philippines, with records on Luzon, Samar, Leyte and Mindanao.",
            "sources": [
                "iucn-philippine-eagle"
            ]
        },
        "threats": [
            {
                "text": "Deforestation",
                "sources": [
                    "primary-philippine-eagle",
                    "iucn-philippine-eagle"
                ]
            },
            {
                "text": "Hunting and persecution",
                "sources": [
                    "primary-philippine-eagle",
                    "iucn-philippine-eagle"
                ]
            },
            {
                "text": "Small isolated breeding populations",
                "sources": [
                    "primary-philippine-eagle",
                    "iucn-philippine-eagle"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "As a top predator, this eagle contributes to the balance of forest food webs.",
            "sources": [
                "primary-philippine-eagle",
                "iucn-philippine-eagle"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support forest restoration",
                "sources": [
                    "primary-philippine-eagle"
                ]
            },
            {
                "text": "Protect nesting trees and breeding territories",
                "sources": [
                    "primary-philippine-eagle"
                ]
            },
            {
                "text": "Support Philippine conservation organizations",
                "sources": [
                    "primary-philippine-eagle"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-philippine-eagle",
                "title": "IUCN Red List assessment for Pithecophaga jefferyi",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/22696012/273773083",
                "assessed": "2025-06-17",
                "published": "2025",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-philippine-eagle",
                "title": "The Philippine Eagle",
                "publisher": "Philippine Eagle Foundation",
                "url": "https://www.philippineeaglefoundation.org/philippine-eagle",
                "accessed": "2026-11-20"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "sunda-pangolin",
        "commonName": "Sunda Pangolin",
        "scientificName": "Manis javanica",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-sunda-pangolin"
            ]
        },
        "image": {
            "src": "images/sunda-pangolin.jpg",
            "alt": "Sunda pangolin (Manis javanica)",
            "credit": "Ari hidayat99",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sunda_Pangolin_Trenggiling_jawa.jpg"
        },
        "description": {
            "text": "A nocturnal, scale-covered mammal that feeds on ants and termites.",
            "sources": [
                "primary-sunda-pangolin",
                "iucn-sunda-pangolin"
            ]
        },
        "habitat": {
            "text": "Tropical forests, secondary woodland, and some modified landscapes.",
            "sources": [
                "primary-sunda-pangolin",
                "iucn-sunda-pangolin"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Mainland and island Southeast Asia, including parts of Malaysia and Indonesia.",
            "sources": [
                "primary-sunda-pangolin",
                "iucn-sunda-pangolin"
            ]
        },
        "threats": [
            {
                "text": "Illegal trade in scales and meat",
                "sources": [
                    "primary-sunda-pangolin",
                    "iucn-sunda-pangolin"
                ]
            },
            {
                "text": "Habitat loss",
                "sources": [
                    "primary-sunda-pangolin",
                    "iucn-sunda-pangolin"
                ]
            },
            {
                "text": "Hunting and trafficking",
                "sources": [
                    "primary-sunda-pangolin",
                    "iucn-sunda-pangolin"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Pangolins consume ants and termites and are part of forest insect-control food webs.",
            "sources": [
                "primary-sunda-pangolin",
                "iucn-sunda-pangolin"
            ]
        },
        "conservationMethods": [
            {
                "text": "Never buy pangolin products",
                "sources": [
                    "primary-sunda-pangolin"
                ]
            },
            {
                "text": "Report suspected illegal wildlife sales",
                "sources": [
                    "primary-sunda-pangolin"
                ]
            },
            {
                "text": "Support anti-trafficking and habitat programs",
                "sources": [
                    "primary-sunda-pangolin"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-sunda-pangolin",
                "title": "IUCN Red List assessment for Manis javanica",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/12763/123584856",
                "assessed": "2019-05-02",
                "published": "2019",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-sunda-pangolin",
                "title": "Pangolins",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/pangolin/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "cross-river-gorilla",
        "commonName": "Cross River Gorilla",
        "scientificName": "Gorilla gorilla diehli",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List subspecies",
            "sources": [
                "iucn-cross-river-gorilla"
            ]
        },
        "image": {
            "src": "images/cross-river-gorilla.jpg",
            "alt": "Cross River gorilla Nyango at Limbe Wildlife Centre, Cameroon",
            "credit": "Julielangford",
            "license": "CC BY-SA 3.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cross-river-gorilla.jpg"
        },
        "description": {
            "text": "A rare western gorilla subspecies in the Nigeria-Cameroon border region.",
            "sources": [
                "primary-cross-river-gorilla",
                "iucn-cross-river-gorilla"
            ]
        },
        "habitat": {
            "text": "Rugged forested hills and montane tropical forest.",
            "sources": [
                "primary-cross-river-gorilla",
                "iucn-cross-river-gorilla"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Small fragmented forests along the Nigeria-Cameroon border.",
            "sources": [
                "primary-cross-river-gorilla",
                "iucn-cross-river-gorilla"
            ]
        },
        "threats": [
            {
                "text": "Habitat fragmentation",
                "sources": [
                    "primary-cross-river-gorilla",
                    "iucn-cross-river-gorilla"
                ]
            },
            {
                "text": "Hunting pressure",
                "sources": [
                    "primary-cross-river-gorilla",
                    "iucn-cross-river-gorilla"
                ]
            },
            {
                "text": "Small isolated groups",
                "sources": [
                    "primary-cross-river-gorilla",
                    "iucn-cross-river-gorilla"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Gorillas disperse seeds and influence the regeneration of tropical forests.",
            "sources": [
                "primary-cross-river-gorilla",
                "iucn-cross-river-gorilla"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support protected forest corridors",
                "sources": [
                    "primary-cross-river-gorilla"
                ]
            },
            {
                "text": "Support community conservation",
                "sources": [
                    "primary-cross-river-gorilla"
                ]
            },
            {
                "text": "Reject bushmeat from protected wildlife",
                "sources": [
                    "primary-cross-river-gorilla"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-cross-river-gorilla",
                "title": "IUCN Red List assessment for Gorilla gorilla diehli",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/39998/102326240",
                "assessed": "2016-01-05",
                "published": "2016",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-cross-river-gorilla",
                "title": "Cross River Gorillas",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/gorilla/cross-river-gorilla/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "red-panda",
        "commonName": "Red Panda",
        "scientificName": "Ailurus fulgens",
        "status": {
            "code": "EN",
            "label": "Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-red-panda"
            ]
        },
        "image": {
            "src": "images/red-panda.jpg",
            "alt": "Red panda resting among branches, with reddish fur and a ringed tail",
            "credit": "schani",
            "license": "CC BY-SA 2.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Red_Panda_c.jpg"
        },
        "description": {
            "text": "A tree-dwelling mammal adapted to cool Himalayan forests.",
            "sources": [
                "primary-red-panda",
                "iucn-red-panda"
            ]
        },
        "habitat": {
            "text": "Temperate mountain forests with bamboo understory and suitable nesting trees.",
            "sources": [
                "primary-red-panda",
                "iucn-red-panda"
            ],
            "filters": [
                "temperate"
            ]
        },
        "range": {
            "text": "Montane forests of Nepal, India, Bhutan, northern Myanmar and southwestern China under the taxon concept used by this IUCN assessment.",
            "sources": [
                "primary-red-panda",
                "iucn-red-panda"
            ]
        },
        "threats": [
            {
                "text": "Loss of forest and bamboo habitat",
                "sources": [
                    "primary-red-panda",
                    "iucn-red-panda"
                ]
            },
            {
                "text": "Poaching and accidental trapping",
                "sources": [
                    "primary-red-panda",
                    "iucn-red-panda"
                ]
            },
            {
                "text": "Habitat fragmentation",
                "sources": [
                    "primary-red-panda",
                    "iucn-red-panda"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Red pandas are part of Himalayan forest food webs, and protecting them preserves bamboo-rich forests.",
            "sources": [
                "primary-red-panda",
                "iucn-red-panda"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support forest corridors",
                "sources": [
                    "primary-red-panda"
                ]
            },
            {
                "text": "Avoid wildlife-fur products",
                "sources": [
                    "primary-red-panda"
                ]
            },
            {
                "text": "Support community-based forest protection",
                "sources": [
                    "primary-red-panda"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-red-panda",
                "title": "IUCN Red List assessment for Ailurus fulgens",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/714/110023718",
                "assessed": "2015-04-11",
                "published": "2015",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-red-panda",
                "title": "Red Pandas",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/red-panda/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "tiger",
        "commonName": "Tiger",
        "scientificName": "Panthera tigris",
        "status": {
            "code": "EN",
            "label": "Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-tiger"
            ]
        },
        "image": {
            "src": "images/tiger.jpg",
            "alt": "Bengal tiger photographed in India",
            "credit": "Suhel Quader",
            "license": "CC BY 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Panthera_tigris_tigris_45151794.jpg"
        },
        "description": {
            "text": "The largest wild cat and a major predator in Asian ecosystems.",
            "sources": [
                "primary-tiger",
                "iucn-tiger"
            ]
        },
        "habitat": {
            "text": "Forests, grasslands, and mangroves with enough prey and cover.",
            "sources": [
                "primary-tiger",
                "iucn-tiger"
            ],
            "filters": [
                "temperate",
                "tropical"
            ]
        },
        "range": {
            "text": "Fragmented habitats across parts of South, Southeast, and East Asia.",
            "sources": [
                "primary-tiger",
                "iucn-tiger"
            ]
        },
        "threats": [
            {
                "text": "Poaching and illegal wildlife trade",
                "sources": [
                    "primary-tiger",
                    "iucn-tiger"
                ]
            },
            {
                "text": "Prey depletion",
                "sources": [
                    "primary-tiger",
                    "iucn-tiger"
                ]
            },
            {
                "text": "Habitat fragmentation and conflict",
                "sources": [
                    "primary-tiger",
                    "iucn-tiger"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Tigers regulate prey populations and their conservation protects extensive habitats.",
            "sources": [
                "primary-tiger",
                "iucn-tiger"
            ]
        },
        "conservationMethods": [
            {
                "text": "Reject tiger products",
                "sources": [
                    "primary-tiger"
                ]
            },
            {
                "text": "Support protected landscapes and prey recovery",
                "sources": [
                    "primary-tiger"
                ]
            },
            {
                "text": "Support coexistence programs for local communities",
                "sources": [
                    "primary-tiger"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-tiger",
                "title": "IUCN Red List assessment for Panthera tigris",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/15955/214862019",
                "assessed": "2021-12-15",
                "published": "2022",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-tiger",
                "title": "Tigers",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/tiger/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "asian-elephant",
        "commonName": "Asian Elephant",
        "scientificName": "Elephas maximus",
        "status": {
            "code": "EN",
            "label": "Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-asian-elephant"
            ]
        },
        "image": {
            "src": "images/asian-elephant.jpg",
            "alt": "Asian elephant (Elephas maximus)",
            "credit": "Amal Balasooriya",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Asian_Elephant_(Elephas_Maximus).jpg"
        },
        "description": {
            "text": "A large social herbivore that travels through Asian forests and grasslands.",
            "sources": [
                "primary-asian-elephant",
                "iucn-asian-elephant"
            ]
        },
        "habitat": {
            "text": "Tropical and subtropical forests, grasslands, and forest edges.",
            "sources": [
                "primary-asian-elephant",
                "iucn-asian-elephant"
            ],
            "filters": [
                "tropical"
            ]
        },
        "range": {
            "text": "Fragmented regions of South and Southeast Asia.",
            "sources": [
                "primary-asian-elephant",
                "iucn-asian-elephant"
            ]
        },
        "threats": [
            {
                "text": "Habitat loss and blocked migration routes",
                "sources": [
                    "primary-asian-elephant",
                    "iucn-asian-elephant"
                ]
            },
            {
                "text": "Human-elephant conflict",
                "sources": [
                    "primary-asian-elephant",
                    "iucn-asian-elephant"
                ]
            },
            {
                "text": "Poaching and infrastructure",
                "sources": [
                    "primary-asian-elephant",
                    "iucn-asian-elephant"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Elephants spread seeds and open pathways, helping shape habitats for other species.",
            "sources": [
                "primary-asian-elephant",
                "iucn-asian-elephant"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support wildlife corridors",
                "sources": [
                    "primary-asian-elephant"
                ]
            },
            {
                "text": "Support nonviolent coexistence measures",
                "sources": [
                    "primary-asian-elephant"
                ]
            },
            {
                "text": "Avoid ivory and wildlife products",
                "sources": [
                    "primary-asian-elephant"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-asian-elephant",
                "title": "IUCN Red List assessment for Elephas maximus",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/7140/45818198",
                "assessed": "2019-09-18",
                "published": "2020",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-asian-elephant",
                "title": "Asian Elephants",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/elephant/asian-elephant/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "blue-whale",
        "commonName": "Blue Whale",
        "scientificName": "Balaenoptera musculus",
        "status": {
            "code": "EN",
            "label": "Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-blue-whale"
            ]
        },
        "image": {
            "src": "images/blue-whale.jpg",
            "alt": "Blue whale photographed in the ocean",
            "credit": "Gregory \"Slobirdr\" Smith",
            "license": "CC BY-SA 2.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Blue_Whale_(Balaenoptera_musculus)_(16108163937).jpg"
        },
        "description": {
            "text": "The largest known animal, a baleen whale that feeds mainly on krill.",
            "sources": [
                "primary-blue-whale",
                "iucn-blue-whale"
            ]
        },
        "habitat": {
            "text": "Open-ocean and productive feeding waters, including seasonal high-latitude areas.",
            "sources": [
                "primary-blue-whale",
                "iucn-blue-whale"
            ],
            "filters": [
                "marine"
            ]
        },
        "range": {
            "text": "Across the world's major oceans.",
            "sources": [
                "primary-blue-whale",
                "iucn-blue-whale"
            ]
        },
        "threats": [
            {
                "text": "Ship strikes",
                "sources": [
                    "primary-blue-whale",
                    "iucn-blue-whale"
                ]
            },
            {
                "text": "Entanglement in fishing gear",
                "sources": [
                    "primary-blue-whale",
                    "iucn-blue-whale"
                ]
            },
            {
                "text": "Underwater noise and changing ocean conditions",
                "sources": [
                    "primary-blue-whale",
                    "iucn-blue-whale"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Blue whales consume large quantities of krill, linking these small crustaceans with the largest consumers in marine food webs.",
            "sources": [
                "primary-blue-whale",
                "iucn-blue-whale"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support ship-speed measures in whale habitat",
                "sources": [
                    "primary-blue-whale"
                ]
            },
            {
                "text": "Support whale-safe fishing gear",
                "sources": [
                    "primary-blue-whale"
                ]
            },
            {
                "text": "Support ocean conservation research",
                "sources": [
                    "primary-blue-whale"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-blue-whale",
                "title": "IUCN Red List assessment for Balaenoptera musculus",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/2477/156923585",
                "assessed": "2018-03-16",
                "published": "2018",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-blue-whale",
                "title": "Blue Whale",
                "publisher": "NOAA Fisheries",
                "url": "https://www.fisheries.noaa.gov/species/blue-whale",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "whale-shark",
        "commonName": "Whale Shark",
        "scientificName": "Rhincodon typus",
        "status": {
            "code": "EN",
            "label": "Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-whale-shark"
            ]
        },
        "image": {
            "src": "images/whale-shark.jpg",
            "alt": "Whale shark (Rhincodon typus)",
            "credit": "Akasmita",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Whale_Shark_(Rhincodon_typus).jpg"
        },
        "description": {
            "text": "The world's largest fish, a gentle filter-feeding shark.",
            "sources": [
                "primary-whale-shark",
                "iucn-whale-shark"
            ]
        },
        "habitat": {
            "text": "Warm tropical and subtropical seas, including coastal feeding aggregations.",
            "sources": [
                "primary-whale-shark",
                "iucn-whale-shark"
            ],
            "filters": [
                "marine"
            ]
        },
        "range": {
            "text": "Tropical and warm-temperate oceans worldwide.",
            "sources": [
                "primary-whale-shark",
                "iucn-whale-shark"
            ]
        },
        "threats": [
            {
                "text": "Fishing and accidental capture",
                "sources": [
                    "primary-whale-shark",
                    "iucn-whale-shark"
                ]
            },
            {
                "text": "Vessel strikes",
                "sources": [
                    "primary-whale-shark",
                    "iucn-whale-shark"
                ]
            },
            {
                "text": "Disturbance at feeding sites",
                "sources": [
                    "primary-whale-shark",
                    "iucn-whale-shark"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Whale sharks feed on plankton and small organisms, connecting marine food-web processes.",
            "sources": [
                "primary-whale-shark",
                "iucn-whale-shark"
            ]
        },
        "conservationMethods": [
            {
                "text": "Choose responsible wildlife tourism",
                "sources": [
                    "primary-whale-shark"
                ]
            },
            {
                "text": "Support marine protected areas",
                "sources": [
                    "primary-whale-shark"
                ]
            },
            {
                "text": "Support bycatch reduction",
                "sources": [
                    "primary-whale-shark"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-whale-shark",
                "title": "IUCN Red List assessment for Rhincodon typus",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/19488/126673248",
                "assessed": "2025-03-31",
                "published": "2025",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-whale-shark",
                "title": "Whale Sharks",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/whale-shark/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "kemps-ridley-sea-turtle",
        "commonName": "Kemp's Ridley Sea Turtle",
        "scientificName": "Lepidochelys kempii",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-kemps-ridley-sea-turtle"
            ]
        },
        "image": {
            "src": "images/kemps-ridley-sea-turtle.jpg",
            "alt": "Kemp's ridley sea turtle on a beach in Alabama",
            "credit": "U.S. Fish and Wildlife Service Southeast Region",
            "license": "CC BY 2.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lepidochelys_kempii.jpg"
        },
        "description": {
            "text": "A small sea turtle known for mass nesting events called arribadas.",
            "sources": [
                "primary-kemps-ridley-sea-turtle",
                "iucn-kemps-ridley-sea-turtle"
            ]
        },
        "habitat": {
            "text": "Coastal waters, shallow bays, and sandy nesting beaches.",
            "sources": [
                "primary-kemps-ridley-sea-turtle",
                "iucn-kemps-ridley-sea-turtle"
            ],
            "filters": [
                "marine"
            ]
        },
        "range": {
            "text": "Mainly the Gulf of Mexico and western North Atlantic.",
            "sources": [
                "primary-kemps-ridley-sea-turtle",
                "iucn-kemps-ridley-sea-turtle"
            ]
        },
        "threats": [
            {
                "text": "Fishing-gear bycatch",
                "sources": [
                    "primary-kemps-ridley-sea-turtle",
                    "iucn-kemps-ridley-sea-turtle"
                ]
            },
            {
                "text": "Marine debris and pollution",
                "sources": [
                    "primary-kemps-ridley-sea-turtle",
                    "iucn-kemps-ridley-sea-turtle"
                ]
            },
            {
                "text": "Damage to nesting beaches",
                "sources": [
                    "primary-kemps-ridley-sea-turtle",
                    "iucn-kemps-ridley-sea-turtle"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Kemp's ridley turtles feed on crabs and other invertebrates in coastal ecosystems.",
            "sources": [
                "primary-kemps-ridley-sea-turtle",
                "iucn-kemps-ridley-sea-turtle"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support turtle-safe fishing gear",
                "sources": [
                    "primary-kemps-ridley-sea-turtle"
                ]
            },
            {
                "text": "Reduce marine litter",
                "sources": [
                    "primary-kemps-ridley-sea-turtle"
                ]
            },
            {
                "text": "Protect nesting beaches and respect nesting restrictions",
                "sources": [
                    "primary-kemps-ridley-sea-turtle"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-kemps-ridley-sea-turtle",
                "title": "IUCN Red List assessment for Lepidochelys kempii",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/11533/155057916",
                "assessed": "2019-01-14",
                "published": "2019",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-kemps-ridley-sea-turtle",
                "title": "Kemp's Ridley Turtle",
                "publisher": "NOAA Fisheries",
                "url": "https://www.fisheries.noaa.gov/species/kemps-ridley-turtle",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "snow-leopard",
        "commonName": "Snow Leopard",
        "scientificName": "Panthera uncia",
        "status": {
            "code": "VU",
            "label": "Vulnerable",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-snow-leopard"
            ]
        },
        "image": {
            "src": "images/snow-leopard.jpg",
            "alt": "Snow leopard resting on rocks at Marwell Wildlife",
            "credit": "Marie Hale",
            "license": "CC BY 2.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Snow_leopard_(3757699685).jpg"
        },
        "description": {
            "text": "A mountain cat adapted to cold, steep landscapes.",
            "sources": [
                "primary-snow-leopard",
                "iucn-snow-leopard"
            ]
        },
        "habitat": {
            "text": "Rocky alpine and subalpine mountain slopes.",
            "sources": [
                "primary-snow-leopard",
                "iucn-snow-leopard"
            ]
        },
        "range": {
            "text": "High mountains of Central and South Asia.",
            "sources": [
                "primary-snow-leopard",
                "iucn-snow-leopard"
            ]
        },
        "threats": [
            {
                "text": "Retaliatory killing after livestock losses",
                "sources": [
                    "primary-snow-leopard",
                    "iucn-snow-leopard"
                ]
            },
            {
                "text": "Declining wild prey",
                "sources": [
                    "primary-snow-leopard",
                    "iucn-snow-leopard"
                ]
            },
            {
                "text": "Habitat fragmentation and climate change",
                "sources": [
                    "primary-snow-leopard",
                    "iucn-snow-leopard"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Snow leopards are high-altitude predators that help maintain mountain food webs.",
            "sources": [
                "primary-snow-leopard",
                "iucn-snow-leopard"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support predator-proof livestock enclosures",
                "sources": [
                    "primary-snow-leopard"
                ]
            },
            {
                "text": "Support mountain habitat conservation",
                "sources": [
                    "primary-snow-leopard"
                ]
            },
            {
                "text": "Reject illegal wildlife products",
                "sources": [
                    "primary-snow-leopard"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-snow-leopard",
                "title": "IUCN Red List assessment for Panthera uncia",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/22732/50664030",
                "assessed": "2016-11-08",
                "published": "2017",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-snow-leopard",
                "title": "Snow Leopards",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/snow-leopard/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "giant-panda",
        "commonName": "Giant Panda",
        "scientificName": "Ailuropoda melanoleuca",
        "status": {
            "code": "VU",
            "label": "Vulnerable",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-giant-panda"
            ]
        },
        "image": {
            "src": "images/giant-panda.jpg",
            "alt": "Giant panda resting among tree limbs",
            "credit": "Clare W. (Uberkiki)",
            "license": "CC BY-SA 3.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Giant_panda.jpg"
        },
        "description": {
            "text": "A bamboo-eating bear native to China's mountain forests.",
            "sources": [
                "primary-giant-panda",
                "iucn-giant-panda"
            ]
        },
        "habitat": {
            "text": "Temperate mountain forests with abundant bamboo.",
            "sources": [
                "primary-giant-panda",
                "iucn-giant-panda"
            ],
            "filters": [
                "temperate"
            ]
        },
        "range": {
            "text": "Mountain ranges of central China, especially Sichuan, Shaanxi, and Gansu.",
            "sources": [
                "primary-giant-panda",
                "iucn-giant-panda"
            ]
        },
        "threats": [
            {
                "text": "Forest fragmentation",
                "sources": [
                    "primary-giant-panda",
                    "iucn-giant-panda"
                ]
            },
            {
                "text": "Infrastructure development",
                "sources": [
                    "primary-giant-panda",
                    "iucn-giant-panda"
                ]
            },
            {
                "text": "Climate-driven changes to bamboo habitat",
                "sources": [
                    "primary-giant-panda",
                    "iucn-giant-panda"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Protecting giant panda habitat also protects other forest wildlife and watersheds.",
            "sources": [
                "primary-giant-panda",
                "iucn-giant-panda"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support connected forest reserves",
                "sources": [
                    "primary-giant-panda"
                ]
            },
            {
                "text": "Support habitat restoration",
                "sources": [
                    "primary-giant-panda"
                ]
            },
            {
                "text": "Choose forest-friendly products",
                "sources": [
                    "primary-giant-panda"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-giant-panda",
                "title": "IUCN Red List assessment for Ailuropoda melanoleuca",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/712/121745669",
                "assessed": "2016-04-11",
                "published": "2016",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-giant-panda",
                "title": "Giant Pandas",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/giant-panda/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
        "id": "polar-bear",
        "commonName": "Polar Bear",
        "scientificName": "Ursus maritimus",
        "status": {
            "code": "VU",
            "label": "Vulnerable",
            "authority": "IUCN Red List",
            "sources": [
                "iucn-polar-bear"
            ]
        },
        "image": {
            "src": "images/polar-bear.jpg",
            "alt": "Polar bear photographed at North Carolina Zoo",
            "credit": "MelissaC2022",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Polar_Bears.jpg"
        },
        "description": {
            "text": "A large Arctic marine mammal that relies on sea ice to hunt seals.",
            "sources": [
                "primary-polar-bear",
                "iucn-polar-bear"
            ]
        },
        "habitat": {
            "text": "Arctic sea ice and adjacent coastal areas.",
            "sources": [
                "primary-polar-bear",
                "iucn-polar-bear"
            ],
            "filters": [
                "marine"
            ]
        },
        "range": {
            "text": "Circumpolar Arctic across Alaska (United States), Canada, Greenland (Kingdom of Denmark), Norway and Russia.",
            "sources": [
                "iucn-polar-bear"
            ]
        },
        "threats": [
            {
                "text": "Loss of sea ice from climate warming",
                "sources": [
                    "primary-polar-bear",
                    "iucn-polar-bear"
                ]
            },
            {
                "text": "Human-bear conflict",
                "sources": [
                    "primary-polar-bear",
                    "iucn-polar-bear"
                ]
            },
            {
                "text": "Industrial disturbance and pollution",
                "sources": [
                    "primary-polar-bear",
                    "iucn-polar-bear"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Polar bears are top predators in Arctic marine food webs.",
            "sources": [
                "primary-polar-bear",
                "iucn-polar-bear"
            ]
        },
        "conservationMethods": [
            {
                "text": "Support evidence-based climate action",
                "sources": [
                    "primary-polar-bear"
                ]
            },
            {
                "text": "Support Arctic habitat research",
                "sources": [
                    "primary-polar-bear"
                ]
            },
            {
                "text": "Promote safe human-wildlife coexistence",
                "sources": [
                    "primary-polar-bear"
                ]
            }
        ],
        "population": null,
        "localActions": [
            {
                "title": "Learn about wildlife conservation in Pittsburgh",
                "text": "Explore conservation education and local participation opportunities through Pittsburgh Zoo & Aquarium. This is general conservation engagement, not a species-specific local project.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-general"
                ]
            }
        ],
        "sources": [
            {
                "id": "iucn-polar-bear",
                "title": "IUCN Red List assessment for Ursus maritimus",
                "publisher": "IUCN Red List",
                "url": "https://www.iucnredlist.org/species/22823/14871490",
                "assessed": "2015-08-27",
                "published": "2015",
                "accessed": "2026-11-20"
            },
            {
                "id": "primary-polar-bear",
                "title": "Polar Bears",
                "publisher": "World Wildlife Fund",
                "url": "https://www.worldwildlife.org/species/polar-bear/",
                "accessed": "2026-11-10"
            },
            {
                "id": "pgh-zoo-general",
                "title": "Conservation",
                "publisher": "Pittsburgh Zoo & Aquarium",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "accessed": "2026-11-10"
            }
        ]
    },
{
    "id": "african-savanna-elephant",
    "commonName": "African Savanna Elephant",
    "scientificName": "Loxodonta africana",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "image": {
        "src": "images/african-savanna-elephant.jpg",
        "alt": "African savanna elephant with broad ears walking across dry grass",
        "credit": "Giles Laurent · Male African bush elephant in Etosha National Park (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg"
    },
    "description": {
        "text": "The larger of the two African elephant species, with broad ears and a concave back.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "habitat": {
        "text": "Savannas, open woodlands and grasslands, including some arid landscapes with seasonal water.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "range": {
        "text": "Scattered populations in sub-Saharan Africa, primarily in eastern and southern Africa.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "threats": [
        {
            "text": "Ivory poaching, habitat conversion and fragmentation, and conflict with people.",
            "sources": [
                "iucn-african-savanna-elephant"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "A large herbivore that browses and grazes, disperses seeds and changes vegetation as it feeds.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-african-savanna-elephant"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-african-savanna-elephant",
            "title": "IUCN Red List assessment for Loxodonta africana",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/181008073/223031019",
            "assessed": "2020-11-13",
            "published": "2022",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "african-wild-dog",
    "commonName": "African Wild Dog",
    "scientificName": "Lycaon pictus",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "image": {
        "src": "images/african-wild-dog.jpg",
        "alt": "African wild dog with a mottled black, tan and white coat walking on a dirt track",
        "credit": "AfricanConservation · African Wild Dog at Working with Wildlife (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:African_Wild_Dog_at_Working_with_Wildlife.jpg"
    },
    "description": {
        "text": "A social African canid that hunts cooperatively in packs.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "habitat": {
        "text": "Grassland, scrub, savanna and woodland, with large areas needed for roaming and hunting.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "range": {
        "text": "Fragmented range south of the Sahara, with strongholds in eastern and southern Africa.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "threats": [
        {
            "text": "Habitat fragmentation, snares, conflict with livestock owners and infectious disease.",
            "sources": [
                "iucn-african-wild-dog"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Packs prey on ungulates such as impala and other antelopes.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-african-wild-dog"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-african-wild-dog",
            "title": "IUCN Red List assessment for Lycaon pictus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/12436/221299510",
            "assessed": "2025-06-10",
            "published": "2025",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "bornean-orangutan",
    "commonName": "Bornean Orangutan",
    "scientificName": "Pongo pygmaeus",
    "status": {
        "code": "CR",
        "label": "Critically Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "image": {
        "src": "images/bornean-orangutan.jpg",
        "alt": "Bornean orangutan climbing a tree in Tanjung Puting National Park",
        "credit": "Nanosanchez · Tanjung Puting30477 (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tanjung_Puting30477.jpg"
    },
    "description": {
        "text": "A tree-dwelling great ape native to Borneo.",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "habitat": {
        "text": "Tropical lowland forests, including peat swamp and dipterocarp forests, and some upland and selectively logged forests.",
        "sources": [
            "iucn-bornean-orangutan"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Borneo, in Indonesian Kalimantan and the Malaysian states of Sabah and Sarawak.",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "threats": [
        {
            "text": "Forest conversion and fragmentation, fires, hunting and capture.",
            "sources": [
                "iucn-bornean-orangutan"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Fruit feeding and movement through the canopy help disperse seeds.",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-bornean-orangutan"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-bornean-orangutan",
            "title": "IUCN Red List assessment for Pongo pygmaeus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/17975/259043172",
            "assessed": "2016-02-08",
            "published": "2024",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "chimpanzee",
    "commonName": "Chimpanzee",
    "scientificName": "Pan troglodytes",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "image": {
        "src": "images/chimpanzee.jpg",
        "alt": "Chimpanzee sitting on a branch in Kibale National Park",
        "credit": "© Giles Laurent, gileslaurent.com, License CC BY-SA · 015 Chimpanzee at Kibale forest National Park Photo by Giles Laurent (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg"
    },
    "description": {
        "text": "A social great ape that lives in communities and uses tools to obtain some foods.",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "habitat": {
        "text": "Tropical forest, woodland and forest–savanna mosaics.",
        "sources": [
            "iucn-chimpanzee"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "A fragmented belt of equatorial Africa from West Africa to Uganda and western Tanzania.",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "threats": [
        {
            "text": "Hunting and capture, forest loss and fragmentation, and infectious disease.",
            "sources": [
                "iucn-chimpanzee"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Chimpanzees eat many kinds of fruit and disperse seeds across their home ranges.",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-chimpanzee"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-chimpanzee",
            "title": "IUCN Red List assessment for Pan troglodytes",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/15933/129038584",
            "assessed": "2016-03-24",
            "published": "2016",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "eastern-lowland-gorilla",
    "commonName": "Eastern Lowland Gorilla",
    "scientificName": "Gorilla beringei graueri",
    "status": {
        "code": "CR",
        "label": "Critically Endangered",
        "authority": "IUCN Red List subspecies",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "image": {
        "src": "images/eastern-lowland-gorilla.jpg",
        "alt": "Silverback Grauer’s gorilla looking through foliage",
        "credit": "Joe McKenna from San Diego, California · Eastern lowland gorilla (web adaptation)",
        "license": "CC BY 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Eastern_lowland_gorilla.jpg"
    },
    "description": {
        "text": "Grauer’s gorilla is an eastern gorilla subspecies endemic to the Democratic Republic of the Congo.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "habitat": {
        "text": "Tropical forest from lowland rainforest to montane forest.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Eastern Democratic Republic of the Congo, including Kahuzi-Biega and Maiko national parks.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "threats": [
        {
            "text": "Hunting, conflict and insecurity, mining, and agricultural encroachment.",
            "sources": [
                "iucn-eastern-lowland-gorilla"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It eats leaves, stems and fruit, and can disperse the seeds of fruits it consumes.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-eastern-lowland-gorilla"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-eastern-lowland-gorilla",
            "title": "IUCN Red List assessment for Gorilla beringei graueri",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/39995/102328430",
            "assessed": "2016-03-01",
            "published": "2016",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "fin-whale",
    "commonName": "Fin Whale",
    "scientificName": "Balaenoptera physalus",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-fin-whale"
        ]
    },
    "image": {
        "src": "images/fin-whale.jpg",
        "alt": "Fin whale surfacing and exhaling above blue water",
        "credit": "Aqqa Rosing-Asvid - Visit Greenland · Finhval (1) (web adaptation)",
        "license": "CC BY 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Finhval_(1).jpg"
    },
    "description": {
        "text": "A large, fast-swimming baleen whale with an asymmetrically colored lower jaw.",
        "sources": [
            "iucn-fin-whale",
            "noaa-fin-whale"
        ]
    },
    "habitat": {
        "text": "Continental shelf and open-ocean waters, including productive high-latitude feeding areas.",
        "sources": [
            "iucn-fin-whale",
            "noaa-fin-whale"
        ],
        "filters": [
            "marine"
        ]
    },
    "range": {
        "text": "Most oceans, with separate populations in the Northern and Southern hemispheres and the Mediterranean Sea.",
        "sources": [
            "iucn-fin-whale",
            "noaa-fin-whale"
        ]
    },
    "threats": [
        {
            "text": "Historical commercial whaling, and ongoing vessel strikes and entanglement in fishing gear.",
            "sources": [
                "iucn-fin-whale",
                "noaa-fin-whale"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It filters krill, schooling fish and other small prey, linking these organisms to the larger marine food web.",
        "sources": [
            "iucn-fin-whale",
            "noaa-fin-whale"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-fin-whale"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-fin-whale",
            "title": "IUCN Red List assessment for Balaenoptera physalus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/2478/50349982",
            "assessed": "2018-02-04",
            "published": "2018",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        },
        {
            "id": "noaa-fin-whale",
            "title": "Fin Whale",
            "publisher": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/fin-whale",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "giant-otter",
    "commonName": "Giant Otter",
    "scientificName": "Pteronura brasiliensis",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "image": {
        "src": "images/giant-otter.jpg",
        "alt": "Two giant otters resting together on a riverbank",
        "credit": "Charles J. Sharp · Giant otters (Pteronura brasiliensis) (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Giant_otters_(Pteronura_brasiliensis).jpg"
    },
    "description": {
        "text": "A large, highly social South American otter that typically lives in family groups.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "habitat": {
        "text": "Freshwater rivers, creeks, lakes and seasonally flooded wetlands with banks suitable for dens.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "range": {
        "text": "Fragmented populations in tropical South America east of the Andes, including the Amazon and Orinoco basins and the Pantanal.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "threats": [
        {
            "text": "Wetland degradation, mining pollution, and conflict with fisheries.",
            "sources": [
                "iucn-giant-otter"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Family groups forage for fish and are freshwater predators.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-giant-otter"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-giant-otter",
            "title": "IUCN Red List assessment for Pteronura brasiliensis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/18711/244867206",
            "assessed": "2020-03-07",
            "published": "2023",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "green-sea-turtle",
    "commonName": "Green Sea Turtle",
    "scientificName": "Chelonia mydas",
    "status": {
        "code": "LC",
        "label": "Least Concern",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-green-sea-turtle"
        ]
    },
    "image": {
        "src": "images/green-sea-turtle.jpg",
        "alt": "Green sea turtle seen from above swimming over the seabed",
        "credit": "Charles J. Sharp · Green sea turtle (Chelonia mydas) Moorea (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Green_sea_turtle_(Chelonia_mydas)_Moorea.jpg"
    },
    "description": {
        "text": "A large sea turtle whose adults frequently feed on seagrass and algae.",
        "sources": [
            "iucn-green-sea-turtle",
            "noaa-green-turtle"
        ]
    },
    "habitat": {
        "text": "Coastal seagrass beds and reefs used for foraging, sandy nesting beaches, and oceanic waters used by young turtles.",
        "sources": [
            "iucn-green-sea-turtle",
            "noaa-green-turtle"
        ],
        "filters": [
            "marine"
        ]
    },
    "range": {
        "text": "Tropical and subtropical seas around the world, with major nesting populations in the Atlantic, Indian and Pacific oceans.",
        "sources": [
            "iucn-green-sea-turtle",
            "noaa-green-turtle"
        ]
    },
    "threats": [
        {
            "text": "Fishing bycatch, egg and turtle harvest, and degradation of nesting and foraging habitat.",
            "sources": [
                "iucn-green-sea-turtle",
                "noaa-green-turtle"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Adults graze seagrass and algae, linking these plants and algae to coastal food webs.",
        "sources": [
            "iucn-green-sea-turtle",
            "noaa-green-turtle"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-green-sea-turtle"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-green-sea-turtle",
            "title": "IUCN Red List assessment for Chelonia mydas",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/4615/285108125",
            "assessed": "2024-12-09",
            "published": "2025",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        },
        {
            "id": "noaa-green-turtle",
            "title": "Green Turtle",
            "publisher": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/green-turtle",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "hector-s-dolphin",
    "commonName": "Hector's Dolphin",
    "scientificName": "Cephalorhynchus hectori",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-hector-s-dolphin"
        ]
    },
    "image": {
        "src": "images/hector-s-dolphin.jpg",
        "alt": "Two Hector’s dolphins swimming just below the surface",
        "credit": "Avenue · Hector's Dolphins at Porpoise Bay 1999 a cropped (web adaptation)",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hector%27s_Dolphins_at_Porpoise_Bay_1999_a_cropped.jpg"
    },
    "description": {
        "text": "A small New Zealand dolphin with a rounded dorsal fin. The species includes the Māui dolphin subspecies.",
        "sources": [
            "iucn-hector-s-dolphin",
            "doc-hectors-dolphin"
        ]
    },
    "habitat": {
        "text": "Shallow coastal and shelf waters, typically close to shore.",
        "sources": [
            "iucn-hector-s-dolphin",
            "doc-hectors-dolphin"
        ],
        "filters": [
            "marine"
        ]
    },
    "range": {
        "text": "Endemic to New Zealand. Hector’s dolphins occur around the South Island, and Māui dolphins occur off the west coast of the North Island.",
        "sources": [
            "iucn-hector-s-dolphin",
            "doc-hectors-dolphin"
        ]
    },
    "threats": [
        {
            "text": "Bycatch, especially in set nets and trawls, and disease such as toxoplasmosis.",
            "sources": [
                "iucn-hector-s-dolphin",
                "doc-hectors-dolphin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It feeds on small fish and squid in coastal food webs.",
        "sources": [
            "iucn-hector-s-dolphin",
            "doc-hectors-dolphin"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-hector-s-dolphin"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-hector-s-dolphin",
            "title": "IUCN Red List assessment for Cephalorhynchus hectori",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/4162/44199757",
            "assessed": "2008-07-01",
            "published": "2013",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        },
        {
            "id": "doc-hectors-dolphin",
            "title": "Hector’s dolphin",
            "publisher": "New Zealand Department of Conservation",
            "url": "https://www.doc.govt.nz/nature/native-animals/marine-mammals/dolphins/hectors-dolphin/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "indian-pangolin",
    "commonName": "Indian Pangolin",
    "scientificName": "Manis crassicaudata",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "image": {
        "src": "images/indian-pangolin.jpg",
        "alt": "Indian pangolin walking with its head lowered and its scaled tail extended",
        "credit": "Dushy Ranetunge · Scaly ant eater by Dushy Ranetunge 2 (web adaptation)",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Scaly_ant_eater_by_Dushy_Ranetunge_2.jpg"
    },
    "description": {
        "text": "A mostly nocturnal scaly mammal that digs for ants and termites.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "habitat": {
        "text": "Forests, scrub, grasslands and some cultivated areas where it can find shelter and prey.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "range": {
        "text": "South Asia, including India, Pakistan, Nepal and Sri Lanka.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "threats": [
        {
            "text": "Hunting and trafficking for meat and scales, and habitat loss.",
            "sources": [
                "iucn-indian-pangolin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Its specialized diet links it to ant and termite communities.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-indian-pangolin"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-indian-pangolin",
            "title": "IUCN Red List assessment for Manis crassicaudata",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/12761/123583998",
            "assessed": "2019-05-10",
            "published": "2019",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "indus-river-dolphin",
    "commonName": "Indus River Dolphin",
    "scientificName": "Platanista minor",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "image": {
        "src": "images/indus-river-dolphin.jpg",
        "cardSrc": "images/indus-river-dolphin-card.jpg",
        "alt": "Back of an Indus river dolphin breaking the surface of the Beas River",
        "credit": "Navdeepsood · Indus River Dolphin (Platanista gangetica minor) (web adaptation)",
        "license": "CC BY 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Indus_River_Dolphin_(Platanista_gangetica_minor).jpg"
    },
    "description": {
        "text": "A freshwater dolphin with very poor vision that uses echolocation to find fish and other prey.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "habitat": {
        "text": "Deep channels and pools in large, turbid rivers.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "range": {
        "text": "The Indus river system in Pakistan and the Beas River in India.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "threats": [
        {
            "text": "Barrages fragment its range, water withdrawals reduce flows, and dolphins can be caught in fishing gear or stranded in canals.",
            "sources": [
                "iucn-indus-river-dolphin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It is a freshwater predator that feeds on fish and aquatic invertebrates.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-indus-river-dolphin"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-indus-river-dolphin",
            "title": "IUCN Red List assessment for Platanista minor",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/41757/243168232",
            "assessed": "2021-08-01",
            "published": "2022",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "jaguar",
    "commonName": "Jaguar",
    "scientificName": "Panthera onca",
    "status": {
        "code": "NT",
        "label": "Near Threatened",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "image": {
        "src": "images/jaguar.jpg",
        "alt": "Jaguar with dark rosettes standing on a log",
        "credit": "USFWS · Standing jaguar (web adaptation)",
        "license": "Public domain",
        "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-USGov-FWS",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Standing_jaguar.jpg"
    },
    "description": {
        "text": "The largest cat in the Americas, with a powerful build and a rosette-patterned coat.",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "habitat": {
        "text": "Tropical and subtropical forests, wetlands, scrub and other habitats with prey and cover.",
        "sources": [
            "iucn-jaguar"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Patchily from Mexico through Central America and much of tropical South America to northern Argentina, with occasional records in the southwestern United States.",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "threats": [
        {
            "text": "Habitat conversion and fragmentation, prey depletion, and retaliatory killing.",
            "sources": [
                "iucn-jaguar"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It hunts a wide range of prey, including mammals and reptiles, and is an apex predator.",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-jaguar"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-jaguar",
            "title": "IUCN Red List assessment for Panthera onca",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/15953/123791436",
            "assessed": "2016-08-05",
            "published": "2017",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "mountain-gorilla",
    "commonName": "Mountain Gorilla",
    "scientificName": "Gorilla beringei beringei",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List subspecies",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "image": {
        "src": "images/mountain-gorilla.jpg",
        "alt": "Adult male mountain gorilla sitting among leafy plants",
        "credit": "Dave Proffer (d_proffer) · Susa group, mountain gorilla (web adaptation)",
        "license": "CC BY 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Susa_group,_mountain_gorilla.jpg"
    },
    "description": {
        "text": "A montane subspecies of the eastern gorilla with two geographically separate populations.",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "habitat": {
        "text": "High-elevation forest, including bamboo and montane vegetation.",
        "sources": [
            "iucn-mountain-gorilla"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "The Virunga Massif across Rwanda, Uganda and the Democratic Republic of the Congo, and the Bwindi–Sarambwe area of Uganda and the Democratic Republic of the Congo.",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "threats": [
        {
            "text": "Disease, snares, habitat pressure and regional insecurity.",
            "sources": [
                "iucn-mountain-gorilla"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It feeds largely on herbaceous plants and also eats fruit where available.",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-mountain-gorilla"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-mountain-gorilla",
            "title": "IUCN Red List assessment for Gorilla beringei beringei",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/39999/176396749",
            "assessed": "2018-07-31",
            "published": "2020",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "north-atlantic-right-whale",
    "commonName": "North Atlantic Right Whale",
    "scientificName": "Eubalaena glacialis",
    "status": {
        "code": "CR",
        "label": "Critically Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-north-atlantic-right-whale"
        ]
    },
    "image": {
        "src": "images/north-atlantic-right-whale.jpg",
        "alt": "Two North Atlantic right whales seen from above",
        "credit": "National Marine Sanctuaries · GRNMS - Right Whales (31361234602) (web adaptation)",
        "license": "Public domain",
        "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-USGov-NOAA",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:GRNMS_-_Right_Whales_(31361234602).jpg"
    },
    "description": {
        "text": "A baleen whale that filters zooplankton and is recognizable by callosities on its head.",
        "sources": [
            "iucn-north-atlantic-right-whale",
            "noaa-right-whale"
        ]
    },
    "habitat": {
        "text": "Coastal and shelf waters where zooplankton concentrate, with migrations between feeding and calving areas.",
        "sources": [
            "iucn-north-atlantic-right-whale",
            "noaa-right-whale"
        ],
        "filters": [
            "marine"
        ]
    },
    "range": {
        "text": "Mainly the western North Atlantic, from Canadian and northeastern U.S. feeding waters to calving waters off the southeastern United States.",
        "sources": [
            "iucn-north-atlantic-right-whale",
            "noaa-right-whale"
        ]
    },
    "threats": [
        {
            "text": "Fishing-gear entanglement and vessel strikes, with changing prey distribution affecting habitat use.",
            "sources": [
                "iucn-north-atlantic-right-whale",
                "noaa-right-whale"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It consumes dense patches of copepods and other zooplankton in the North Atlantic food web.",
        "sources": [
            "iucn-north-atlantic-right-whale",
            "noaa-right-whale"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-north-atlantic-right-whale"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-north-atlantic-right-whale",
            "title": "IUCN Red List assessment for Eubalaena glacialis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/41712/178589687",
            "assessed": "2020-01-01",
            "published": "2020",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        },
        {
            "id": "noaa-right-whale",
            "title": "North Atlantic Right Whale",
            "publisher": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/north-atlantic-right-whale",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "southern-rockhopper-penguin",
    "commonName": "Southern Rockhopper Penguin",
    "scientificName": "Eudyptes chrysocome",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "image": {
        "src": "images/southern-rockhopper-penguin.jpg",
        "alt": "Southern rockhopper penguin with a yellow crest standing on rocky ground",
        "credit": "Liam Quinn from Canada · Rockhopper Penguin on Saunders Island (5586446214) (web adaptation)",
        "license": "CC BY-SA 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rockhopper_Penguin_on_Saunders_Island_(5586446214).jpg"
    },
    "description": {
        "text": "A small crested penguin that moves over rocky shores with short hops.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "habitat": {
        "text": "Rocky island breeding colonies and surrounding marine waters used for feeding.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ],
        "filters": [
            "marine"
        ]
    },
    "range": {
        "text": "Southern South America and islands in the South Atlantic, including the Falkland Islands, with other breeding populations on southern Indian and Pacific islands under the IUCN taxon scope.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "threats": [
        {
            "text": "Changes in marine conditions and prey availability, fisheries interactions, and invasive predators at some colonies.",
            "sources": [
                "iucn-southern-rockhopper-penguin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It feeds on crustaceans, fish and squid and is prey for some larger marine animals.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-southern-rockhopper-penguin"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-southern-rockhopper-penguin",
            "title": "IUCN Red List assessment for Eudyptes chrysocome",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/22735250/182762377",
            "assessed": "2020-08-24",
            "published": "2020",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "sumatran-elephant",
    "commonName": "Sumatran Elephant",
    "scientificName": "Elephas maximus sumatranus",
    "status": {
        "code": "CR",
        "label": "Critically Endangered",
        "authority": "IUCN Red List subspecies",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "image": {
        "src": "images/sumatran-elephant.jpg",
        "alt": "Sumatran elephant standing in shallow water in Aceh",
        "credit": "Léodras · Elephant Sumatra ProfilG (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Elephant_Sumatra_ProfilG.jpg"
    },
    "description": {
        "text": "The Asian elephant subspecies native to Sumatra.",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "habitat": {
        "text": "Tropical lowland forests and nearby mosaics of forest and open vegetation.",
        "sources": [
            "iucn-sumatran-elephant"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Fragmented populations on Sumatra, Indonesia.",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "threats": [
        {
            "text": "Forest conversion and fragmentation, conflict with people, and poaching.",
            "sources": [
                "iucn-sumatran-elephant"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It browses and grazes in lowland forests. Like other Asian elephants, it can move seeds as it travels and feeds.",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-sumatran-elephant"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-sumatran-elephant",
            "title": "IUCN Red List assessment for Elephas maximus sumatranus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/199856/9129626",
            "assessed": "2011-08-01",
            "published": "2011",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "black-rhinoceros",
    "commonName": "Black Rhinoceros",
    "scientificName": "Diceros bicornis",
    "status": {
        "code": "CR",
        "label": "Critically Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "image": {
        "src": "images/black-rhinoceros.jpg",
        "alt": "Black rhinoceros standing in profile with its two horns visible",
        "credit": "AfricanConservation · Black Rhino at Working with Wildlife (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Black_Rhino_at_Working_with_Wildlife.jpg"
    },
    "description": {
        "text": "An African rhinoceros with a pointed upper lip adapted to browsing woody plants.",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "habitat": {
        "text": "Savanna, shrubland, woodland and some arid habitats.",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "range": {
        "text": "Scattered populations in eastern and southern Africa, including Kenya, Tanzania, Namibia, Zimbabwe and South Africa.",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "threats": [
        {
            "text": "Poaching for horn and small, isolated populations, with habitat loss in parts of the range.",
            "sources": [
                "iucn-black-rhino"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It browses woody vegetation and forms part of savanna and shrubland food webs.",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support evidence-based anti-poaching efforts and protected habitat management.",
            "sources": [
                "wwf-black-rhino"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-black-rhino",
            "title": "IUCN Red List assessment for Diceros bicornis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/6557/152728945",
            "assessed": "2020-01-14",
            "published": "2020",
            "accessed": "2026-11-20"
        },
        {
            "id": "wwf-black-rhino",
            "title": "Black rhinos",
            "publisher": "World Wildlife Fund",
            "url": "https://www.worldwildlife.org/species/black-rhino",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "tiger-shark",
    "commonName": "Tiger Shark",
    "scientificName": "Galeocerdo cuvier",
    "status": {
        "code": "NT",
        "label": "Near Threatened",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "image": {
        "src": "images/tiger-shark.jpg",
        "alt": "Tiger shark swimming over the sandy seabed",
        "credit": "Albert kok · Tiger shark (web adaptation)",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tiger_shark.jpg"
    },
    "description": {
        "text": "A large shark named for the dark stripes that are most prominent on younger individuals.",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "habitat": {
        "text": "Coastal and offshore marine waters, from shallow reefs and bays to open ocean.",
        "sources": [
            "iucn-tiger-shark"
        ],
        "filters": [
            "marine"
        ]
    },
    "range": {
        "text": "Circumglobal in tropical, subtropical and some warm-temperate seas.",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "threats": [
        {
            "text": "Targeted capture and bycatch in commercial fisheries, and capture in some shark-control programs.",
            "sources": [
                "iucn-tiger-shark"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It eats a broad range of prey, including fish and sea turtles, and also scavenges.",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-tiger-shark"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-tiger-shark",
            "title": "IUCN Red List assessment for Galeocerdo cuvier",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/39378/2913541",
            "assessed": "2018-08-10",
            "published": "2019",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "african-lion",
    "commonName": "African Lion",
    "scientificName": "Panthera leo",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "image": {
        "src": "images/african-lion.jpg",
        "alt": "Male lion with a dark mane resting on a rock in the Serengeti",
        "credit": "© Giles Laurent, gileslaurent.com, License CC BY-SA · 020 The lion king Snyggve in the Serengeti National Park Photo by Giles Laurent (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
    },
    "description": {
        "text": "A social big cat that typically lives in prides. The global assessment also covers the Asian population.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "habitat": {
        "text": "Savanna, grassland, open woodland and scrub, including some semi-arid landscapes.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "range": {
        "text": "Fragmented range in sub-Saharan Africa. The species also survives in and around India’s Gir landscape.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "threats": [
        {
            "text": "Prey depletion, habitat loss and fragmentation, and killing in conflict with people.",
            "sources": [
                "iucn-african-lion"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Lions are large predators of ungulates and leave carcasses that scavengers can use.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-african-lion"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-african-lion",
            "title": "IUCN Red List assessment for Panthera leo",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/15951/280792135",
            "assessed": "2025-05-06",
            "published": "2025",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "cheetah",
    "commonName": "Cheetah",
    "scientificName": "Acinonyx jubatus",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "image": {
        "src": "images/cheetah.jpg",
        "alt": "Spotted cheetah standing on a low mound",
        "credit": "AfricanConservation · Male cheetah facing left in South Africa (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Male_cheetah_facing_left_in_South_Africa.jpg"
    },
    "description": {
        "text": "A long-legged cat specialized for short, high-speed pursuits.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "habitat": {
        "text": "Grasslands, savannas, dry shrublands and other open habitats with prey and cover.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "range": {
        "text": "Scattered populations mainly in eastern and southern Africa, with smaller populations elsewhere in Africa and a remnant in Iran.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "threats": [
        {
            "text": "Habitat loss and fragmentation, prey depletion, conflict with people, and illegal trade.",
            "sources": [
                "iucn-cheetah"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It hunts mostly small to medium-sized ungulates and is part of open-country predator communities.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-cheetah"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-cheetah",
            "title": "IUCN Red List assessment for Acinonyx jubatus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/219/259025524",
            "assessed": "2021-05-17",
            "published": "2024",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "clouded-leopard",
    "commonName": "Clouded Leopard",
    "scientificName": "Neofelis nebulosa",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "image": {
        "src": "images/clouded-leopard.jpg",
        "alt": "Clouded leopard looking out from dense forest vegetation",
        "credit": "Rushenb · Neofelis nebulosa, Clouded leopard (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Neofelis_nebulosa,_Clouded_leopard.jpg"
    },
    "description": {
        "text": "A forest cat named for its large cloud-shaped markings and adapted for climbing.",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "habitat": {
        "text": "Tropical and subtropical forests, including evergreen forest and some secondary forest.",
        "sources": [
            "iucn-clouded-leopard"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "From the Himalayan foothills and southern China through mainland Southeast Asia to Peninsular Malaysia.",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "threats": [
        {
            "text": "Deforestation, forest fragmentation, and hunting or snaring, including for trade.",
            "sources": [
                "iucn-clouded-leopard"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It preys on forest animals including small to medium-sized mammals.",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-clouded-leopard"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-clouded-leopard",
            "title": "IUCN Red List assessment for Neofelis nebulosa",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/14519/198843258",
            "assessed": "2020-11-01",
            "published": "2021",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "dhole",
    "commonName": "Dhole",
    "scientificName": "Cuon alpinus",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-dhole"
        ]
    },
    "image": {
        "src": "images/dhole.jpg",
        "alt": "Reddish dhole standing in grass",
        "credit": "Davidvraju · Dhole (Asiatic wild dog) cropped (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dhole_(Asiatic_wild_dog)_cropped.jpg"
    },
    "description": {
        "text": "An Asian wild canid that usually hunts in packs.",
        "sources": [
            "iucn-dhole"
        ]
    },
    "habitat": {
        "text": "Forest, scrub and grassland mosaics with sufficient wild prey.",
        "sources": [
            "iucn-dhole"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Fragmented range in South, Southeast and parts of East Asia, with strongholds in India and parts of mainland Southeast Asia.",
        "sources": [
            "iucn-dhole"
        ]
    },
    "threats": [
        {
            "text": "Declining wild prey, habitat loss, persecution and disease from domestic dogs.",
            "sources": [
                "iucn-dhole"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Packs hunt deer and other ungulates.",
        "sources": [
            "iucn-dhole"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-dhole"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-dhole",
            "title": "IUCN Red List assessment for Cuon alpinus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/5953/72477893",
            "assessed": "2015-05-07",
            "published": "2015",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "gharial",
    "commonName": "Gharial",
    "scientificName": "Gavialis gangeticus",
    "status": {
        "code": "CR",
        "label": "Critically Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-gharial"
        ]
    },
    "image": {
        "src": "images/gharial.jpg",
        "alt": "Male gharial with its long snout above the Chambal River",
        "credit": "Charles J. Sharp · Gharial (Gavialis gangeticus) male (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Gharial_(Gavialis_gangeticus)_male.jpg"
    },
    "description": {
        "text": "A long-snouted crocodilian that feeds mainly on fish.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "habitat": {
        "text": "Deep freshwater river channels with open sandbanks used for basking and nesting.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "range": {
        "text": "A few river systems in India and Nepal, including the Chambal and tributaries in the Ganges system.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "threats": [
        {
            "text": "Fishing-net entanglement, dams and water extraction, and loss of nesting sandbanks to disturbance and mining.",
            "sources": [
                "iucn-gharial"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Its fish-based diet makes it a specialist river predator.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-gharial"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-gharial",
            "title": "IUCN Red List assessment for Gavialis gangeticus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/8966/149227430",
            "assessed": "2017-12-30",
            "published": "2019",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "golden-lion-tamarin",
    "commonName": "Golden Lion Tamarin",
    "scientificName": "Leontopithecus rosalia",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "image": {
        "src": "images/golden-lion-tamarin.jpg",
        "cardPosition": "50% 15%",
        "alt": "Golden lion tamarin crouching on a branch, with its long tail hanging down",
        "credit": "Daderot · Leontopithecus rosalia - Copenhagen Zoo - DSC09082 (web adaptation)",
        "license": "CC0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Leontopithecus_rosalia_-_Copenhagen_Zoo_-_DSC09082.JPG"
    },
    "description": {
        "text": "A small Brazilian primate with a golden-orange mane that lives in family groups.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "habitat": {
        "text": "Lowland Atlantic Forest, where it uses tree cavities and dense vegetation.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "A small portion of the Atlantic Forest in Rio de Janeiro state, Brazil.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "threats": [
        {
            "text": "Forest loss and fragmentation, with disease outbreaks also affecting small populations.",
            "sources": [
                "iucn-golden-lion-tamarin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It eats fruit and can disperse seeds while moving through the forest.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-golden-lion-tamarin"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-golden-lion-tamarin",
            "title": "IUCN Red List assessment for Leontopithecus rosalia",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/11506/192327291",
            "assessed": "2015-01-26",
            "published": "2021",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "greater-one-horned-rhinoceros",
    "commonName": "Greater One-Horned Rhinoceros",
    "scientificName": "Rhinoceros unicornis",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "image": {
        "src": "images/greater-one-horned-rhinoceros.jpg",
        "alt": "Greater one-horned rhinoceros with folded skin standing on grass",
        "credit": "Mayank1704 · Great-Indian-one-horned-rhinoceros-at-Kaziranga-national-park-in-Assam-India (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Great-Indian-one-horned-rhinoceros-at-Kaziranga-national-park-in-Assam-India.jpg"
    },
    "description": {
        "text": "A heavily built Asian rhinoceros with one horn and prominent folds of skin.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "habitat": {
        "text": "Alluvial floodplain grasslands, marshes, and riverine woodland.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "range": {
        "text": "Protected areas and adjoining landscapes in northern India and southern Nepal, including Assam and the Terai.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "threats": [
        {
            "text": "Poaching and the loss or degradation of floodplain habitat, including invasive plants at some sites.",
            "sources": [
                "iucn-greater-one-horned-rhinoceros"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It grazes floodplain grasses and also browses leaves and other plants.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-greater-one-horned-rhinoceros"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-greater-one-horned-rhinoceros",
            "title": "IUCN Red List assessment for Rhinoceros unicornis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/19496/18494149",
            "assessed": "2018-12-06",
            "published": "2019",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "hippopotamus",
    "commonName": "Hippopotamus",
    "scientificName": "Hippopotamus amphibius",
    "status": {
        "code": "VU",
        "label": "Vulnerable",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "image": {
        "src": "images/hippopotamus.jpg",
        "alt": "Common hippopotamus standing in shallow water",
        "credit": "Muhammad Mahdi Karim · Portrait Hippopotamus in the water (web adaptation)",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Portrait_Hippopotamus_in_the_water.jpg"
    },
    "description": {
        "text": "A large semi-aquatic mammal that commonly rests in water by day and grazes on land at night.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "habitat": {
        "text": "Rivers, lakes and wetlands with adjacent terrestrial grazing areas.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "range": {
        "text": "Patchily across sub-Saharan Africa, with major populations in eastern and southern Africa.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "threats": [
        {
            "text": "Habitat loss and alteration, and hunting for meat and ivory.",
            "sources": [
                "iucn-hippopotamus"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It consumes grass on land and transfers organic matter to rivers and lakes through dung.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-hippopotamus"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-hippopotamus",
            "title": "IUCN Red List assessment for Hippopotamus amphibius",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/10103/18567364",
            "assessed": "2016-06-16",
            "published": "2017",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "malayan-tapir",
    "commonName": "Malayan Tapir",
    "scientificName": "Tapirus indicus",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "image": {
        "src": "images/malayan-tapir.jpg",
        "alt": "Black-and-white Malayan tapir walking with its head lowered",
        "credit": "Rufus46 · Schabrackentapir Tapirus indicus Tiergarten-Nuernberg-1 (web adaptation)",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Schabrackentapir_Tapirus_indicus_Tiergarten-Nuernberg-1.jpg"
    },
    "description": {
        "text": "A large forest mammal with a black-and-white coat and a short, flexible snout.",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "habitat": {
        "text": "Tropical rainforest, including primary and some secondary lowland and hill forest.",
        "sources": [
            "iucn-malayan-tapir"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Sumatra and parts of mainland Southeast Asia, primarily the Malay Peninsula, Thailand and southern Myanmar.",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "threats": [
        {
            "text": "Forest conversion and fragmentation, hunting and incidental snaring.",
            "sources": [
                "iucn-malayan-tapir"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "As a forest browser it consumes leaves, shoots and fruit, sometimes breaking branches to reach foliage.",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-malayan-tapir"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-malayan-tapir",
            "title": "IUCN Red List assessment for Tapirus indicus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/21472/45173636",
            "assessed": "2014-11-17",
            "published": "2016",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "monarch-butterfly",
    "commonName": "Monarch Butterfly",
    "scientificName": "Danaus plexippus",
    "status": {
        "code": "LC",
        "label": "Least Concern",
        "authority": "IUCN Red List global species",
        "sources": [
            "iucn-monarch-butterfly",
            "iucn-migratory-monarch"
        ],
        "note": "The global species assessment is Least Concern. The North American migratory subspecies has a separate IUCN assessment."
    },
    "image": {
        "src": "images/monarch-butterfly.jpg",
        "alt": "Monarch butterfly with orange-and-black wings spread among flowers",
        "credit": "Kenneth Dwain Harrelson · Monarch In May (web adaptation)",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Monarch_In_May.jpg"
    },
    "description": {
        "text": "An orange-and-black butterfly whose caterpillars feed on milkweeds. Some North American populations migrate long distances.",
        "sources": [
            "iucn-monarch-butterfly",
            "fws-monarch"
        ]
    },
    "habitat": {
        "text": "Open habitats with larval host plants and nectar sources, and wooded overwintering sites for migratory populations.",
        "sources": [
            "iucn-monarch-butterfly",
            "fws-monarch"
        ]
    },
    "range": {
        "text": "Native from southern Canada to northern South America and the Caribbean, with established breeding populations elsewhere, including Australia, New Zealand and some oceanic islands.",
        "sources": [
            "iucn-monarch-butterfly",
            "fws-monarch"
        ]
    },
    "threats": [
        {
            "text": "In North America, loss of milkweed and nectar habitat, pesticide exposure, and drought and severe weather threaten migratory populations.",
            "sources": [
                "iucn-monarch-butterfly",
                "fws-monarch"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Caterpillars eat milkweed and adults visit nectar-producing flowers, where they can transfer pollen.",
        "sources": [
            "iucn-monarch-butterfly",
            "fws-monarch"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-monarch-butterfly"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Plant for monarchs in Pittsburgh",
            "text": "Plant regionally native milkweed for caterpillars and native nectar flowers for adults. Choose plants suited to your site and avoid insecticide use on them.",
            "url": "https://www.fws.gov/species/monarch-danaus-plexippus",
            "label": "U.S. Fish and Wildlife Service monarch guidance",
            "sources": [
                "fws-monarch"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-monarch-butterfly",
            "title": "IUCN Red List assessment for Danaus plexippus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/159971/219149911",
            "assessed": "2021-08-19",
            "published": "2022",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        },
        {
            "id": "fws-monarch",
            "title": "Monarch",
            "publisher": "U.S. Fish and Wildlife Service",
            "url": "https://www.fws.gov/species/monarch-danaus-plexippus",
            "accessed": "2026-11-20"
        },
        {
            "id": "iucn-migratory-monarch",
            "title": "IUCN Red List assessment for Danaus plexippus plexippus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/194052138/246096271",
            "assessed": "2023-09-27",
            "published": "2023",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "okapi",
    "commonName": "Okapi",
    "scientificName": "Okapia johnstoni",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-okapi"
        ]
    },
    "image": {
        "src": "images/okapi.jpg",
        "alt": "Okapi standing on grass with its striped legs visible",
        "credit": "Daniel Jolivet · Saint-Aignan (Loir-et-Cher). Okapi (web adaptation)",
        "license": "CC BY 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Saint-Aignan_(Loir-et-Cher)._Okapi.jpg"
    },
    "description": {
        "text": "A forest-dwelling relative of the giraffe with striped legs and a long tongue used to browse foliage.",
        "sources": [
            "iucn-okapi"
        ]
    },
    "habitat": {
        "text": "Dense tropical forest, generally with understory vegetation and access to forest gaps and streams.",
        "sources": [
            "iucn-okapi"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Endemic to the Democratic Republic of the Congo, primarily in northern and northeastern forests, including the Ituri Forest.",
        "sources": [
            "iucn-okapi"
        ]
    },
    "threats": [
        {
            "text": "Hunting, forest loss and degradation, mining, and insecurity that restricts conservation work.",
            "sources": [
                "iucn-okapi"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It browses leaves, shoots and other understory plants in the Congo rainforest.",
        "sources": [
            "iucn-okapi"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-okapi"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-okapi",
            "title": "IUCN Red List assessment for Okapia johnstoni",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/15188/51140517",
            "assessed": "2015-07-25",
            "published": "2015",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
},
{
    "id": "pygmy-hippopotamus",
    "commonName": "Pygmy Hippopotamus",
    "scientificName": "Choeropsis liberiensis",
    "status": {
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "image": {
        "src": "images/pygmy-hippopotamus.jpg",
        "alt": "Pygmy hippopotamus grazing with its head lowered",
        "credit": "Bardrock · Hexaprotodon liberiensis in Edinburgh Zoo (web adaptation)",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hexaprotodon_liberiensis_in_Edinburgh_Zoo.JPG"
    },
    "description": {
        "text": "A small, mostly solitary forest hippopotamus native to West Africa.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "habitat": {
        "text": "Humid tropical forest, particularly near forest streams, swamps and riverbanks.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ],
        "filters": [
            "tropical"
        ]
    },
    "range": {
        "text": "Fragmented Upper Guinean forests in Liberia, Sierra Leone, Guinea and Côte d’Ivoire.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "threats": [
        {
            "text": "Forest conversion and degradation, and hunting.",
            "sources": [
                "iucn-pygmy-hippopotamus"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "It consumes leaves, ferns, fruit and other forest vegetation.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "conservationMethods": [
        {
            "text": "Support habitat conservation and science-based species protection.",
            "sources": [
                "iucn-pygmy-hippopotamus"
            ]
        }
    ],
    "population": null,
    "localActions": [
        {
            "title": "Pittsburgh conservation participation",
            "text": "Learn about wildlife conservation through Pittsburgh Zoo & Aquarium. This is general education, not a species-specific local rescue activity.",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "label": "Pittsburgh Zoo & Aquarium",
            "sources": [
                "pgh-zoo"
            ]
        }
    ],
    "sources": [
        {
            "id": "iucn-pygmy-hippopotamus",
            "title": "IUCN Red List assessment for Choeropsis liberiensis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/species/10032/18567171",
            "assessed": "2015-02-23",
            "published": "2015",
            "accessed": "2026-11-20"
        },
        {
            "id": "pgh-zoo",
            "title": "Conservation",
            "publisher": "Pittsburgh Zoo & Aquarium",
            "url": "https://www.pittsburghzoo.org/conservation/",
            "accessed": "2026-11-20"
        }
    ]
}

];

/* ==================================
   Data helpers
================================== */

// Find one animal by its URL id. Returns undefined if not found.
function getAnimalById(id) {
    return ANIMALS.find(function (animal) {
        return animal.id === id;
    });
}

// Stable profile URL for an animal. Use this for "Learn More" links.
function getAnimalProfileUrl(animal) {
    return "animal.html?id=" + encodeURIComponent(animal.id);
}
