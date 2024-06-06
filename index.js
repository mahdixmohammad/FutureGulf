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
const nav = document.querySelector("nav");

hamburger.onclick = function() {
    nav.classList.toggle("active");

    // ensures that the ui cannot be bugged (resets to original state)
    if (dropdown.classList.contains("dropdown-active")) {
        arrow.classList.toggle("arrow-active");
        dropdown.classList.toggle("dropdown-active");
    }
}