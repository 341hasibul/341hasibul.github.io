// Preloader - Hide it immediately with error handling
window.addEventListener('DOMContentLoaded', function() {
  let loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
});

// Fallback: hide loader after 2 seconds if page doesn't load
setTimeout(function() {
  let loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
}, 2000);

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

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

// Close the mobile menu when a navigation link is clicked
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

// Typing effect - with error handling for Typed.js
if (typeof Typed !== 'undefined') {
  try {
    new Typed('.type', {
      strings: [
        'Python Developer',
        'Problems Solver',
        'Machine Learning Enthusiast',
        'Artificial Intelligence Explorer',
        'AI Research Enthusiast'
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  } catch (e) {
    console.error('Typed.js error:', e);
  }
} else {
  console.warn('Typed.js library not loaded');
}

// Keep the page scrollable
body.style.overflow = "auto";
