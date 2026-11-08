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
        ecologicalImportance: { text: "As a large predator, the Amur leopard helps shape prey populations and is part of the balance of temperate forest food webs.", sources: ["wcs-amur-leopard"] },
        conservationMethods: [
            { text: "Support habitat protection and wildlife corridors in the Russian Far East and Northeast China.", sources: ["wcs-amur-leopard"] },
            { text: "Support efforts to protect natural prey populations and reduce poaching.", sources: ["wcs-amur-leopard"] },
            { text: "Learn about conservation programs that monitor leopard populations and disease risks.", sources: ["wcs-amur-leopard"] }
        ],
        population: {
            text: "About 84 adults and subadults were estimated in 2014–2015 (published 2018). Surveys on both sides of the border suggest numbers are rising, but no newer total has been verified for this site.",
            asOf: "2014–2015",
            sources: ["wcs-amur-leopard"]
        },
        localActions: [
            {
                "title": "Learn about global wildlife protection locally",
                "text": "Explore conservation education and everyday wildlife-friendly choices through Pittsburgh Zoo & Aquarium. This is a general way to support conservation awareness, not an Amur leopard-specific local program.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-conservation"
                ]
            },
            {
                "title": "Care for Pittsburgh's green spaces",
                "text": "Look for local habitat stewardship and cleanup opportunities through Pittsburgh Parks Conservancy. These activities benefit Pittsburgh ecosystems rather than the leopard's overseas habitat.",
                "url": "https://pittsburghparks.org/",
                "label": "Pittsburgh Parks Conservancy",
                "sources": [
                    "pgh-parks"
                ]
            }
        ],
        sources: [
            {"id":"pgh-zoo-conservation","title":"Conservation","publisher":"Pittsburgh Zoo & Aquarium","url":"https://www.pittsburghzoo.org/conservation/","accessed":"2026-11-06"},
            {"id":"pgh-parks","title":"Pittsburgh Parks Conservancy","publisher":"Pittsburgh Parks Conservancy","url":"https://pittsburghparks.org/","accessed":"2026-11-06"},
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
        ecologicalImportance: { text: "Hawksbill turtles eat sponges on coral reefs. Their feeding helps influence sponge communities and contributes to reef ecosystem dynamics.", sources: ["noaa-hawksbill", "fws-hawksbill"] },
        conservationMethods: [
            { text: "Never buy tortoiseshell jewelry or other products made from sea turtles.", sources: ["noaa-hawksbill", "fws-hawksbill"] },
            { text: "Reduce plastic waste and support responsible fishing practices that lower turtle bycatch.", sources: ["noaa-hawksbill"] },
            { text: "Support coral reef and nesting-beach protection, including turtle-friendly coastal lighting.", sources: ["noaa-hawksbill", "fws-hawksbill"] }
        ],
        population: null,
        localActions: [
            {
                "title": "Support sea turtle rehabilitation",
                "text": "Learn about Pittsburgh Zoo & Aquarium's Sea Turtle Second Chance program. It supports sea turtles generally, not specifically hawksbills.",
                "url": "https://www.pittsburghzoo.org/initiative/sea-turtles/",
                "label": "Sea Turtle Second Chance",
                "sources": [
                    "pgh-zoo-turtles"
                ]
            },
            {
                "title": "Volunteer for river cleanups",
                "text": "Join Allegheny CleanWays to reduce litter in Pittsburgh waterways. This helps local rivers, not directly hawksbill habitats.",
                "url": "https://www.alleghenycleanways.org/getinvolved.html",
                "label": "Allegheny CleanWays",
                "sources": [
                    "pgh-cleanways"
                ]
            }
        ],
        sources: [
            {"id":"pgh-zoo-turtles","title":"Sea Turtle Conservation","publisher":"Pittsburgh Zoo & Aquarium","url":"https://www.pittsburghzoo.org/initiative/sea-turtles/","accessed":"2026-11-06"},
            {"id":"pgh-cleanways","title":"Get Involved","publisher":"Allegheny CleanWays","url":"https://www.alleghenycleanways.org/getinvolved.html","accessed":"2026-11-06"},
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
        ecologicalImportance: { text: "Sumatran orangutans help tropical forests regenerate by moving through the canopy and dispersing seeds from the fruit they eat.", sources: ["apes-atlas-orangutan"] },
        conservationMethods: [
            { text: "Choose products from companies with credible deforestation-free sourcing commitments.", sources: ["apes-atlas-orangutan"] },
            { text: "Support organizations protecting Sumatran forests and restoring fragmented habitats.", sources: ["apes-atlas-orangutan"] },
            { text: "Avoid wildlife-pet trade and support responsible protection of wild orangutans.", sources: ["apes-atlas-orangutan"] }
        ],
        population: {
            text: "About 13,846 individuals were estimated in 2016 (Wich et al. 2016). This was higher than an earlier estimate of about 6,600 because of better survey methods, not population growth. The IUCN assessment (Singleton et al. 2023) reports that overall numbers continue to decline.",
            asOf: "2016",
            sources: ["apes-atlas-orangutan"]
        },
        localActions: [
            {
                "title": "Make rainforest-conscious purchasing choices",
                "text": "Use Pittsburgh Zoo & Aquarium conservation guidance to consider palm oil and rainforest impacts when shopping locally.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo conservation actions",
                "sources": [
                    "pgh-zoo-conservation"
                ]
            },
            {
                "title": "Explore local conservation education",
                "text": "Explore Pittsburgh Zoo & Aquarium conservation programs and share what you learn about habitat loss. This indirectly supports awareness of threatened wildlife.",
                "url": "https://www.pittsburghzoo.org/conservation/",
                "label": "Pittsburgh Zoo & Aquarium",
                "sources": [
                    "pgh-zoo-conservation"
                ]
            }
        ],
        sources: [
            {"id":"pgh-zoo-conservation","title":"Conservation","publisher":"Pittsburgh Zoo & Aquarium","url":"https://www.pittsburghzoo.org/conservation/","accessed":"2026-11-06"},
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
