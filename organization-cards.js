// Display Pittsburgh organizations on the homepage


function createOrganizationCard(organization) {
    const card = document.createElement("div");
    card.className = "organization-card";

    const title = document.createElement("h3");
    title.textContent = organization.name;
    card.appendChild(title);

    // Organization category
    const category = document.createElement("span");
    category.className = "organization-category";

    const categoryNames = {
        wildlife_rehabilitation: "Wildlife Rehabilitation",
        animal_shelter: "Animal Shelter",
        municipal_animal_services: "Animal Services",
        conservation_education: "Conservation Education",
        habitat_conservation: "Habitat Conservation"
    };

    category.textContent = categoryNames[organization.category] || organization.category;
    card.appendChild(category);

    // Description
    const description = document.createElement("p");
    description.textContent = organization.description;
    card.appendChild(description);

    // Address
    if (organization.address) {
        const address = document.createElement("p");
        address.className = "organization-address";
        address.textContent = "Address: " + organization.address + ", " +
            organization.city + ", " + organization.state + " " + organization.zip;
        card.appendChild(address);
    }

    // Phone
    if (organization.phone) {
        const phone = document.createElement("p");
        phone.className = "organization-phone";
        phone.textContent = "Phone: " + organization.phone;
        card.appendChild(phone);
    }

    // Visitor notes
    if (organization.visitor_notes) {
        const notes = document.createElement("p");
        notes.className = "organization-notes";
        notes.textContent = "Before You Visit: " + organization.visitor_notes;
        card.appendChild(notes);
    }

    // Website
    const link = document.createElement("a");
    link.href = organization.website;
    link.textContent = "Visit Website";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    card.appendChild(link);

    return card;
}


function renderOrganizationCards(organizations, container) {
    container.innerHTML = "";

    if (organizations.length === 0) {
        const message = document.createElement("p");
        message.className = "organization-empty";
        message.textContent = "No organizations match your search.";
        container.appendChild(message);
        return;
    }

    organizations.forEach(function (organization) {
        const card = createOrganizationCard(organization);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("organization-grid");
    const searchInput = document.getElementById("organization-search");
    const categoryFilter = document.getElementById("organization-category");
    const resetButton = document.getElementById("reset-organization-filters");

    if (container && typeof ORGANIZATIONS !== "undefined") {

        function updateOrganizationCards() {
            const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";
            const selectedCategory = categoryFilter ? categoryFilter.value : "all";

            const filteredOrganizations = ORGANIZATIONS.filter(function (organization) {
                const matchesName = organization.name.toLowerCase().includes(keyword);

                const matchesServices = organization.services.some(function (service) {
                    return service.toLowerCase().includes(keyword);
                });

                const matchesCategory = selectedCategory === "all" ||
                    organization.category === selectedCategory;

                return (matchesName || matchesServices) && matchesCategory;
            });

            renderOrganizationCards(filteredOrganizations, container);
        }

        updateOrganizationCards();

        if (searchInput) {
            searchInput.addEventListener("input", updateOrganizationCards);
        }

        if (categoryFilter) {
            categoryFilter.addEventListener("change", updateOrganizationCards);
        }

        if (resetButton) {
            resetButton.addEventListener("click", function () {
                if (searchInput) {
                    searchInput.value = "";
                }

                if (categoryFilter) {
                    categoryFilter.value = "all";
                }

                updateOrganizationCards();
            });
        }
    }
});