const menuButton  = document.querySelector(".mobile-menu-toggle");

const navMenu = document.querySelector(".menu-bar");

menuButton.addEventListener("click",function(){
    const isExpanded = menuButton.getAttribute("aria-expanded")==="true";

    menuButton.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("menu-open");
})