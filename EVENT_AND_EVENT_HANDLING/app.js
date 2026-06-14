
// Topic : Add Eventlistener
// let h1 = document.querySelector("h1");
 // # click
// h1.addEventListener("click",function(){
//     h1.style.color = "red"
// })

// #dblclick
// let p = document.querySelector("p");
// p.addEventListener("dblclick",function(){
//     p.style.backgroundColor = "green"
// })
// // Remove EventListener
// p.removeEventListener("dblclick")

// #input
// let input = document.querySelector("input");

// input.addEventListener("input",function(){
//     console.log("typed");
    
// })

// let input = document.querySelector("input");

// input.addEventListener("input",function(details){
//     if(details.data === null){
//         console.log("backspace");
        
//     } else{
//         console.log(details.data);
        
//     }
// })

// #change

// let sel = document.querySelector("select");
// let device = document.querySelector("h3")

// sel.addEventListener("change",function(details){
//     console.log(details.target.value);
//     device.textContent = `${details.target.value} Device Selected`
//     device.style.color = "green"
    
// })

// #window
// let h1 = document.querySelector("h1")
//  window.addEventListener("keydown",function(details){
//   if(details.key === "Backspace"){
//     h1.textContent = "SPC"
//   }
//   else{
//     h1.textContent = details.key
//   }
  
    
// })

// btn wala part 

// let btn = document.querySelector("#btn");
// let input = document.querySelector("input")
// btn.addEventListener("click",function(){
//   input.click()

// })

// input.addEventListener("change",function(details){
//  btn.textContent = details.target.files[0].name
  
// })




// # SUBMIT

let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")

form.addEventListener("submit",function(details){
  details.preventDefault()
 
  
})