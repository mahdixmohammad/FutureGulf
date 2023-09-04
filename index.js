// when user scrolls down
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// when user clicks on the hamburger icon (small devices only)
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("active");
}