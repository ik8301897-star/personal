let menuIcon = document.querySelector(".hamburger-btn");
let navBar = document.querySelector("nav");

menuIcon.addEventListener("click",function(){
    navBar.classList.toggle("active")
})