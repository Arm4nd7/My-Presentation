let menuBtn = document.querySelector('.button-menu');
let closeMenu = document.querySelector('.close-nav');
let menu = document.querySelector("ul");

menuBtn.addEventListener("click", () => {
    if(menu.className == "list-navigator"){
        menu.className = "drop-list-menu";
    }else{
        menu.className = "list-navigator";
    }
});
closeMenu.addEventListener("click", () => {
    if(menu.className == "drop-list-menu"){
        menu.className = "list-navigator";
    }
});