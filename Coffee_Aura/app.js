


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
   
})

gsap.to("#main",{
    backgroundColor: "#000",
   scrollTrigger:{
    trigger:"#main",
    scroller: "body",
    // markers:true,
    start:"top -50%",
    end:"top -100%",
    scrub: 2
   }
})


const coffeeData = {
    bold: {
        title: "THE BLACK VELVET ESPRESSO",
        desc: "A bold, full-bodied extraction with distinct notes of dark cocoa and toasted hazelnuts. Perfect for a powerful morning ritual.",
        price: "₹280",
        img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
    },
    smooth: {
        title: "BOURBON CARAMEL LATTE",
        desc: "Velvety streamed milk layered over micro-roasted espresso blends, finished with rich house-crafted organic caramel drizzle.",
        price: "₹340",
        img: "https://images.pexels.com/photos/5061244/pexels-photo-5061244.jpeg"
    },
    refreshing: {
        title: "18HR CASCADING COLD BREW",
        desc: "Slow-steeped over mountain spring stones, bringing out native citrus undertones with zero bitterness. Ultimate clean energy.",
        price: "₹310",
        img: "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg"
    }
};

function switchBlend(type) {
   
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const displayCard = document.getElementById('blend-display');
    displayCard.style.opacity = '0';
    displayCard.style.transform = 'translateY(10px)';

    setTimeout(() => {
        document.getElementById('blend-title').innerText = coffeeData[type].title;
        document.getElementById('blend-desc').innerText = coffeeData[type].desc;
        document.getElementById('blend-price').innerText = coffeeData[type].price;
        document.getElementById('blend-img').src = coffeeData[type].img;

        displayCard.style.opacity = '1';
        displayCard.style.transform = 'translateY(0)';
    }, 300);
}