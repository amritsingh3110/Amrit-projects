// Select the elements from the DOM
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Initialize the loading value
let load = 0;

// Run the blurring function every 30 milliseconds
let int = setInterval(blurring, 30);

function blurring() {
  load++; // Increment load value

  if (load > 99) {
    clearInterval(int); // Stop the interval when load reaches 100
  }

  loadText.innerText = `${load}%   WELCOME`; // Update loading text
  loadText.style.opacity = 1 - load / 100; // Fade out loading text
  bg.style.filter = `blur(${30 - load * 0.3}px)`; // Reduce blur effect on background
}
