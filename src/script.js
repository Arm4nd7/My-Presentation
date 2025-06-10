let menuBtn = document.querySelector('.button-menu');
let closeMenu = document.querySelector('.close-nav');
let nav = document.querySelector("nav");
let menu = document.querySelector("ul");
let list = document.querySelectorAll("li");

function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add("active");
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

menuBtn.addEventListener("click", () => {
    if(menu.className == "list-navigator"){
        menu.className = "list-desplegable";
    }else{
        menuBtn.className = "list-navigator";
    }
});

// closeMenu.addEventListener("click", () => {
//     if(menu.className == "drop-list-menu"){
//         menu.className = "list-navigator";
//     }
// });

