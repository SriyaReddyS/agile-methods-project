/* ==================================
   Wildlife Guardian
   Animal Cards
   ----------------------------------
   Builds one card per record in ANIMALS
   (animal-data.js). Adding a species
   only needs a new data record.

   Used by animals.html:
     <div data-animal-cards></div>
================================== */

// Small helper: element with optional class and text.
function createCardElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}

// Photo, or a labelled placeholder if there is no usable photo.
function createAnimalCardMedia(animal) {
    const image = animal.image || {};
    const altText = image.alt || animal.commonName;

    function createPlaceholder() {
        const placeholder = createCardElement(
            "div",
            "animal-card-placeholder",
            "Photo coming soon"
        );

        placeholder.setAttribute("role", "img");
        placeholder.setAttribute("aria-label", altText + " (photo coming soon)");

        return placeholder;
    }

    if (!image.src) {
        return createPlaceholder();
    }

    const img = document.createElement("img");

    img.src = image.src;
    img.alt = altText;
    img.loading = "lazy";

    // Swap in the placeholder if the file is missing or fails to load.
    img.addEventListener("error", function () {
        img.replaceWith(createPlaceholder());
    });

    return img;
}

// "Photo: <credit> (<license>)" with links. Required by CC licences.
function createAnimalCardCredit(image) {
    const credit = createCardElement("p", "animal-card-credit", "Photo: ");

    function appendLinkOrText(text, url) {
        if (url) {
            const link = createCardElement("a", null, text);
            link.href = url;
            credit.appendChild(link);
        } else {
            credit.appendChild(document.createTextNode(text));
        }
    }

    appendLinkOrText(image.credit || "Unknown", image.sourceUrl);

    if (image.license) {
        credit.appendChild(document.createTextNode(" ("));
        appendLinkOrText(image.license, image.licenseUrl);
        credit.appendChild(document.createTextNode(")"));
    }

    return credit;
}

// Return a DOM element representing one animal.
function createAnimalCard(animal) {
    const card = createCardElement("article", "animal-card");
    const content = createCardElement("div", "card-content");
    const status = animal.status || {};

    card.appendChild(createAnimalCardMedia(animal));

    content.appendChild(createCardElement("h3", null, animal.commonName));
    content.appendChild(
        createCardElement("p", "animal-card-scientific", animal.scientificName)
    );

    if (status.label) {
        content.appendChild(createCardElement("span", "status", status.label));
    }

    if (animal.description && animal.description.text) {
        content.appendChild(
            createCardElement("p", "animal-card-description", animal.description.text)
        );
    }

    // "Learn More" plus hidden species name, so screen readers
    // hear "Learn More about Amur Leopard" in a list of links.
    const link = createCardElement("a", "animal-card-link", "Learn More");
    link.href = getAnimalProfileUrl(animal);
    link.appendChild(
        createCardElement("span", "visually-hidden", " about " + animal.commonName)
    );
    content.appendChild(link);

    if (animal.image && animal.image.src && (animal.image.credit || animal.image.license)) {
        content.appendChild(createAnimalCardCredit(animal.image));
    }

    card.appendChild(content);

    return card;
}

// Render cards into the target container.
function renderAnimalCards(animals, container) {
    if (!container) {
        return;
    }

    if (!Array.isArray(animals) || animals.length === 0) {
        container.replaceChildren(
            createCardElement("p", "animal-cards-message", "No animals to show yet.")
        );
        return;
    }

    container.replaceChildren(...animals.map(createAnimalCard));
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("[data-animal-cards]");
    const searchInput = document.getElementById("animal-search-input");
    const clearButton = document.getElementById("clear-animal-search");
    const statusFilter = document.getElementById("status-filter");
    const habitatFilter = document.getElementById("habitat-filter");
    const resetButton = document.getElementById("reset-filters");

    if (container && typeof ANIMALS !== "undefined") {

        function updateAnimalCards() {
            const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";
            const selectedStatus = statusFilter ? statusFilter.value : "all";
            const selectedHabitat = habitatFilter ? habitatFilter.value : "all";

            const filteredAnimals = ANIMALS.filter(function (animal) {
                const matchesName = animal.commonName.toLowerCase().includes(keyword);

                const matchesStatus = selectedStatus === "all" ||
                    (animal.status && animal.status.label === selectedStatus);

                const habitatText = animal.habitat.text.toLowerCase();

                let matchesHabitat = selectedHabitat === "all";

                if (selectedHabitat === "temperate") {
                    matchesHabitat = habitatText.includes("temperate");
                } else if (selectedHabitat === "marine") {
                    matchesHabitat = habitatText.includes("coral reefs");
                } else if (selectedHabitat === "tropical") {
                    matchesHabitat = habitatText.includes("tropical");
                }

                return matchesName && matchesStatus && matchesHabitat;
            });

            renderAnimalCards(filteredAnimals, container);
        }

        updateAnimalCards();

        if (searchInput) {
            searchInput.addEventListener("input", updateAnimalCards);
        }

        if (statusFilter) {
            statusFilter.addEventListener("change", updateAnimalCards);
        }

        if (habitatFilter) {
            habitatFilter.addEventListener("change", updateAnimalCards);
        }

        if (clearButton && searchInput) {
            clearButton.addEventListener("click", function () {
                searchInput.value = "";
                updateAnimalCards();
            });
        }

        if (resetButton) {
            resetButton.addEventListener("click", function () {
                if (searchInput) {
                    searchInput.value = "";
                }

                if (statusFilter) {
                    statusFilter.value = "all";
                }

                if (habitatFilter) {
                    habitatFilter.value = "all";
                }

                updateAnimalCards();
            });
        }
    }
});