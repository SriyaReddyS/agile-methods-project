
/* ==================================
   Wildlife Guardian
   Animal Detail Page
   ----------------------------------
   Renders one species profile into
   #animal-profile on animal.html.
   The species comes from the URL:
   animal.html?id=amur-leopard
   Data lives in animal-data.js.
================================== */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("animal-profile");

    if (!container) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const animalId = params.get("id");
    const animal = animalId ? getAnimalById(animalId) : undefined;

    if (animal) {
        renderAnimalProfile(animal, container);
    } else {
        renderProfileNotFound(animalId, container);
    }

});

/* ==================================
   DOM helpers
================================== */

// Create an element with an optional class and text content.
function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}

// Superscript links such as [1][2] that point to the Sources list.
function createCitations(sourceIds, sourceNumbers, sourceLookup) {
    const fragment = document.createDocumentFragment();

    const sortedIds = (sourceIds || []).slice().sort(function (a, b) {
        return (sourceNumbers[a] || 0) - (sourceNumbers[b] || 0);
    });

    sortedIds.forEach(function (sourceId) {
        const number = sourceNumbers[sourceId];
        const source = sourceLookup[sourceId];

        if (!number || !source) {
            return;
        }

        const sup = createTextElement("sup", "citation");
        const link = createTextElement("a", null, "[" + number + "]");

        link.href = "#source-" + sourceId;
        link.setAttribute(
            "aria-label",
            "Source " + number + ": " + source.publisher
        );

        sup.appendChild(link);
        fragment.appendChild(sup);
    });

    return fragment;
}

// Paragraph of text followed by its citations.
function createCitedParagraph(fact, className, citationTools) {
    const paragraph = createTextElement("p", className, fact.text);

    paragraph.appendChild(
        createCitations(fact.sources, citationTools.numbers, citationTools.lookup)
    );

    return paragraph;
}

// Section with a heading linked by aria-labelledby.
function createSection(animalId, key, headingText) {
    const section = createTextElement("section", "profile-section profile-" + key);
    const headingId = animalId + "-" + key + "-heading";
    const heading = createTextElement("h2", null, headingText);

    heading.id = headingId;
    section.setAttribute("aria-labelledby", headingId);
    section.appendChild(heading);

    return section;
}

/* ==================================
   Profile parts
================================== */

// Photo, or a labelled placeholder when no licensed photo exists yet.
function createAnimalMedia(animal) {
    const figure = createTextElement("figure", "profile-media");
    const image = animal.image || {};

    function createPlaceholder() {
        const placeholder = createTextElement("div", "profile-photo-placeholder");

        placeholder.setAttribute("role", "img");
        placeholder.setAttribute(
            "aria-label",
            (image.alt || animal.commonName) + " (photo coming soon)"
        );
        placeholder.appendChild(
            createTextElement("span", null, "Photo coming soon")
        );

        return placeholder;
    }

    if (image.src) {
        const img = document.createElement("img");

        img.className = "profile-photo";
        img.src = image.src;
        img.alt = image.alt || animal.commonName;

        // Swap in the placeholder if the file is missing or fails to load.
        img.addEventListener("error", function () {
            img.replaceWith(createPlaceholder());

            const caption = figure.querySelector("figcaption");
            if (caption) {
                caption.remove();
            }
        });

        figure.appendChild(img);

        if (image.credit || image.license) {
            figure.appendChild(createImageCredit(image));
        }
    } else {
        figure.appendChild(createPlaceholder());
    }

    return figure;
}

// Text, or a link when a URL is available.
function createOptionalLink(text, url) {
    if (!url) {
        return document.createTextNode(text);
    }

    const link = createTextElement("a", null, text);
    link.href = url;

    return link;
}

// "Photo: <credit> (source link). License: <license link>"
function createImageCredit(image) {
    const caption = createTextElement("figcaption", "profile-photo-credit");

    if (image.credit) {
        caption.appendChild(document.createTextNode("Photo: "));
        caption.appendChild(createOptionalLink(image.credit, image.sourceUrl));
        caption.appendChild(document.createTextNode(". "));
    }

    if (image.license) {
        caption.appendChild(document.createTextNode("License: "));
        caption.appendChild(createOptionalLink(image.license, image.licenseUrl));
        caption.appendChild(document.createTextNode("."));
    }

    return caption;
}

function createStatusBadge(status, citationTools) {
    const wrapper = createTextElement("div", "profile-status");
    const badge = createTextElement(
        "p",
        "status-badge status-" + status.code.toLowerCase()
    );

    badge.appendChild(createTextElement("span", "status-code", status.code));
    badge.appendChild(document.createTextNode(" " + status.label));

    wrapper.appendChild(
        createTextElement("p", "status-authority", status.authority + " status")
    );
    wrapper.appendChild(badge);

    const detail = createTextElement("p", "status-note", status.note || "Status sources:");
    detail.appendChild(
        createCitations(status.sources, citationTools.numbers, citationTools.lookup)
    );
    wrapper.appendChild(detail);

    return wrapper;
}

function createSourceList(animal) {
    const section = createSection(animal.id, "sources", "Sources");
    const list = createTextElement("ol", "source-list");

    animal.sources.forEach(function (source) {
        const item = document.createElement("li");
        const link = createTextElement("a", null, source.title);
        const details = [source.publisher];

        item.id = "source-" + source.id;
        link.href = source.url;

        if (source.updated) {
            details.push("updated " + source.updated);
        }

        if (source.accessed) {
            details.push("accessed " + source.accessed);
        }

        item.appendChild(link);
        item.appendChild(document.createTextNode(". " + details.join(", ") + "."));
        list.appendChild(item);
    });

    section.appendChild(list);

    return section;
}

/* ==================================
   Page renderers
================================== */

function renderAnimalProfile(animal, container) {

    // Number sources in the order they are listed in the data.
    const citationTools = { numbers: {}, lookup: {} };

    animal.sources.forEach(function (source, index) {
        citationTools.numbers[source.id] = index + 1;
        citationTools.lookup[source.id] = source;
    });

    document.title = animal.commonName + " | Wildlife Guardian";

    const article = createTextElement("article", "profile");

    // Breadcrumb back to the directory
    const breadcrumb = createTextElement("nav", "breadcrumb");
    const backLink = createTextElement("a", null, "Explore Animals");

    breadcrumb.setAttribute("aria-label", "Breadcrumb");
    backLink.href = "animals.html";
    breadcrumb.appendChild(backLink);
    breadcrumb.appendChild(
        createTextElement("span", "breadcrumb-current", animal.commonName)
    );
    article.appendChild(breadcrumb);

    // Photo, names, status, description
    const header = createTextElement("header", "profile-header");
    const intro = createTextElement("div", "profile-intro");
    const scientific = createTextElement("p", "scientific-name");
    const latinName = createTextElement("i", null, animal.scientificName);

    latinName.setAttribute("lang", "la");
    scientific.appendChild(latinName);

    intro.appendChild(createTextElement("h1", null, animal.commonName));
    intro.appendChild(scientific);
    intro.appendChild(createStatusBadge(animal.status, citationTools));
    intro.appendChild(
        createCitedParagraph(animal.description, "profile-description", citationTools)
    );

    header.appendChild(createAnimalMedia(animal));
    header.appendChild(intro);
    article.appendChild(header);

    // Habitat and geographic range
    const factsGrid = createTextElement("div", "profile-facts");
    const habitat = createSection(animal.id, "habitat", "Habitat");
    const range = createSection(animal.id, "range", "Geographic Range");

    habitat.appendChild(createCitedParagraph(animal.habitat, null, citationTools));
    range.appendChild(createCitedParagraph(animal.range, null, citationTools));
    factsGrid.appendChild(habitat);
    factsGrid.appendChild(range);
    article.appendChild(factsGrid);

    // Major threats
    const threats = createSection(animal.id, "threats", "Conservation Challenges");
    const threatList = createTextElement("ul", "threat-list");

    animal.threats.forEach(function (threat) {
        const item = createTextElement("li", null, threat.text);
        item.appendChild(
            createCitations(threat.sources, citationTools.numbers, citationTools.lookup)
        );
        threatList.appendChild(item);
    });

    threats.appendChild(threatList);
    article.appendChild(threats);

    // Ecological role and practical conservation actions
    if (animal.ecologicalImportance) {
        const ecology = createSection(animal.id, "ecology", "Ecological Importance");
        ecology.appendChild(createCitedParagraph(animal.ecologicalImportance, null, citationTools));
        article.appendChild(ecology);
    }

    if (animal.conservationMethods && animal.conservationMethods.length) {
        const conservation = createSection(animal.id, "conservation", "Methods to Help Protect");
        const methodsList = createTextElement("ul", "conservation-list");
        animal.conservationMethods.forEach(function (method) {
            const item = createTextElement("li", null, method.text);
            item.appendChild(createCitations(method.sources, citationTools.numbers, citationTools.lookup));
            methodsList.appendChild(item);
        });
        conservation.appendChild(methodsList);
        article.appendChild(conservation);
    }

    // Population (optional, always dated)
    if (animal.population) {
        const population = createSection(animal.id, "population", "Population Estimate");

        population.appendChild(
            createTextElement(
                "p",
                "population-date",
                "Estimate as of " + animal.population.asOf +
                ". Population figures change; check the sources for newer data."
            )
        );
        population.appendChild(
            createCitedParagraph(animal.population, null, citationTools)
        );
        article.appendChild(population);
    }

    article.appendChild(createSourceList(animal));

    container.replaceChildren(article);
}

function renderProfileNotFound(animalId, container) {
    const section = createTextElement("section", "profile profile-not-found");

    document.title = "Animal Not Found | Wildlife Guardian";

    section.appendChild(createTextElement("h1", null, "Animal profile not found"));
    section.appendChild(
        createTextElement(
            "p",
            null,
            animalId
                ? "We don't have a profile for “" + animalId + "” yet."
                : "No animal was selected."
        )
    );
    section.appendChild(
        createTextElement("p", null, "Choose one of these profiles instead:")
    );

    const list = createTextElement("ul", "profile-choices");

    ANIMALS.forEach(function (animal) {
        const item = document.createElement("li");
        const link = createTextElement("a", null, animal.commonName);

        link.href = getAnimalProfileUrl(animal);
        item.appendChild(link);
        list.appendChild(item);
    });

    section.appendChild(list);
    container.replaceChildren(section);
}
