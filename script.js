let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu");
let navbar = document.getElementById("navbar");
let pricingToggle = document.querySelector("#pricing-toggle");
let priceElements = document.querySelectorAll(".price");
let monthlyLabel = document.querySelector("#monthly-label");
let yearlyLabel = document.querySelector("#yearly-label");

openMenu.addEventListener("click", () => {
   navbar.style.display = "block";
   closeMenu.style.display = "block";
   openMenu.style.display = "none";
})
closeMenu.addEventListener("click", () => {
   navbar.style.display = "none";
   closeMenu.style.display = "none";
   openMenu.style.display = "block";
})
pricingToggle.addEventListener("change", () => {
    if (pricingToggle.checked) {
        // Yearly selected
        priceElements.forEach((price) => {
            price.textContent = "$" + price.dataset.yearly;
        });
        monthlyLabel.classList.remove("active");
        yearlyLabel.classList.add("active");
    } else {
        // Monthly selected
        priceElements.forEach((price) => {
            price.textContent = "$" + price.dataset.monthly;
        });
        yearlyLabel.classList.remove("active");
        monthlyLabel.classList.add("active");
    }
}); 









