// SYNC ASYNC 

// Aisa code jo line by line chale hota hai sync code 
// Aisa code jo jab chalne ke liye ready ho jaaye tab chale wo hai async 

function kuchDerBaadChalunga(val){
    setTimeout(()=>{
    console.log(val);


    },Math.floor(Math.random()*10)*1000)
    
}
kuchDerBaadChalunga(12);