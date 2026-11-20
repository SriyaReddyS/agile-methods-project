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
   - status: global IUCN Red List category.
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
            authority: "IUCN Red List",
            sources: ["wcs-amur-leopard", "iucn-amur-leopard"]
        },
        image: {
            src: "images/amur-leopard.jpg",
            alt: "Amur leopard with a pale spotted coat standing on mossy rocks in front of bamboo, mouth open",
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
            sources: ["wcs-amur-leopard"]
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
                title: "IUCN Red List search: Panthera pardus orientalis",
                publisher: "IUCN Red List of Threatened Species",
                url: "https://www.iucnredlist.org/search?query=Panthera%20pardus%20orientalis",
                accessed: "2026-11-02"
            },
            {
                id: "wcs-support",
                title: "Wildlife Conservation Society — Ways to Support",
                publisher: "Wildlife Conservation Society",
                url: "https://www.wcs.org/",
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
            sources: ["mtsg-hawksbill-2007", "iucn-hawksbill", "noaa-hawksbill"]
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
            sources: ["noaa-hawksbill", "fws-hawksbill"]
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
                title: "IUCN Red List search: Eretmochelys imbricata",
                publisher: "IUCN Red List of Threatened Species",
                url: "https://www.iucnredlist.org/search?query=Eretmochelys%20imbricata",
                accessed: "2026-11-02"
            },
            {
                id: "allegheny-cleanways",
                title: "Volunteer and cleanup programs",
                publisher: "Allegheny CleanWays",
                url: "https://www.alleghenycleanways.org/",
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
            sources: ["esabii-orangutan", "iucn-orangutan"]
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
            sources: ["apes-atlas-orangutan", "adw-orangutan"]
        },
        range: {
            text: "Endemic to Sumatra, Indonesia, mainly in the north of the island. The Leuser Ecosystem holds about 95% of wild Sumatran orangutans. The species also occurs in protected areas such as Bukit Tigapuluh National Park.",
            sources: ["apes-atlas-orangutan"]
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
                title: "IUCN Red List search: Pongo abelii",
                publisher: "IUCN Red List of Threatened Species",
                url: "https://www.iucnredlist.org/search?query=Pongo%20abelii",
                accessed: "2026-11-02"
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
            "authority": "IUCN Red List (see supporting conservation source)",
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
            "text": "Central and West African tropical forests.",
            "sources": [
                "primary-african-forest-elephant"
            ]
        },
        "habitat": {
            "text": "Humid lowland rainforest, forest clearings, and connected woodland habitats.",
            "sources": [
                "primary-african-forest-elephant"
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
                "title": "IUCN Red List: African Forest Elephant",
                "publisher": "IUCN Red List",
                "url": "https://doi.org/10.2305/IUCN.UK.2026-1.RLTS.T181007989A292481365.en",
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
        "id": "vaquita",
        "commonName": "Vaquita",
        "scientificName": "Phocoena sinus",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-vaquita"
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
                "primary-vaquita"
            ]
        },
        "habitat": {
            "text": "Shallow, productive coastal waters of the upper Gulf of California.",
            "sources": [
                "primary-vaquita"
            ]
        },
        "range": {
            "text": "Only the northern Gulf of California, Mexico.",
            "sources": [
                "primary-vaquita"
            ]
        },
        "threats": [
            {
                "text": "Entanglement and drowning in gillnets",
                "sources": [
                    "primary-vaquita"
                ]
            },
            {
                "text": "Illegal totoaba fishing",
                "sources": [
                    "primary-vaquita"
                ]
            },
            {
                "text": "Extremely small surviving population",
                "sources": [
                    "primary-vaquita"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Vaquitas are native marine predators in a highly productive coastal food web.",
            "sources": [
                "primary-vaquita"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-javan-rhino"
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
                "primary-javan-rhino"
            ]
        },
        "habitat": {
            "text": "Dense tropical lowland forest, wet clearings, and freshwater habitats.",
            "sources": [
                "primary-javan-rhino"
            ]
        },
        "range": {
            "text": "Ujung Kulon National Park on Java, Indonesia.",
            "sources": [
                "primary-javan-rhino"
            ]
        },
        "threats": [
            {
                "text": "Single-site population vulnerable to disasters",
                "sources": [
                    "primary-javan-rhino"
                ]
            },
            {
                "text": "Poaching risk",
                "sources": [
                    "primary-javan-rhino"
                ]
            },
            {
                "text": "Invasive plants reducing food habitat",
                "sources": [
                    "primary-javan-rhino"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "As a large browser, this rhinoceros influences vegetation and forest dynamics.",
            "sources": [
                "primary-javan-rhino"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-sumatran-rhino"
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
                "primary-sumatran-rhino"
            ]
        },
        "habitat": {
            "text": "Dense tropical lowland and montane forests.",
            "sources": [
                "primary-sumatran-rhino"
            ]
        },
        "range": {
            "text": "Remaining isolated populations in Indonesia, principally Sumatra and Borneo.",
            "sources": [
                "primary-sumatran-rhino"
            ]
        },
        "threats": [
            {
                "text": "Severely fragmented populations",
                "sources": [
                    "primary-sumatran-rhino"
                ]
            },
            {
                "text": "Limited breeding opportunities",
                "sources": [
                    "primary-sumatran-rhino"
                ]
            },
            {
                "text": "Poaching and forest loss",
                "sources": [
                    "primary-sumatran-rhino"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "This forest browser helps shape vegetation and its protection also safeguards diverse forest habitats.",
            "sources": [
                "primary-sumatran-rhino"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-saola"
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
                "primary-saola"
            ]
        },
        "habitat": {
            "text": "Evergreen forests and stream valleys in the Annamite Mountains.",
            "sources": [
                "primary-saola"
            ]
        },
        "range": {
            "text": "Annamite Mountains of Laos and Vietnam.",
            "sources": [
                "primary-saola"
            ]
        },
        "threats": [
            {
                "text": "Wire snares set for other wildlife",
                "sources": [
                    "primary-saola"
                ]
            },
            {
                "text": "Forest degradation",
                "sources": [
                    "primary-saola"
                ]
            },
            {
                "text": "Extremely rare and poorly documented populations",
                "sources": [
                    "primary-saola"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Protecting saola habitat benefits many other threatened Annamite forest species.",
            "sources": [
                "primary-saola"
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
                "id": "primary-saola",
                "title": "Saola Status",
                "publisher": "Saola Working Group",
                "url": "https://www.savethesaola.org/the-saola/status/",
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
        "id": "philippine-eagle",
        "commonName": "Philippine Eagle",
        "scientificName": "Pithecophaga jefferyi",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-philippine-eagle"
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
                "primary-philippine-eagle"
            ]
        },
        "habitat": {
            "text": "Old-growth and mature tropical forest with tall nesting trees.",
            "sources": [
                "primary-philippine-eagle"
            ]
        },
        "range": {
            "text": "Several Philippine islands, especially Mindanao and Luzon.",
            "sources": [
                "primary-philippine-eagle"
            ]
        },
        "threats": [
            {
                "text": "Deforestation",
                "sources": [
                    "primary-philippine-eagle"
                ]
            },
            {
                "text": "Hunting and persecution",
                "sources": [
                    "primary-philippine-eagle"
                ]
            },
            {
                "text": "Small isolated breeding populations",
                "sources": [
                    "primary-philippine-eagle"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "As a top predator, this eagle contributes to the balance of forest food webs.",
            "sources": [
                "primary-philippine-eagle"
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
                "id": "primary-philippine-eagle",
                "title": "Philippine Eagle Conservation",
                "publisher": "Philippine Eagle Foundation",
                "url": "https://www.philippineeaglefoundation.org/",
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
        "id": "sunda-pangolin",
        "commonName": "Sunda Pangolin",
        "scientificName": "Manis javanica",
        "status": {
            "code": "CR",
            "label": "Critically Endangered",
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-sunda-pangolin"
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
                "primary-sunda-pangolin"
            ]
        },
        "habitat": {
            "text": "Tropical forests, secondary woodland, and some modified landscapes.",
            "sources": [
                "primary-sunda-pangolin"
            ]
        },
        "range": {
            "text": "Mainland and island Southeast Asia, including parts of Malaysia and Indonesia.",
            "sources": [
                "primary-sunda-pangolin"
            ]
        },
        "threats": [
            {
                "text": "Illegal trade in scales and meat",
                "sources": [
                    "primary-sunda-pangolin"
                ]
            },
            {
                "text": "Habitat loss",
                "sources": [
                    "primary-sunda-pangolin"
                ]
            },
            {
                "text": "Hunting and trafficking",
                "sources": [
                    "primary-sunda-pangolin"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Pangolins consume ants and termites and are part of forest insect-control food webs.",
            "sources": [
                "primary-sunda-pangolin"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-cross-river-gorilla"
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
                "primary-cross-river-gorilla"
            ]
        },
        "habitat": {
            "text": "Rugged forested hills and montane tropical forest.",
            "sources": [
                "primary-cross-river-gorilla"
            ]
        },
        "range": {
            "text": "Small fragmented forests along the Nigeria-Cameroon border.",
            "sources": [
                "primary-cross-river-gorilla"
            ]
        },
        "threats": [
            {
                "text": "Habitat fragmentation",
                "sources": [
                    "primary-cross-river-gorilla"
                ]
            },
            {
                "text": "Hunting pressure",
                "sources": [
                    "primary-cross-river-gorilla"
                ]
            },
            {
                "text": "Small isolated groups",
                "sources": [
                    "primary-cross-river-gorilla"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Gorillas disperse seeds and influence the regeneration of tropical forests.",
            "sources": [
                "primary-cross-river-gorilla"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-red-panda"
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
                "primary-red-panda"
            ]
        },
        "habitat": {
            "text": "Temperate mountain forests with bamboo understory and suitable nesting trees.",
            "sources": [
                "primary-red-panda"
            ]
        },
        "range": {
            "text": "Eastern Himalayas and adjacent mountain forests in Asia.",
            "sources": [
                "primary-red-panda"
            ]
        },
        "threats": [
            {
                "text": "Loss of forest and bamboo habitat",
                "sources": [
                    "primary-red-panda"
                ]
            },
            {
                "text": "Poaching and accidental trapping",
                "sources": [
                    "primary-red-panda"
                ]
            },
            {
                "text": "Habitat fragmentation",
                "sources": [
                    "primary-red-panda"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Red pandas are part of Himalayan forest food webs, and protecting them preserves bamboo-rich forests.",
            "sources": [
                "primary-red-panda"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-tiger"
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
                "primary-tiger"
            ]
        },
        "habitat": {
            "text": "Forests, grasslands, and mangroves with enough prey and cover.",
            "sources": [
                "primary-tiger"
            ]
        },
        "range": {
            "text": "Fragmented habitats across parts of South, Southeast, and East Asia.",
            "sources": [
                "primary-tiger"
            ]
        },
        "threats": [
            {
                "text": "Poaching and illegal wildlife trade",
                "sources": [
                    "primary-tiger"
                ]
            },
            {
                "text": "Prey depletion",
                "sources": [
                    "primary-tiger"
                ]
            },
            {
                "text": "Habitat fragmentation and conflict",
                "sources": [
                    "primary-tiger"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Tigers regulate prey populations and their conservation protects extensive habitats.",
            "sources": [
                "primary-tiger"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-asian-elephant"
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
                "primary-asian-elephant"
            ]
        },
        "habitat": {
            "text": "Tropical and subtropical forests, grasslands, and forest edges.",
            "sources": [
                "primary-asian-elephant"
            ]
        },
        "range": {
            "text": "Fragmented regions of South and Southeast Asia.",
            "sources": [
                "primary-asian-elephant"
            ]
        },
        "threats": [
            {
                "text": "Habitat loss and blocked migration routes",
                "sources": [
                    "primary-asian-elephant"
                ]
            },
            {
                "text": "Human-elephant conflict",
                "sources": [
                    "primary-asian-elephant"
                ]
            },
            {
                "text": "Poaching and infrastructure",
                "sources": [
                    "primary-asian-elephant"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Elephants spread seeds and open pathways, helping shape habitats for other species.",
            "sources": [
                "primary-asian-elephant"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-blue-whale"
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
                "primary-blue-whale"
            ]
        },
        "habitat": {
            "text": "Open-ocean and productive feeding waters, including seasonal high-latitude areas.",
            "sources": [
                "primary-blue-whale"
            ]
        },
        "range": {
            "text": "Across the world's major oceans.",
            "sources": [
                "primary-blue-whale"
            ]
        },
        "threats": [
            {
                "text": "Ship strikes",
                "sources": [
                    "primary-blue-whale"
                ]
            },
            {
                "text": "Entanglement in fishing gear",
                "sources": [
                    "primary-blue-whale"
                ]
            },
            {
                "text": "Underwater noise and changing ocean conditions",
                "sources": [
                    "primary-blue-whale"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Blue whales move nutrients through marine food webs and contribute to ocean nutrient cycling.",
            "sources": [
                "primary-blue-whale"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-whale-shark"
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
                "primary-whale-shark"
            ]
        },
        "habitat": {
            "text": "Warm tropical and subtropical seas, including coastal feeding aggregations.",
            "sources": [
                "primary-whale-shark"
            ]
        },
        "range": {
            "text": "Tropical and warm-temperate oceans worldwide.",
            "sources": [
                "primary-whale-shark"
            ]
        },
        "threats": [
            {
                "text": "Fishing and accidental capture",
                "sources": [
                    "primary-whale-shark"
                ]
            },
            {
                "text": "Vessel strikes",
                "sources": [
                    "primary-whale-shark"
                ]
            },
            {
                "text": "Disturbance at feeding sites",
                "sources": [
                    "primary-whale-shark"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Whale sharks feed on plankton and small organisms, connecting marine food-web processes.",
            "sources": [
                "primary-whale-shark"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-kemps-ridley-sea-turtle"
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
                "primary-kemps-ridley-sea-turtle"
            ]
        },
        "habitat": {
            "text": "Coastal waters, shallow bays, and sandy nesting beaches.",
            "sources": [
                "primary-kemps-ridley-sea-turtle"
            ]
        },
        "range": {
            "text": "Mainly the Gulf of Mexico and western North Atlantic.",
            "sources": [
                "primary-kemps-ridley-sea-turtle"
            ]
        },
        "threats": [
            {
                "text": "Fishing-gear bycatch",
                "sources": [
                    "primary-kemps-ridley-sea-turtle"
                ]
            },
            {
                "text": "Marine debris and pollution",
                "sources": [
                    "primary-kemps-ridley-sea-turtle"
                ]
            },
            {
                "text": "Damage to nesting beaches",
                "sources": [
                    "primary-kemps-ridley-sea-turtle"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Kemp's ridley turtles feed on crabs and other invertebrates in coastal ecosystems.",
            "sources": [
                "primary-kemps-ridley-sea-turtle"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-snow-leopard"
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
                "primary-snow-leopard"
            ]
        },
        "habitat": {
            "text": "Rocky alpine and subalpine mountain slopes.",
            "sources": [
                "primary-snow-leopard"
            ]
        },
        "range": {
            "text": "High mountains of Central and South Asia.",
            "sources": [
                "primary-snow-leopard"
            ]
        },
        "threats": [
            {
                "text": "Retaliatory killing after livestock losses",
                "sources": [
                    "primary-snow-leopard"
                ]
            },
            {
                "text": "Declining wild prey",
                "sources": [
                    "primary-snow-leopard"
                ]
            },
            {
                "text": "Habitat fragmentation and climate change",
                "sources": [
                    "primary-snow-leopard"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Snow leopards are high-altitude predators that help maintain mountain food webs.",
            "sources": [
                "primary-snow-leopard"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-giant-panda"
            ]
        },
        "image": {
            "src": "images/giant-panda.jpg",
            "alt": "Giant panda at San Diego Zoo",
            "credit": "Wikimedia Commons photographer (see source)",
            "license": "CC BY-SA 3.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Giant_panda.jpg"
        },
        "description": {
            "text": "A bamboo-eating bear native to China's mountain forests.",
            "sources": [
                "primary-giant-panda"
            ]
        },
        "habitat": {
            "text": "Temperate mountain forests with abundant bamboo.",
            "sources": [
                "primary-giant-panda"
            ]
        },
        "range": {
            "text": "Mountain ranges of central China, especially Sichuan, Shaanxi, and Gansu.",
            "sources": [
                "primary-giant-panda"
            ]
        },
        "threats": [
            {
                "text": "Forest fragmentation",
                "sources": [
                    "primary-giant-panda"
                ]
            },
            {
                "text": "Infrastructure development",
                "sources": [
                    "primary-giant-panda"
                ]
            },
            {
                "text": "Climate-driven changes to bamboo habitat",
                "sources": [
                    "primary-giant-panda"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Protecting giant panda habitat also protects other forest wildlife and watersheds.",
            "sources": [
                "primary-giant-panda"
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
            "authority": "IUCN Red List (see supporting conservation source)",
            "sources": [
                "primary-polar-bear"
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
                "primary-polar-bear"
            ]
        },
        "habitat": {
            "text": "Arctic sea ice and adjacent coastal areas.",
            "sources": [
                "primary-polar-bear"
            ]
        },
        "range": {
            "text": "Circumpolar Arctic across five range countries.",
            "sources": [
                "primary-polar-bear"
            ]
        },
        "threats": [
            {
                "text": "Loss of sea ice from climate warming",
                "sources": [
                    "primary-polar-bear"
                ]
            },
            {
                "text": "Human-bear conflict",
                "sources": [
                    "primary-polar-bear"
                ]
            },
            {
                "text": "Industrial disturbance and pollution",
                "sources": [
                    "primary-polar-bear"
                ]
            }
        ],
        "ecologicalImportance": {
            "text": "Polar bears are top predators in Arctic marine food webs.",
            "sources": [
                "primary-polar-bear"
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
        "src": null,
        "alt": "African Savanna Elephant photo placeholder"
    },
    "description": {
        "text": "African Savanna Elephant is associated with african savannas and woodlands.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "habitat": {
        "text": "African savannas and woodlands.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-african-savanna-elephant"
        ]
    },
    "threats": [
        {
            "text": "Ivory poaching and habitat fragmentation.",
            "sources": [
                "iucn-african-savanna-elephant"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses seeds and modifies vegetation.",
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
            "title": "IUCN Red List search for Loxodonta africana",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Loxodonta%20africana",
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
        "src": null,
        "alt": "African Wild Dog photo placeholder"
    },
    "description": {
        "text": "African Wild Dog is associated with african grasslands and woodlands.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "habitat": {
        "text": "African grasslands and woodlands.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-african-wild-dog"
        ]
    },
    "threats": [
        {
            "text": "Fragmentation, persecution and disease.",
            "sources": [
                "iucn-african-wild-dog"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Predator that helps regulate prey.",
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
            "title": "IUCN Red List search for Lycaon pictus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Lycaon%20pictus",
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
        "src": null,
        "alt": "Bornean Orangutan photo placeholder"
    },
    "description": {
        "text": "Bornean Orangutan is associated with borneo tropical forests.",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "habitat": {
        "text": "Borneo tropical forests.",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-bornean-orangutan"
        ]
    },
    "threats": [
        {
            "text": "Deforestation and illegal killing.",
            "sources": [
                "iucn-bornean-orangutan"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses rainforest seeds.",
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
            "title": "IUCN Red List search for Pongo pygmaeus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Pongo%20pygmaeus",
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
        "src": null,
        "alt": "Chimpanzee photo placeholder"
    },
    "description": {
        "text": "Chimpanzee is associated with central and western african forests.",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "habitat": {
        "text": "Central and western African forests.",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-chimpanzee"
        ]
    },
    "threats": [
        {
            "text": "Habitat loss, hunting and disease.",
            "sources": [
                "iucn-chimpanzee"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses forest seeds.",
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
            "title": "IUCN Red List search for Pan troglodytes",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Pan%20troglodytes",
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
        "authority": "IUCN Red List",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "image": {
        "src": null,
        "alt": "Eastern Lowland Gorilla photo placeholder"
    },
    "description": {
        "text": "Eastern Lowland Gorilla is associated with eastern congo forests.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "habitat": {
        "text": "Eastern Congo forests.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-eastern-lowland-gorilla"
        ]
    },
    "threats": [
        {
            "text": "Hunting and habitat degradation.",
            "sources": [
                "iucn-eastern-lowland-gorilla"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses forest seeds.",
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
            "title": "IUCN Red List search for Gorilla beringei graueri",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Gorilla%20beringei%20graueri",
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
        "src": null,
        "alt": "Fin Whale photo placeholder"
    },
    "description": {
        "text": "Fin Whale is associated with global temperate and polar seas.",
        "sources": [
            "iucn-fin-whale"
        ]
    },
    "habitat": {
        "text": "Global temperate and polar seas.",
        "sources": [
            "iucn-fin-whale"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-fin-whale"
        ]
    },
    "threats": [
        {
            "text": "Ship strikes and fishing entanglement.",
            "sources": [
                "iucn-fin-whale"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Cycles marine nutrients.",
        "sources": [
            "iucn-fin-whale"
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
            "title": "IUCN Red List search for Balaenoptera physalus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Balaenoptera%20physalus",
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
        "src": null,
        "alt": "Giant Otter photo placeholder"
    },
    "description": {
        "text": "Giant Otter is associated with amazon basin rivers.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "habitat": {
        "text": "Amazon basin rivers.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-giant-otter"
        ]
    },
    "threats": [
        {
            "text": "Wetland degradation and persecution.",
            "sources": [
                "iucn-giant-otter"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Predator of freshwater fish.",
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
            "title": "IUCN Red List search for Pteronura brasiliensis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Pteronura%20brasiliensis",
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
        "src": null,
        "alt": "Green Sea Turtle photo placeholder"
    },
    "description": {
        "text": "Green Sea Turtle is associated with tropical coastal waters.",
        "sources": [
            "iucn-green-sea-turtle"
        ]
    },
    "habitat": {
        "text": "Tropical coastal waters.",
        "sources": [
            "iucn-green-sea-turtle"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-green-sea-turtle"
        ]
    },
    "threats": [
        {
            "text": "Bycatch and habitat degradation.",
            "sources": [
                "iucn-green-sea-turtle"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Grazes seagrass beds.",
        "sources": [
            "iucn-green-sea-turtle"
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
            "title": "IUCN Red List search for Chelonia mydas",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Chelonia%20mydas",
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
        "src": null,
        "alt": "Hector's Dolphin photo placeholder"
    },
    "description": {
        "text": "Hector's Dolphin is associated with new zealand coastal waters.",
        "sources": [
            "iucn-hector-s-dolphin"
        ]
    },
    "habitat": {
        "text": "New Zealand coastal waters.",
        "sources": [
            "iucn-hector-s-dolphin"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-hector-s-dolphin"
        ]
    },
    "threats": [
        {
            "text": "Fishing net entanglement.",
            "sources": [
                "iucn-hector-s-dolphin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Predator of fish and squid.",
        "sources": [
            "iucn-hector-s-dolphin"
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
            "title": "IUCN Red List search for Cephalorhynchus hectori",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Cephalorhynchus%20hectori",
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
        "src": null,
        "alt": "Indian Pangolin photo placeholder"
    },
    "description": {
        "text": "Indian Pangolin is associated with south asian forests and grasslands.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "habitat": {
        "text": "South Asian forests and grasslands.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-indian-pangolin"
        ]
    },
    "threats": [
        {
            "text": "Wildlife trafficking and habitat loss.",
            "sources": [
                "iucn-indian-pangolin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Eats ants and termites.",
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
            "title": "IUCN Red List search for Manis crassicaudata",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Manis%20crassicaudata",
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
        "src": null,
        "alt": "Indus River Dolphin photo placeholder"
    },
    "description": {
        "text": "Indus River Dolphin is associated with indus river basin.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "habitat": {
        "text": "Indus River basin.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-indus-river-dolphin"
        ]
    },
    "threats": [
        {
            "text": "River barriers and entanglement.",
            "sources": [
                "iucn-indus-river-dolphin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Riverine fish predator.",
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
            "title": "IUCN Red List search for Platanista minor",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Platanista%20minor",
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
        "src": null,
        "alt": "Jaguar photo placeholder"
    },
    "description": {
        "text": "Jaguar is associated with american forests and wetlands.",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "habitat": {
        "text": "American forests and wetlands.",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-jaguar"
        ]
    },
    "threats": [
        {
            "text": "Deforestation and persecution.",
            "sources": [
                "iucn-jaguar"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Top predator.",
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
            "title": "IUCN Red List search for Panthera onca",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Panthera%20onca",
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
        "authority": "IUCN Red List",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "image": {
        "src": null,
        "alt": "Mountain Gorilla photo placeholder"
    },
    "description": {
        "text": "Mountain Gorilla is associated with central african montane forests.",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "habitat": {
        "text": "Central African montane forests.",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-mountain-gorilla"
        ]
    },
    "threats": [
        {
            "text": "Disease and human disturbance.",
            "sources": [
                "iucn-mountain-gorilla"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses seeds.",
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
            "title": "IUCN Red List search for Gorilla beringei beringei",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Gorilla%20beringei%20beringei",
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
        "src": null,
        "alt": "North Atlantic Right Whale photo placeholder"
    },
    "description": {
        "text": "North Atlantic Right Whale is associated with north atlantic ocean.",
        "sources": [
            "iucn-north-atlantic-right-whale"
        ]
    },
    "habitat": {
        "text": "North Atlantic Ocean.",
        "sources": [
            "iucn-north-atlantic-right-whale"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-north-atlantic-right-whale"
        ]
    },
    "threats": [
        {
            "text": "Ship strikes and fishing entanglement.",
            "sources": [
                "iucn-north-atlantic-right-whale"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Marine nutrient cycling.",
        "sources": [
            "iucn-north-atlantic-right-whale"
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
            "title": "IUCN Red List search for Eubalaena glacialis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Eubalaena%20glacialis",
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
        "src": null,
        "alt": "Southern Rockhopper Penguin photo placeholder"
    },
    "description": {
        "text": "Southern Rockhopper Penguin is associated with subantarctic islands.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "habitat": {
        "text": "Subantarctic islands.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-southern-rockhopper-penguin"
        ]
    },
    "threats": [
        {
            "text": "Climate change and fishing pressure.",
            "sources": [
                "iucn-southern-rockhopper-penguin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Transfers marine nutrients to land.",
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
            "title": "IUCN Red List search for Eudyptes chrysocome",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Eudyptes%20chrysocome",
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
        "authority": "IUCN Red List",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "image": {
        "src": null,
        "alt": "Sumatran Elephant photo placeholder"
    },
    "description": {
        "text": "Sumatran Elephant is associated with sumatra lowland forests.",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "habitat": {
        "text": "Sumatra lowland forests.",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-sumatran-elephant"
        ]
    },
    "threats": [
        {
            "text": "Deforestation and human conflict.",
            "sources": [
                "iucn-sumatran-elephant"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Forest seed disperser.",
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
            "title": "IUCN Red List search for Elephas maximus sumatranus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Elephas%20maximus%20sumatranus",
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
        "src": null,
        "alt": "Black rhinoceros; licensed photograph pending"
    },
    "description": {
        "text": "The black rhinoceros is a large browsing mammal native to parts of eastern and southern Africa.",
        "sources": [
            "iucn-black-rhino",
            "wwf-black-rhino"
        ]
    },
    "habitat": {
        "text": "African savannas, shrublands and arid habitats.",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "range": {
        "text": "Native to parts of eastern and southern Africa; consult the IUCN assessment for the current country-level range.",
        "sources": [
            "iucn-black-rhino"
        ]
    },
    "threats": [
        {
            "text": "Poaching for illegal horn trade and habitat pressure threaten black rhinoceros populations.",
            "sources": [
                "wwf-black-rhino"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "As a large browser, the black rhinoceros influences woody vegetation; protecting its habitat also benefits other wildlife.",
        "sources": [
            "wwf-black-rhino"
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
            "title": "Diceros bicornis, IUCN Red List assessment",
            "publisher": "IUCN",
            "url": "https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T6557A152728945.en",
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
        "src": null,
        "alt": "Tiger Shark photo placeholder"
    },
    "description": {
        "text": "Tiger Shark is associated with warm oceans.",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "habitat": {
        "text": "Warm oceans.",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-tiger-shark"
        ]
    },
    "threats": [
        {
            "text": "Fishing pressure and bycatch.",
            "sources": [
                "iucn-tiger-shark"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Marine apex predator.",
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
            "title": "IUCN Red List search for Galeocerdo cuvier",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Galeocerdo%20cuvier",
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
        "src": null,
        "alt": "African Lion photo placeholder"
    },
    "description": {
        "text": "African Lion is associated with african savannas.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "habitat": {
        "text": "African savannas.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-african-lion"
        ]
    },
    "threats": [
        {
            "text": "Conflict with people and prey decline.",
            "sources": [
                "iucn-african-lion"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Top predator.",
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
            "title": "IUCN Red List search for Panthera leo",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Panthera%20leo",
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
        "src": null,
        "alt": "Cheetah photo placeholder"
    },
    "description": {
        "text": "Cheetah is associated with african open plains.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "habitat": {
        "text": "African open plains.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-cheetah"
        ]
    },
    "threats": [
        {
            "text": "Habitat loss and human conflict.",
            "sources": [
                "iucn-cheetah"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Predator of medium-sized herbivores.",
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
            "title": "IUCN Red List search for Acinonyx jubatus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Acinonyx%20jubatus",
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
        "src": null,
        "alt": "Clouded Leopard photo placeholder"
    },
    "description": {
        "text": "Clouded Leopard is associated with southeast asian forests.",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "habitat": {
        "text": "Southeast Asian forests.",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-clouded-leopard"
        ]
    },
    "threats": [
        {
            "text": "Deforestation and poaching.",
            "sources": [
                "iucn-clouded-leopard"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Forest predator.",
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
            "title": "IUCN Red List search for Neofelis nebulosa",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Neofelis%20nebulosa",
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
        "src": null,
        "alt": "Dhole photo placeholder"
    },
    "description": {
        "text": "Dhole is associated with asian forests.",
        "sources": [
            "iucn-dhole"
        ]
    },
    "habitat": {
        "text": "Asian forests.",
        "sources": [
            "iucn-dhole"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-dhole"
        ]
    },
    "threats": [
        {
            "text": "Prey loss and persecution.",
            "sources": [
                "iucn-dhole"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Social pack predator.",
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
            "title": "IUCN Red List search for Cuon alpinus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Cuon%20alpinus",
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
        "src": null,
        "alt": "Gharial photo placeholder"
    },
    "description": {
        "text": "Gharial is associated with northern indian subcontinent rivers.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "habitat": {
        "text": "Northern Indian subcontinent rivers.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-gharial"
        ]
    },
    "threats": [
        {
            "text": "Fishing nets and river alteration.",
            "sources": [
                "iucn-gharial"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Fish-eating river predator.",
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
            "title": "IUCN Red List search for Gavialis gangeticus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Gavialis%20gangeticus",
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
        "src": null,
        "alt": "Golden Lion Tamarin photo placeholder"
    },
    "description": {
        "text": "Golden Lion Tamarin is associated with brazilian atlantic forest.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "habitat": {
        "text": "Brazilian Atlantic forest.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-golden-lion-tamarin"
        ]
    },
    "threats": [
        {
            "text": "Forest fragmentation.",
            "sources": [
                "iucn-golden-lion-tamarin"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses seeds.",
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
            "title": "IUCN Red List search for Leontopithecus rosalia",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Leontopithecus%20rosalia",
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
        "src": null,
        "alt": "Greater One-Horned Rhinoceros photo placeholder"
    },
    "description": {
        "text": "Greater One-Horned Rhinoceros is associated with northern indian and nepalese grasslands.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "habitat": {
        "text": "Northern Indian and Nepalese grasslands.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-greater-one-horned-rhinoceros"
        ]
    },
    "threats": [
        {
            "text": "Poaching and habitat loss.",
            "sources": [
                "iucn-greater-one-horned-rhinoceros"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Large grazing herbivore.",
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
            "title": "IUCN Red List search for Rhinoceros unicornis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Rhinoceros%20unicornis",
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
        "src": null,
        "alt": "Hippopotamus photo placeholder"
    },
    "description": {
        "text": "Hippopotamus is associated with sub-saharan african rivers.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "habitat": {
        "text": "Sub-Saharan African rivers.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-hippopotamus"
        ]
    },
    "threats": [
        {
            "text": "Habitat loss and hunting.",
            "sources": [
                "iucn-hippopotamus"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Transfers nutrients between land and water.",
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
            "title": "IUCN Red List search for Hippopotamus amphibius",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Hippopotamus%20amphibius",
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
        "src": null,
        "alt": "Malayan Tapir photo placeholder"
    },
    "description": {
        "text": "Malayan Tapir is associated with southeast asian rainforests.",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "habitat": {
        "text": "Southeast Asian rainforests.",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-malayan-tapir"
        ]
    },
    "threats": [
        {
            "text": "Forest conversion.",
            "sources": [
                "iucn-malayan-tapir"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Disperses large seeds.",
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
            "title": "IUCN Red List search for Tapirus indicus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Tapirus%20indicus",
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
        "code": "EN",
        "label": "Endangered",
        "authority": "IUCN Red List",
        "sources": [
            "iucn-monarch-butterfly"
        ]
    },
    "image": {
        "src": null,
        "alt": "Monarch Butterfly photo placeholder"
    },
    "description": {
        "text": "Monarch Butterfly is associated with north american grasslands and migration corridors.",
        "sources": [
            "iucn-monarch-butterfly"
        ]
    },
    "habitat": {
        "text": "North American grasslands and migration corridors.",
        "sources": [
            "iucn-monarch-butterfly"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-monarch-butterfly"
        ]
    },
    "threats": [
        {
            "text": "Milkweed loss and climate pressures.",
            "sources": [
                "iucn-monarch-butterfly"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Pollinator.",
        "sources": [
            "iucn-monarch-butterfly"
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
            "id": "iucn-monarch-butterfly",
            "title": "IUCN Red List search for Danaus plexippus",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Danaus%20plexippus",
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
        "src": null,
        "alt": "Okapi photo placeholder"
    },
    "description": {
        "text": "Okapi is associated with congo rainforests.",
        "sources": [
            "iucn-okapi"
        ]
    },
    "habitat": {
        "text": "Congo rainforests.",
        "sources": [
            "iucn-okapi"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-okapi"
        ]
    },
    "threats": [
        {
            "text": "Forest loss and hunting.",
            "sources": [
                "iucn-okapi"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Forest browsing herbivore.",
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
            "title": "IUCN Red List search for Okapia johnstoni",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Okapia%20johnstoni",
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
        "src": null,
        "alt": "Pygmy Hippopotamus photo placeholder"
    },
    "description": {
        "text": "Pygmy Hippopotamus is associated with west african swamp forests.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "habitat": {
        "text": "West African swamp forests.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "range": {
        "text": "Consult the IUCN Red List species assessment for its latest mapped distribution.",
        "sources": [
            "iucn-pygmy-hippopotamus"
        ]
    },
    "threats": [
        {
            "text": "Forest loss and hunting.",
            "sources": [
                "iucn-pygmy-hippopotamus"
            ]
        }
    ],
    "ecologicalImportance": {
        "text": "Wetland herbivore.",
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
            "title": "IUCN Red List search for Choeropsis liberiensis",
            "publisher": "IUCN Red List",
            "url": "https://www.iucnredlist.org/search?query=Choeropsis%20liberiensis",
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
