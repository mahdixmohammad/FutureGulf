// choose language arrow drop down
const arrow = document.querySelector(".arrow");
const dropdown = document.querySelector(".dropdown");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("arrow-active");
    dropdown.classList.toggle("dropdown-active");
});

// user scrolls down
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// user clicks on the hamburger icon (small devices only)
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("active");
}