let heroImg = document.querySelector(".hero-img"); 
let heading = document.querySelector("h1"); 
let description = document.querySelector("p"); 
let dots = document.querySelectorAll(".dot"); 
let nextBtn = document.querySelector("#nextBtn"); 
let prevBtn = document.querySelector("#prevBtn"); 
let pauseBtn = document.querySelector("#pauseBtn")

let slides = [ 
  { 
    image: "https://images.pexels.com/photos/16304368/pexels-photo-16304368.jpeg", 
    title: "Classic Blue Vibe", 
    description: "Step up your style game with timeless leather sneakers." 
  },
  { 
    image: "https://images.pexels.com/photos/15632866/pexels-photo-15632866.jpeg", 
    title: "Urban Streetwear", 
    description: "Engineered for maximum comfort and everyday durability." 
  },
  { 
    image: "https://images.pexels.com/photos/12611630/pexels-photo-12611630.jpeg", 
    title: "Retro Revival", 
    description: "Bring back the iconic gold standards of athletic fashion." 
  },
  { 
    image: "https://images.pexels.com/photos/8490975/pexels-photo-8490975.jpeg", 
    title: "Bold Aesthetics", 
    description: "Make a powerful statement with vibrant, eye-catching colorways." 
  },
 
];

let currentIndex = 0;

function updateHero(){
let currentSlides = slides[currentIndex]
    heroImg.src = currentSlides.image;
    heading.textContent = currentSlides.title;
    description.textContent = currentSlides.description

    dots.forEach(function(dot,index){
        dot.classList.remove("active")

       
    })
        dots[currentIndex].classList.add("active")


}
updateHero()


dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        currentIndex = index;

        updateHero();

    });

});
nextBtn.addEventListener("click",function(){
    currentIndex++
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    updateHero()
})
prevBtn.addEventListener("click",function(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = slides.length-1;
    }
    updateHero()
})

let sliderInterval;
function startSlider(){
     sliderInterval = setInterval(function(){
    currentIndex++
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    
    updateHero()

},3000)

}
startSlider()
 

let isPlaying = true;
pauseBtn.addEventListener("click",function(e){
    if(isPlaying){
         clearInterval(sliderInterval)
        
   pauseBtn.classList.add("fa-play")
   pauseBtn.classList.remove("fa-pause")
    isPlaying = false;

    }else{
       startSlider()
        
   pauseBtn.classList.remove("fa-play")
   pauseBtn.classList.add("fa-pause")

        
         isPlaying = true;
    }
   
})