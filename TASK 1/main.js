const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_link");

menuBtn.onclick = function () {
    navLinks.classList.toggle("open");
};
