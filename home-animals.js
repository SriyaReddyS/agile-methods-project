/* Homepage cards are generated from the same verified data objects as the directory. */
document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("[data-home-animals]");
    if (!target || typeof ANIMALS === "undefined") return;
    const featuredIds = [
        "amur-leopard", "sumatran-orangutan", "hawksbill-sea-turtle",
        "red-panda", "blue-whale", "snow-leopard"
    ];
    const featured = featuredIds.map(getAnimalById).filter(Boolean);
    target.replaceChildren();
    featured.forEach(function (animal) {
        const card = document.createElement("article");
        card.className = "animal-card home-species-card";
        const link = document.createElement("a");
        link.href = getAnimalProfileUrl(animal);
        link.className = "home-species-link";
        const media = document.createElement("div");
        media.className = "home-species-media";
        if (animal.image && animal.image.src) {
            const img = document.createElement("img");
            img.src = animal.image.src;
            img.alt = animal.image.alt || animal.commonName;
            img.loading = "lazy";
            img.addEventListener("error", function () {
                const placeholder = document.createElement("span");
                placeholder.className = "home-photo-placeholder";
                placeholder.textContent = "Photo coming soon";
                media.replaceChildren(placeholder);
            });
            media.appendChild(img);
        } else {
            const placeholder = document.createElement("span");
            placeholder.className = "home-photo-placeholder";
            placeholder.textContent = "Photo coming soon";
            media.appendChild(placeholder);
        }
        const body = document.createElement("div");
        body.className = "card-content";
        const title = document.createElement("h3");
        title.textContent = animal.commonName;
        const scientific = document.createElement("p");
        scientific.className = "animal-card-scientific";
        scientific.textContent = animal.scientificName;
        const status = document.createElement("span");
        status.className = "status";
        status.textContent = animal.status.label;
        const explore = document.createElement("span");
        explore.className = "home-species-explore";
        explore.textContent = "View profile →";
        body.append(title, scientific, status, explore);
        link.append(media, body);
        card.appendChild(link);
        if (animal.image && animal.image.src && animal.image.credit) {
            const credit = document.createElement("p");
            credit.className = "home-photo-credit";
            credit.append(animal.image.mediaType === "illustration" ? "Illustration: " : animal.image.mediaType === "historical" ? "Historical photo: " : "Photo: ");
            const author = document.createElement("a");
            author.href = animal.image.sourceUrl;
            author.textContent = animal.image.credit;
            author.target = "_blank";
            author.rel = "noopener noreferrer";
            credit.appendChild(author);
            if (animal.image.license && animal.image.licenseUrl) {
                credit.append(" · ");
                const license = document.createElement("a");
                license.href = animal.image.licenseUrl;
                license.textContent = animal.image.license;
                license.target = "_blank";
                license.rel = "noopener noreferrer";
                credit.appendChild(license);
            }
            card.appendChild(credit);
        }
        target.appendChild(card);
    });
});
