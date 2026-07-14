let menuIcon = document.querySelector(".hamburger-btn");
let navBar = document.querySelector("nav");
let para = document.querySelector(".para")
let header = document.querySelector("header")
let input = document.querySelector(".search-input")
let searchContainer = document.querySelector(".search-box")
menuIcon.addEventListener("click",function(){
    navBar.classList.toggle("active")
  
    
})
document.addEventListener("click",function(e){
  console.log(navBar.contains(e.target));// true
console.log(menuIcon.contains(e.target));
if(navBar.contains(e.target)=== false && menuIcon.contains(e.target)=== false){
    navBar.classList.remove("active")

}

})

window.addEventListener("scroll",function(e){
    console.log(window.scrollY);
    if(window.scrollY > 50){
        header.classList.add("scrolled")
       

    }else{
        header.classList.remove("scrolled")
    }
   
})
input.addEventListener("focus",function(){
    searchContainer.classList.add("expanded")
    navBar.style.display = "none"
})
input.addEventListener("blur",function(){
    searchContainer.classList.remove("expanded")
    navBar.style.display = "block"


})

