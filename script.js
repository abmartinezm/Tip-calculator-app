//mobile toggle
const bars = document.getElementById("bars_icon");
const close = document.getElementById("close_icon");
const mobileNav = document.getElementById("nav_menu");

//mobile sublist
let menuItems = document.querySelectorAll(".link_title");
let subMenu = document.getElementsByClassName("nav_menu_sublist");
let mArrow = document.getElementsByClassName("mobile_arrow");

//destop arrows
let dArrow = document.getElementsByClassName("desktop_arrow");


bars.addEventListener("click", function(e){
    bars.classList.add("hide");
    mobileNav.classList.add("active");
    close.classList.remove("hide");
});

close.addEventListener("click", function(e){
    bars.classList.remove("hide");
    mobileNav.classList.remove("active");
    close.classList.add("hide");

});

//using index of array to work toggle of subMenu
menuItems.forEach((item, index) =>{
    item.addEventListener("click", function(e){
        subMenu[index].classList.toggle("hide");
        mArrow[index].classList.toggle("arrow_turn");
        dArrow[index].classList.toggle("arrow_turn");
        
    })
})