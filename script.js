document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle Dropdown Menu
    dropbtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuToggle.textContent = mobileMenu.classList.contains("active") ? "✕" : "☰";
        mobileMenu.style.display = mobileMenu.classList.contains("active") ? "flex" : "none";
    });
});
