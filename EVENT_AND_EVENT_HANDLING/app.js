
// Topic : Add Eventlistener
// let h1 = document.querySelector("h1");
 // # click
// h1.addEventListener("click",function(){
//     h1.style.color = "red"
// })

// const { createElement } = require("react")

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

// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")

// form.addEventListener("submit",function(details){
//   details.preventDefault()
 
  
// })


// MouseOver & MouseOut 

// let card = document.querySelector(".card")
// card.addEventListener("mouseover",function(){
//   card.style.backgroundColor = "yellow"
  
// })
// card.addEventListener("mouseout",function(){
//   card.style.backgroundColor = "red"
  
// })

// Mouse Move

// let card = document.querySelector(".card")
// window.addEventListener("mousemove",function(details){
//   card.style.top = details.clientY + "px"
//   card.style.left = details.clientX + "px"
  
// })



// event  bubbling 
// Jispe event aayega agar uspar listener nahi hua to hmara event uske parent par listener dhundhega aur aisa karte karte upar ki taraf move karega

//  let nav = document.querySelector("#nav")
//  nav.addEventListener("click",function(){
//   alert("Clicked")
//  })



// let ul = document.querySelector("ul")
// ul.addEventListener("click",function(details){
//  details.target.classList.toggle("lt")
// })




// practice question 1

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     h1.textContent = "Welcome"
// })



// practice question 2

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     h1.style.color = "red"
// })



//  practice question 3

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     if(h1.style.color ==="red"){
//         h1.style.color = "black"
//     }
//     else{
//         h1.style.color = "red"
//     }
// })


// practice question 4

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")
// let count = 0;

// button.addEventListener("click",function(details){
//     count++
    
//   h1.textContent = count
   
     
// })


// practice question 5

// let h1 = document.querySelector("h1")
// let plusButton = document.querySelector("#plusbutton")
// let minusButton = document.querySelector("#minusbutton")
// let count = 0;

// plusButton.addEventListener("click",function(){
//     count++
//     h1.textContent = count
// })
// minusButton.addEventListener("click",function(){
//     count--
//     h1.textContent = count
// })


// practice question 6

// let input = document.querySelector("input")
// let h2 = document.querySelector("h2")

// input.addEventListener("input",function(details){
//     h2.textContent = input.value
//     console.log(details);
    

// })


// practice question 7
// let input = document.querySelector("input")
// let button = document.querySelector("button")
// let ul = document.querySelector("ul")

// button.addEventListener("click",function(details){
//     let li = document.createElement("li")
//     let delBtn = document.createElement("button")
//     delBtn.textContent = "delete"
   
//      li.textContent = input.value
//      ul.appendChild(li);
//       li.appendChild(delBtn)

//       delBtn.addEventListener("click",function(){
//         li.remove()
//       })
      


//      input.value = ""
   

   
    
     
// })


// practice question 8

let button = document.querySelector("button")
let para = document.querySelector("p")

button.addEventListener("click",function(){
    if(button.textContent == "Hide"){
         para.style.display = "none"
        button.textContent = "Show"

    }
   
 else{
       button.textContent = "Hide"
       para.style.display = "block"
    }
  
})
 