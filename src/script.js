let buttonMenu = document.querySelector('.button-menu');
let iconMenu = document.getElementById('icon-menu');

buttonMenu.addEventListener('click', function () {
    if (iconMenu.className = "fa-solid fa-bars fa-xl") {
        iconMenu.className = "fa-solid fa-arrow-right"
    } else {
        iconMenu.className = "fa-solid fa-bars fa-xl"
    }
})

