const btnAbrirMenu = document.querySelector(".btn-abrir-menu");
const btnFecharMenu = document.querySelector(".btn-fechar");
const menuMobile = document.querySelector(".menu-mobile");
const overlayMenu = document.querySelector(".overlay-menu");
const menuItems = document.querySelectorAll(".menu-mobile nav ul li a");

btnAbrirMenu.addEventListener("click", function () {
    menuMobile.classList.add("abrir-menu");
    overlayMenu.style.display = "block";
});

btnFecharMenu.addEventListener("click", function () {
    menuMobile.classList.remove("abrir-menu");
    overlayMenu.style.display = "none";
});

overlayMenu.addEventListener("click", function () {
    menuMobile.classList.remove("abrir-menu");
    overlayMenu.style.display = "none";
});

menuItems.forEach(item => {
    item.addEventListener("click", function() {
        menuMobile.classList.remove("abrir-menu");
        overlayMenu.style.display = "none";
    });
});
