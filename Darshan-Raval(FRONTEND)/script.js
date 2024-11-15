var typed = new Typed(".text", {
    strings: ["Dreams!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Slideshow functionality
const slides = document.querySelectorAll('.slides img');
let currentSlide = 0;

function showSlide() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
    });

    // Show current slide
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = '1';

    // Update currentSlide index
    currentSlide = (currentSlide + 1) % slides.length;
}

// Initial display
showSlide();

// Change slide every 3 seconds
setInterval(showSlide, 3000);
