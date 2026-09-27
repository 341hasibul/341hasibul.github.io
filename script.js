// Prevent script crashes from missing elements
const nav = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-button a");
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

function myloader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
  if (body) body.style.overflow = "auto";
}

window.addEventListener("DOMContentLoaded", myloader);
window.addEventListener("load", myloader);

if (nav && scrollBtn) {
  window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  };
}

if (menuBtn && navBar && body && cancelBtn) {
  menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    if (scrollBtn) scrollBtn.style.pointerEvents = "none";
  };

  cancelBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    if (scrollBtn) scrollBtn.style.pointerEvents = "auto";
  };
}

const navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function() {
    if (navBar) navBar.classList.remove("active");
    if (menuBtn) {
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
    }
    if (body) body.style.overflow = "auto";
    if (scrollBtn) scrollBtn.style.pointerEvents = "auto";
  });
});

if (typeof Typed !== "undefined") {
  new Typed(".type", {
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
}

// Remove old broken code blocks that referenced missing elements
// and attempted to append to a non-existent #image element.
