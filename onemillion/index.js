const arrow = document.querySelector(".arrow");
const dropdown = document.querySelector(".dropdown");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
    dropdown.classList.toggle("active");
    if (dropdown.classList.contains("active")) {
        setTimeout(() => {
            dropdown.style.zIndex = "1000";
          }, 500);
    }
    else {
        dropdown.style.zIndex = "-1";
    }
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    arrow.classList.toggle("active");
    dropdown.classList.toggle("active");
    if (dropdown.classList.contains("active")) {
        setTimeout(() => {
            dropdown.style.zIndex = "1000";
          }, 500);
    }
    else {
        dropdown.style.zIndex = "-1";
    }
});

function menuClick(button) {
    arrow.classList.toggle("active");
    dropdown.classList.toggle("active");
    dropdown.style.zIndex = "-1";
    
    switch(button) {
        case "all":
            all = document.getElementsByClassName("all");
            for (let i = 0; i < all.length; i++) {
                all[i].style.display = "block";
            }
            break;
        default:
            all = document.getElementsByClassName("all");
            for (let i = 0; i < all.length; i++) {
                all[i].style.display = "none";
            }

            element = document.getElementsByClassName(button);
            for (let i = 0; i < element.length; i++) {
                element[i].style.display = "block";
            }
    }
}