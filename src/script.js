let buttonMenu = document.querySelector('.button-menu');
let iconMenu = document.getElementById('icon-menu');
let menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', function () {
    if (iconMenu.className == "fa-solid fa-bars fa-xl") {
        iconMenu.className = "fa-solid fa-arrow-right"
        menu.style.display = "flex"
    } else {
        iconMenu.className = "fa-solid fa-bars fa-xl"
        menu.style.display = "none"
    }
})

