// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close the mobile menu when a navigation link is clicked.
let navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });
}

// Preloader
let loader = document.getElementById("loader");
function myloader() {
  loader.style.display = "none";
}

// Typing effect
let typed = new Typed(".type", {
  strings: [
    "Python Developer",
    "Problems Solver",
    "Machine Learning Enthusiast",
    "Artificial Intelligence Explorer",
    "AI Research Enthusiast"
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

// The old refresh-button handler referenced a missing #btn element and stopped
// the rest of the page script with a null-reference error. There is no refresh
// button on this page, so no handler is needed.

// Keep the page scrollable so sections such as Contact can be reached.
body.style.overflow = "auto";
