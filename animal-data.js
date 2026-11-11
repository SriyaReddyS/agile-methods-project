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
        ecologicalImportance: { text: "As a large predator, the Amur leopard influences prey populations and supports the balance of temperate forest food webs.", sources: ["wcs-amur-leopard"] },
        conservationMethods: [
            { text: "Support habitat protection and wildlife corridors in northeast Asia.", sources: ["wcs-amur-leopard"] },
            { text: "Support anti-poaching efforts and the recovery of wild prey populations.", sources: ["wcs-amur-leopard"] },
            { text: "Learn about monitoring and disease prevention for small leopard populations.", sources: ["wcs-amur-leopard"] }
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
        ecologicalImportance: { text: "By feeding on reef sponges, hawksbill turtles influence sponge communities and contribute to coral reef ecology.", sources: ["noaa-hawksbill"] },
        conservationMethods: [
            { text: "Never buy tortoiseshell or products made from sea turtles.", sources: ["noaa-hawksbill"] },
            { text: "Reduce plastic waste and support turtle-safe fishing practices.", sources: ["noaa-hawksbill"] },
            { text: "Support protection of coral reefs and nesting beaches.", sources: ["noaa-hawksbill"] }
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
            sources: ["apes-atlas-orangutan"]
        },
        range: {
            text: "Endemic to Sumatra, Indonesia, mainly in the north of the island. The Leuser Ecosystem holds about 95% of wild Sumatran orangutans. The species also occurs in protected areas such as Bukit Tigapuluh National Park.",
            sources: ["apes-atlas-orangutan"]
        },
        threats: [
            { text: "Habitat loss and fragmentation from oil-palm plantations and logging", sources: ["apes-atlas-orangutan"] },
            { text: "New roads that split up forests and give poachers access", sources: ["apes-atlas-orangutan"] },
            { text: "Illegal pet trade and deliberate killing", sources: ["apes-atlas-orangutan"] },
            { text: "Conflict with people, such as crop raiding", sources: ["apes-atlas-orangutan"] },
            { text: "Land-use planning that opens habitat to plantations, timber, and mining", sources: ["apes-atlas-orangutan"] }
        ],
        ecologicalImportance: { text: "Sumatran orangutans disperse seeds from the fruit they eat, supporting forest regeneration.", sources: ["apes-atlas-orangutan"] },
        conservationMethods: [
            { text: "Choose products with credible deforestation-free sourcing.", sources: ["apes-atlas-orangutan"] },
            { text: "Support protection and restoration of Sumatran forest habitat.", sources: ["apes-atlas-orangutan"] },
            { text: "Avoid the illegal wildlife pet trade.", sources: ["apes-atlas-orangutan"] }
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
            "src": null,
            "alt": "African Forest Elephant in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "Central and West African tropical forests This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Vaquita in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A rare porpoise restricted to Mexico's Gulf of California This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Javan Rhino in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A rare one-horned rhinoceros surviving in one Indonesian national park This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Sumatran Rhino in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "The smallest living rhinoceros, with two horns and a hairy coat This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Saola in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "An elusive forest-dwelling bovine sometimes called the Asian unicorn This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Philippine Eagle in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A large forest eagle endemic to the Philippines This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Sunda Pangolin in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A nocturnal, scale-covered mammal that feeds on ants and termites This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Cross River Gorilla in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A rare western gorilla subspecies in the Nigeria-Cameroon border region This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Red Panda in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A tree-dwelling mammal adapted to cool Himalayan forests This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Tiger in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "The largest wild cat and a major predator in Asian ecosystems This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Asian Elephant in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A large social herbivore that travels through Asian forests and grasslands This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Blue Whale in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "The largest known animal, a baleen whale that feeds mainly on krill This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Whale Shark in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "The world's largest fish, a gentle filter-feeding shark This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Kemp's Ridley Sea Turtle in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A small sea turtle known for mass nesting events called arribadas This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Snow Leopard in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A mountain cat adapted to cold, steep landscapes This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Giant Panda in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A bamboo-eating bear native to China's mountain forests This profile summarizes key conservation information and links to a specialist source.",
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
            "src": null,
            "alt": "Polar Bear in its natural habitat; licensed photograph pending verification",
            "credit": null,
            "license": null,
            "licenseUrl": null,
            "sourceUrl": null
        },
        "description": {
            "text": "A large Arctic marine mammal that relies on sea ice to hunt seals This profile summarizes key conservation information and links to a specialist source.",
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
