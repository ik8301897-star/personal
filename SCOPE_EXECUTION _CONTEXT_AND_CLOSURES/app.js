// Scope :- scope hai ke aap apne created variables and function kaha tak use kar sakte ho 

// scope :- functional scope,global scope and block scope

// function scope - function ke andar hi use ho sakti hai 
// global scope - poore code mein kahi bhi use ho sakti hai 
// block scope - {} curly braces mein hi use ho sakti hai 



// EXECUTION CONTEXT :-

// js sabse pahle jaise hi aapka functio dekhta hai sabse pahle js banata hai execution context, ye ek process hai jo ki do different phases mein chalta hai, memory phase and doosre ka naam hai execution phase.



// LEXICAL SCOPING VS DYNAMIC SCOPING 

// LEXICAL SCOPING => Ki aap kaha par physically available ho ye poori tareeke se depend karta  hai ki aap kya access kar paaoge

// function abcd(){
//     let a = 12;

//     function defg(){
//         console.log(a)
//     }
//     defg()
// }
// abcd()



// DYNAMIC SCOPING => kaha se call kr r he ho uspe depend karega ki kya value milegi 

// let a = 12;

// function abcd(){
//     console.log(a);
    
// }

// function defg(){
//     let a = 13;
//     abcd()
// }
// defg()



// CLOSURES :- 

// closures hote hai functions jo ki kisi parent function ke andar ho aur andar waala function return ho raha ho, and returning function use kare, parent function ka koi variable 

// * ye sach hai function ke khatam hone pe aapka function and uska variables khatam hojaate hai, par jab bhi closure banta hai to aapka function aur uske variables ka ek backlink banaya jaata hai aur uska naam hota hai [[environment]]

// faayde nuksaan kya kya hai :-
// 1) private variable 
// 2) global pollution 

// function abcd (){
//     let a = 12;
//     return function (){
//         console.log(a);
        
//     }
// }
// let fnc = abcd()
// fnc()

// function count(){
//     let c = 0;
//      return function (){
//         c++;
//         console.log(c);
        
//      }
// }
// let counter = count()
// counter() // 1 
// counter() // 2


// let counter1 = count()
// counter1()
// counter1()
// counter1()
// counter1()
// counter1()



// ENCAPSULATION 

// function clickLimiter(){
//     let click = 0;
//     return function (){
//        if(click < 5){
//          click++;
//         console.log(`Clicked ${click} times`);
//        }else{
//         console.log("LIMITED EXCEEDED TRY AGAIN LATER");
        
//        }
        
//     }
// }
// let fnc = clickLimiter();
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()



// PROJECT TOASTER



