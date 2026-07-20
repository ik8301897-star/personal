let products = document.querySelector(".products");
let previousBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let card = document.querySelector(".card1");

let scrollAmount = card.offsetWidth + 20;


nextBtn.addEventListener("click", function () {
    products.scrollLeft += scrollAmount;
    updateButtons();
});

previousBtn.addEventListener("click", function () {
    products.scrollLeft -= scrollAmount;
    updateButtons();
});


products.addEventListener("scroll", function () {
    updateButtons();
});

window.addEventListener("resize", function () {
    scrollAmount = card.offsetWidth + 20;
});

function updateButtons() {

    if (products.scrollLeft + products.clientWidth >= products.scrollWidth) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    if (products.scrollLeft === 0) {
        previousBtn.disabled = true;
    } else {
        previousBtn.disabled = false;
    }
}

updateButtons();


let isDragging = false;
let startX;
let scrollLeft;

products.addEventListener("mousedown", function (e) {

    isDragging = true;

    startX = e.pageX;

    scrollLeft = products.scrollLeft;

    products.style.cursor = "grabbing";

});

products.addEventListener("mousemove", function (e) {

    if (!isDragging) return;

    e.preventDefault();

    let x = e.pageX;

    let walk = x - startX;

    products.scrollLeft = scrollLeft - walk;

});

products.addEventListener("mouseup", function () {

    isDragging = false;

    products.style.cursor = "grab";

});

products.addEventListener("mouseleave", function () {

    isDragging = false;

    products.style.cursor = "grab";

});