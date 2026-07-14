// GLOBAL SCOPE mai -   WINDOW

// console.log(this);


// FUNCTION KE ANDAR - WINDOW

// function abcd(){
//     console.log(this);
    
// }
// abcd()


// METHOD KE ANDAR - OBJECT

// let obj = {
//     name: "ishu",
//     age: "19",
//     sayName:function(){
//         console.log(this);
        
//     }
// }
// obj.sayName()


// EVENT HANDLER PAR  - WINDOW

// let h1 = document.querySelector("h1")

// h1.addEventListener("click",function(){
//    console.log((this.style.color = "red"));
   
// })



// THIS KI VALUE :-

// GLOBAL - WINDOW
// FUNCTION - WINDOW 
// METHOD WITH ES5 FUNCTION - OBJECT
// METHOD WITH ES6 ARROW FUNCTION - WINDOW
// ES5 FUNCTION INSIDE ES5 METHOD - WINDOW
// ARROW FUNCTION INSIDE ES5 METHOD - OBJECT 
// EVENT HANDLER - ELEMENT
// CLASS - BLANK OBJECT





// call, apply , bind

// FUNCTION KO CALL KARTE WAQT AAP SET KR SAKTE HO KI USKI THIS KI VALUE KYA HOGI

let obj = {
     name: "ishu"
}

function abcd(){
    console.log(this);
    
}
abcd.call(obj);