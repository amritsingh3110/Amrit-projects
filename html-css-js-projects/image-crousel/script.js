
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let slide = document.querySelector('.image-container');

let currentPosition = 0; // Track the current slide position
const slideWidth = 500; // The width of each slide (adjust if needed)
const maxSlide = -1500; // Maximum left position (based on the number of slides)

right.addEventListener('click', () => {
    if (currentPosition > maxSlide) {
        currentPosition -= slideWidth; // Move left by the width of one slide
    } else {
        currentPosition = 0; // Reset to the first slide
    }
    slide.style.transform = `translateX(${currentPosition}px)`;
});

left.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += slideWidth; // Move right by the width of one slide
    } else {
        currentPosition = maxSlide; // Go to the last slide when reaching the start
    }
    slide.style.transform = `translateX(${currentPosition}px)`;
});

