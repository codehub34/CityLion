function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  }

  
  let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds


let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});

function MyView(){
    alert("Hello, World!");

}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('view');
    button.onclick = function () {
        alert("Button clicked!");
    };
});
