// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
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
}
cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });
}
// preloader
var loader = document.getElementById('loader');
function myloader() {
  loader.style.display = 'none';
}
/*typing effect*/

var typed = new Typed('.type', {
  strings: ['Python Devoloper','Problems Solver', 'Machine Learning Enthusiast'   , 'Artificial Intelligence Explorer','AI Research Enthusiast', ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});
// refrash
let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  location.reload();
});
// Random Quota Generator 
// API fetching in JavaScript
		document.addEventListener('mousemove',(e)=>{
			let myImage = document.getElementById('image');
			let span = document.createElement('span_lover');
			let x = e.offsetX;
			let y = e.offsetY;
			span.style.top = y + "px";
			span.style.left = x + "px";
			let size = Math.random() * 100;
			span.style.height = 20 + size + "px";
			span.style.width = 20 + size + "px";
			myImage.appendChild(span);

			setTimeout(()=>{
				span.remove();
			},2000)
		})
document.body.style.overflow = "auto";

document.body.style.overflow = "hidden";


