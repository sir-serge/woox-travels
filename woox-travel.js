// let tools=document.getElementById('tools')
// console.log(window.innerWidth)
// if(window.innerWidth<=window.innerWidth/2){
//     tools.style.display="none";
//     console.log(window.innerWidth)
// }
let menuchange = document.getElementById("hamberger-menu");
let close_menu = document.getElementById('hamberger_menu-close');
let tabs = document.getElementById('tabs');


function menu() {
    if (menuchange.style.display !== "none") {
        menuchange.style.display = "none";
        close_menu.style.display = "block";
        tabs.style.display = "flex";

    } else {
        menuchange.style.display = "block";
        close_menu.style.display = "none";
        tabs.style.display = "none";

    }
}
menuchange.addEventListener("click", menu);
close_menu.addEventListener("click", menu);

