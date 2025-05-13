"use strict"

// align appropriate elements to the right if the document is in arabic
if (document.querySelector("html").getAttribute("lang") == "ar") {
    const nodes = document.querySelectorAll("h2,h3,p,#brands");
    for (let i=0;i<nodes.length;i++) {
        nodes[i].setAttribute("dir", "rtl");
        nodes[i].style.textAlign = "right";
    }
}

// choose language arrow drop down
const arrow = document.querySelector(".arrow");
const dropdown = document.querySelector(".dropdown");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("arrow-active");
    dropdown.classList.toggle("dropdown-active");
});

// user scrolls down
const nav = document.querySelector("nav");
const navGlobeIcon = document.querySelector("nav .language img");
const srcBlack = (document.querySelector("html").getAttribute("lang") == "en") ? "icons/globe-black-icon.png" : "../icons/globe-black-icon.png";
const srcWhite = (document.querySelector("html").getAttribute("lang") == "en") ? "icons/globe-white-icon.png" : "../icons/globe-white-icon.png";
window.addEventListener("scroll", function() {
    nav.classList.toggle("sticky", window.scrollY > 0);

    // change the nav globe icon color
    if (window.scrollY > 0) {
        navGlobeIcon.setAttribute("src", srcBlack);
    } else {
        navGlobeIcon.setAttribute("src", srcWhite);
    }
})

// user clicks on the hamburger icon (small devices only)
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    nav.classList.toggle("active");
    // ensures that the ui cannot be bugged (resets to original state)
    if (dropdown.classList.contains("dropdown-active")) {
        arrow.classList.toggle("arrow-active");
        dropdown.classList.toggle("dropdown-active");
    }
}

// remove active class on nav once nav-link is clicked
const navlinks = document.querySelectorAll(".nav-link")
navlinks.forEach(function(navlink) {
    navlink.onclick = function() {
        nav.classList.remove("active");
        arrow.classList.remove("arrow-active");
        dropdown.classList.remove("dropdown-active");
    }
})

// image slider functionality
$(function() {
    // configuration
    let currentSlide = 1;
    const animationSpeed = 1000;
    const pause = 7000;
    let animating = false;

    // cache DOM
    const $slideContainer = $(".slides");
    const $slides = $(".slide");

    // start on first slide
    $slideContainer.css("margin-left", -window.innerWidth);

    // detect screen size changes to fix ui bugs
    $(window).resize(function() {
        $slideContainer.css("margin-left", -(window.innerWidth * currentSlide));
    });

    let interval;

    function startSlider() {
        $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
        clearInterval(interval);
        interval = setInterval(function() {
            $slideContainer.animate({"margin-left": "-=" + window.innerWidth}, animationSpeed, function() {
                currentSlide++;
                $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
                $(`.current-slide:nth-child(${currentSlide-1})`).css("background-color", "rgba(255, 255, 255, 0.8)")
                if (currentSlide === $slides.length - 1) {
                    currentSlide = 1;
                    $slideContainer.css("margin-left", -window.innerWidth);
                    $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
                }
            });
        }, pause);
    }

    function moveLeft() {
        animating = true;
        $slideContainer.animate({"margin-left": "+=" + window.innerWidth}, animationSpeed, function() {
            currentSlide--;
            $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
            $(`.current-slide:nth-child(${currentSlide+1})`).css("background-color", "rgba(255, 255, 255, 0.8)")
            if (currentSlide === 0) {
                currentSlide = $slides.length - 2;
                $slideContainer.css("margin-left", - (window.innerWidth * 3));
                $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
            }
            animating = false;
        })
    }

    function moveRight() {
        animating = true;
        $slideContainer.animate({"margin-left": "-=" + window.innerWidth}, animationSpeed, function() {
            currentSlide++;
            $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
            $(`.current-slide:nth-child(${currentSlide-1})`).css("background-color", "rgba(255, 255, 255, 0.8)")
            if (currentSlide === $slides.length - 1) {
                currentSlide = 1;
                $slideContainer.css("margin-left", -window.innerWidth);
                $(`.current-slide:nth-child(${currentSlide})`).css("background-color", "rgba(0, 229, 255, 0.8)")
            }
            animating = false;
        })
    }
    startSlider();
    $("#cover,.switch").on("click mousemove keydown", startSlider);
    $(".slider-left-arrow").click(function() {
        // wait for any ongoing animations to complete first
        if (animating) return;
        moveLeft();
    });
    $(".slider-right-arrow").click(function() {
        // wait for any ongoing animations to complete first
        if (animating) return;
        moveRight();
    });
});

// automatically update the copyright's year
document.querySelector(".copyright").textContent = "Copyright © Future Gulf Company " + new Date().getUTCFullYear();