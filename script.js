let menuBtn = document.querySelector('.button-menu');
let closeMenu = document.querySelector('.close-nav');
let nav = document.querySelector("nav");
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
    menu.classList.add("list-desplegable");
    menu.classList.toggle("list-navigator"); 
    desplegable.style.display = "block";
    // noDesplegable.style.display = "none";
    // menuBtn.style.display = "none";
});

// cerrar menú
closeMenu.addEventListener("click", () => {
    desplegable.style.display = "none";
    noDesplegable.style.display = "block";
    menuBtn.style.display = "block";
    // menu.classList.remove("list-desplegable", "list-navigator");
});

