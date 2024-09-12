// let black = document.querySelector('#black')
// let blue = document.querySelector('#blue')
// let pink = document.querySelector('#pink')
// let purple = document.querySelector('#purple')
// let red = document.querySelector('#red')
// let timecolor = document.querySelector('#watch-time');

// red.style.zindex = '1'
// function show(black){
//     black.style.zIndex = '1'
//     timecolor.style.color = '#23211f'
// }
// function show(blue){
//     blue.style.zIndex = '1'
//     timecolor.style.color = '#565681'
// }
// function show(pink){
//     pink.style.zIndex = '1'
//     timecolor.style.color = '#e9c7be'
// }
// function show(purple){
//     purple.style.zIndex = '1'
//     timecolor.style.color = '#8a5362'
// }
// function show(red){
//     red.style.zIndex = '1'
//     timecolor.style.color = '#ca3d22'
// }


// Selecting elements from the DOM
let black = document.querySelector('#black');
let blue = document.querySelector('#blue');
let pink = document.querySelector('#pink');
let purple = document.querySelector('#purple');
let red = document.querySelector('#red');
let time = document.querySelector('#watch-time');
let heartbeat = document.querySelector('#heart-beat');

function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var currentTime = hours + ':' + minutes + ':' + seconds;
    document.getElementById('watch-time').textContent = currentTime;
  }
  // Call updateTime once to display the initial time
  updateTime();
  
  // Update time every second
  setInterval(updateTime, 1000);
// Initial setup
time.style.opacity = '0'
heartbeat.style.opacity = '0'
// Initial z-index setting for red
redElement.style.zIndex = 1;

// Function to show a specific color element
function show(color) {
    // Reset all elements' z-index to 0
    black.style.zIndex = 0;
    blue.style.zIndex = 0;
    pink.style.zIndex = 0;
    purple.style.zIndex = 0;
    red.style.zIndex = 0;
    
    // Set the z-index of the selected color element to 1
    color.style.zIndex = 1;
}




// Function to display time
function displayTime() {
    
    if (time.style.opacity === '0') { // Use === for comparison
        heartbeat.style.opacity = '0';
        time.style.opacity = '1';
    } else {
        time.style.opacity = '0';
    }
}

// Function to display heartbeat
function  displayHeartbeat() {
    if (heartbeat.style.opacity === '0') { // Use === for comparison
        time.style.opacity = '0';
        heartbeat.style.opacity = '1';
    } else {
        heartbeat.style.opacity = '0';
    }
}



// // Selecting color elements
// let black = document.querySelector('#black');
// let blue = document.querySelector('#blue');
// let pink = document.querySelector('#pink');
// let purple = document.querySelector('#purple');
// let red = document.querySelector('#red');
// let timecolor = document.querySelector('#watch-time');

// // Initial style setup for red color
// // red.style.zIndex = '1';
// // timecolor.style.color = '#ca3d22';

// // Function to show each color
// function show(element, color) {
//     element.style.zIndex = '1';
//     timecolor.style.color = color;
// }

// // Adding event listeners to each color element
// black.addEventListener('click', function() {
//     showColor(black, '#23211f');
// });

// blue.addEventListener('click', function() {
//     showColor(blue, '#565681');
// });

// pink.addEventListener('click', function() {
//     showColor(pink, '#e9c7be');
// });

// purple.addEventListener('click', function() {
//     showColor(purple, '#8a5362');
// });

// red.addEventListener('click', function() {
//     showColor(red, '#ca3d22');
// });

























































