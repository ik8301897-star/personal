let downloadBtn = document.querySelector("#downloadBtn");
let progress = document.querySelector(".progress-bar");
let count = 0;
let percentage = document.querySelector(".percentage")
let statuse = document.querySelector(".status")
let download = document.querySelector("#download")

downloadBtn.addEventListener("click",()=>{
  let inter =   setInterval(function(){
    if(count<=99){
        count++
        progress.style.width = `${count}%`
        percentage.textContent = `${count}%`
       
    }else{
        statuse.textContent = "Completed"
        download.textContent = "Downloaded"
        clearInterval(inter)
    }

    },30)
   
})
