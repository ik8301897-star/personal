// LocalStorage => aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga


// sessionStorage => ye aapka data temporarily store karta hai matlab ki tab band hua aur data gaya
// localStorage aur sessionStorage 5Mb ka taak data store kar sakte hai

// cookies => ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota hai
// cookies 4 kb ka data store kar sakte hai



// LOCALSTORAGE 

// localStorage.setItem("name","ishu"); // data store karna 

//  let value = localStorage.getItem("name")  // data fetch karna (nikalna )

// //  localStorage.removeItem("name") // delete karna

//  localStorage.setItem("name","rohit") // update karna


// localStorage sirf string he store karta hai aagr array aur obect mai store karna hai to hume 
// JSON.stringify('[1,2,3,4,5')se string banake  iska use karte hai  
// aur jab localStorage se data wapas niklate hai to wo string form mai hota hai usse uska natural form mai lane ke liye JSON.parse()  karte hai


//  localStorage.setItem("friends",JSON.stringify(["ayush","vineet","abhay"]))

// // JSON.parse(friends)
// let fr = JSON.parse(localStorage.getItem("friends"))
// console.log(fr);



//SESSIONSTORAGE

// sessionStorage.setItem("name","ishu")


//COOKIES

// document.cookie = "age = 19"







// DARK MODE LIGHT MODE THEME

let themeBtn = document.querySelector("#themeBtn");


themeBtn.addEventListener("click",function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        themeBtn.textContent = " 🌙 Dark mode"

        localStorage.setItem("theme","light")
    }else{
          document.body.classList.remove("light")
        document.body.classList.add("dark")
        themeBtn.textContent = " 🌙 Light mode"
        localStorage.setItem("theme","dark")

    }
})

document.body.classList.add(localStorage.getItem("theme"))
