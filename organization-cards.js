// Display Pittsburgh organizations on the homepage


function createOrganizationCard(organization, distance = null) {
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

    // Show distance when location search is active
    if (distance !== null) {
        const distanceText = document.createElement("p");
        distanceText.className = "organization-distance";
        distanceText.textContent = distance.toFixed(1) + " miles away";
        card.appendChild(distanceText);
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


function renderOrganizationCards(organizations, container, userLocation = null) {
    container.innerHTML = "";

    if (organizations.length === 0) {
        const message = document.createElement("p");
        message.className = "organization-empty";
        message.textContent = "No organizations match your search.";
        container.appendChild(message);
        return;
    }

    
    organizations.forEach(function (organization) {
        let distance = null;

        if (userLocation &&
            typeof organization.latitude === "number" &&
            typeof organization.longitude === "number") {

            distance = calculateDistance(
                userLocation.latitude,
                userLocation.longitude,
                organization.latitude,
                organization.longitude
            );
        }

        const card = createOrganizationCard(organization, distance);
        container.appendChild(card);
    });
}


function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Earth's radius in miles

    // Convert degrees to radians
    const toRadians = Math.PI / 180;

    const latDiff = (lat2 - lat1) * toRadians;
    const lonDiff = (lon2 - lon1) * toRadians;

    const a =
        Math.sin(latDiff / 2) ** 2 +
        Math.cos(lat1 * toRadians) *
        Math.cos(lat2 * toRadians) *
        Math.sin(lonDiff / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}


const ZIP_COORDINATES = {
    "15213": {
        latitude: 40.444042,
        longitude: -79.955249
    }
};

function getZipCoordinates(zipCode) {
    return ZIP_COORDINATES[zipCode] || null;
}



async function getZipCoordinatesOnline(zipCode) {
    // Check local data first
    const localCoordinates = getZipCoordinates(zipCode);

    if (localCoordinates) {
        return {
            status: "success",
            coordinates: localCoordinates
        };
    }

    try {
        const response = await fetch(
            "https://api.zippopotam.us/us/" + zipCode
        );

        // ZIP Code does not exist
        if (response.status === 404) {
            return { status: "not_found" };
        }

        // Other API errors
        if (!response.ok) {
            return { status: "network_error" };
        }

        const data = await response.json();
        const place = data.places && data.places[0];

        // Check if valid coordinates were returned
        if (!place) {
            return { status: "data_error" };
        }

        const coordinates = {
            latitude: Number(place.latitude),
            longitude: Number(place.longitude)
        };

        if (!Number.isFinite(coordinates.latitude) ||
            !Number.isFinite(coordinates.longitude) ||
            Math.abs(coordinates.latitude) > 90 ||
            Math.abs(coordinates.longitude) > 180) {
            return { status: "data_error" };
        }

        // Cache successful results
        ZIP_COORDINATES[zipCode] = coordinates;

        return {
            status: "success",
            coordinates: coordinates
        };

    } catch (error) {
        console.error("ZIP Code lookup failed:", error);
        return { status: "network_error" };
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("organization-grid");
    const searchInput = document.getElementById("organization-search");
    const categoryFilter = document.getElementById("organization-category");

    const zipInput = document.getElementById("organization-zip");
    const distanceFilter = document.getElementById("organization-distance");
    const resetButton = document.getElementById("reset-organization-filters");

    if (container && typeof ORGANIZATIONS !== "undefined") {
        let searchVersion = 0;
        async function updateOrganizationCards() {
            const currentVersion = ++searchVersion;
            const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";
            const selectedCategory = categoryFilter ? categoryFilter.value : "all";

            // New ZIP Code and Distance filters
            const zipCode = zipInput ? zipInput.value.trim() : "";
            const selectedDistance = distanceFilter ? distanceFilter.value : "all";

            let userLocation = null;
            let maxDistance = null;

 
            // Only use distance filtering when a radius is selected
            if (selectedDistance !== "all") {

                if (!/^\d{5}$/.test(zipCode)) {
                    container.innerHTML =
                        '<p class="organization-empty">Please enter a valid 5-digit ZIP Code.</p>';
                    return;
                }



                // Show loading message when API lookup is needed
                if (!getZipCoordinates(zipCode)) {
                    container.innerHTML =
                        '<p class="organization-empty">Finding nearby organizations...</p>';
                }

                // Look up ZIP Code
                const result = await getZipCoordinatesOnline(zipCode);

                // Ignore outdated searches
                if (currentVersion !== searchVersion) {
                    return;
                }

                // Handle lookup errors
                if (result.status !== "success") {
                    let errorMessage = "";

                    if (result.status === "not_found") {
                        errorMessage =
                            "ZIP Code not found. Please check and try again.";
                    } else if (result.status === "network_error") {
                        errorMessage =
                            "Unable to connect. Please try again later.";
                    } else {
                        errorMessage =
                            "Unable to retrieve location data. Please try again.";
                    }

                    container.innerHTML = "";

                    const message = document.createElement("p");
                    message.className = "organization-empty";
                    message.textContent = errorMessage;
                    container.appendChild(message);

                    return;
                }

                // Save coordinates for distance filtering
                userLocation = result.coordinates;

                maxDistance = Number(selectedDistance);
            }


            // Keep original keyword and category filtering
            let filteredOrganizations = ORGANIZATIONS.filter(function (organization) {
                const matchesName = organization.name.toLowerCase().includes(keyword);

                const matchesServices = organization.services.some(function (service) {
                    return service.toLowerCase().includes(keyword);
                });

                const matchesCategory = selectedCategory === "all" ||
                    organization.category === selectedCategory;

                return (matchesName || matchesServices) && matchesCategory;
            });

            // Filter by straight-line distance
            if (userLocation && maxDistance !== null) {
                filteredOrganizations = filteredOrganizations.filter(function (organization) {
                    if (typeof organization.latitude !== "number" ||
                        typeof organization.longitude !== "number") {
                        return false;
                    }

                    const distance = calculateDistance(
                        userLocation.latitude,
                        userLocation.longitude,
                        organization.latitude,
                        organization.longitude
                    );

                    return distance <= maxDistance;
                });

                // Sort organizations from nearest to farthest
                filteredOrganizations.sort(function (a, b) {
                    const distanceA = calculateDistance(
                        userLocation.latitude,
                        userLocation.longitude,
                        a.latitude,
                        a.longitude
                    );

                    const distanceB = calculateDistance(
                        userLocation.latitude,
                        userLocation.longitude,
                        b.latitude,
                        b.longitude
                    );

                    return distanceA - distanceB;
                });
            }

            renderOrganizationCards(filteredOrganizations, container, userLocation);
        }


        updateOrganizationCards();

        if (searchInput) {
            searchInput.addEventListener("input", updateOrganizationCards);
        }

        if (categoryFilter) {
            categoryFilter.addEventListener("change", updateOrganizationCards);
        }

        if (zipInput) {
            zipInput.addEventListener("input", updateOrganizationCards);
        }

        if (distanceFilter) {
            distanceFilter.addEventListener("change", updateOrganizationCards);
        }

        if (resetButton) {
            resetButton.addEventListener("click", function () {
                if (searchInput) {
                    searchInput.value = "";
                }

                if (categoryFilter) {
                    categoryFilter.value = "all";
                }

                if (zipInput) {
                    zipInput.value = "";
                }

                if (distanceFilter) {
                    distanceFilter.value = "all";
                }

                updateOrganizationCards();
            });
        }

    }
});