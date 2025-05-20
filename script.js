let menuBtn = document.querySelector('.button-menu');
let closeMenu = document.querySelector('.close-nav');
let menu = document.querySelector("ul");
let list = document.querySelectorAll("li");

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

function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add("active");
}
list.forEach((item) =>
item.addEventListener('click', activeLink));
