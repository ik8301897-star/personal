//  let set = setTimeout(function(){
//     console.log("Hello");
    
// },2000)

// clearTimeout(set);

// let inter = setInterval(function(){
//     console.log("Hey");
    
// },1000)

// clearInterval(inter)


// countdown 

let count = 10;

let interval = setInterval(function(){
    if(count>=1){
        console.log(count);

        count--
        
    }else{
        clearInterval(interval)
    }
},1000);