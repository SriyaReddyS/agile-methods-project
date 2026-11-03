
/* ==================================
   Wildlife Guardian
   Mobile Navigation
================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Select menu elements
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Stop if elements do not exist
    if (!menuButton || !navLinks) {
        return;
    }

    // Open or close mobile menu
    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a link
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });

    // Close menu when switching to desktop view
    const desktopView = window.matchMedia("(min-width: 651px)");

    function resetMenu(event) {
        if (event.matches) {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        }
    }

    desktopView.addEventListener("change", resetMenu);

});
