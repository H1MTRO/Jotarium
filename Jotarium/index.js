const nav_bar = document.getElementById("hamburger_menu");
const menu = document.getElementById("nav_menu");

if (nav_bar) {
    nav_bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}