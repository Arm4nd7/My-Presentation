let menuBtn = document.querySelector('.button-menu');
let closeMenu = document.querySelector('.close-nav');
let fondoBlanco = document.querySelector(".logo-bienvenida-nav");
let menu = document.querySelector("ul");
let desplegable = document.querySelector(".lista-menu-desplegable");
let noDesplegable = document.querySelector(".noDesplegable");
let list = document.querySelectorAll("li");

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add("active");
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

menuBtn.addEventListener("click", () => {
    if (menu.classList.toggle("list-navigator")) {
        closeMenu.className = "button-menu";
        menu.classList.add("list-desplegable");
    }
    desplegable.style.display = "grid";
    menuBtn.style.display = "none";

});

// cerrar menú
closeMenu.addEventListener("click", () => {
    desplegable.style.display = "none";
    menuBtn.style.display = "block";
    menu.classList.toggle("list-navigator")
    menu.classList.remove("list-desplegable");
    // fondoBlanco.style.display = "flex";
});

