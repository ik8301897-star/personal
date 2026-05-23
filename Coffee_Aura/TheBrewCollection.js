document.addEventListener("DOMContentLoaded", function () {
    // 1. Saare filter buttons aur product cards ko select karna
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 2. Pehle se active button se 'active' class hatana aur naye button par lagana
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");

            // 3. Clicked button ki category value nikalna
            const filterValue = this.getAttribute("data-filter");

            // 4. Cards ko filter aur animate karna
            productCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    // Card dikhana hai: Pehle display block karein fir fade-in effect dein
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    // Card chupana hai: Smoothly fade-out karke display none karein
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); // 300ms CSS transition ke saath match karta hai
                }
            });
        });
    });
});