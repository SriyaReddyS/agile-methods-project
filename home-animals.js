/* Homepage featured cards reuse the shared card component (animal-cards.js)
 * and the same verified data objects as the directory. */
document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("[data-home-animals]");
    if (!target || typeof ANIMALS === "undefined" || typeof renderAnimalCards !== "function") return;
    const featuredIds = [
        "amur-leopard", "sumatran-orangutan", "hawksbill-sea-turtle",
        "red-panda", "blue-whale", "snow-leopard"
    ];
    renderAnimalCards(featuredIds.map(getAnimalById).filter(Boolean), target);
});
