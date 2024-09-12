// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// let size = 10, isDrawing = false, color = 'black', x, y;

// canvas.onmousedown = (e) => { isDrawing = true; [x, y] = [e.offsetX, e.offsetY]; };
// canvas.onmouseup = () => { isDrawing = false; x = y = null; };
// canvas.onmousemove = (e) => {
//     if (!isDrawing) return;
//     drawCircle(e.offsetX, e.offsetY);
//     drawLine(x, y, e.offsetX, e.offsetY);
//     [x, y] = [e.offsetX, e.offsetY];
// };

// function drawCircle(x, y) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(x, y, size, 0, Math.PI * 2);
//     ctx.fill();
// }

// function drawLine(x1, y1, x2, y2) {
//     ctx.strokeStyle = color;
//     ctx.lineWidth = size * 2;
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
// }

// document.getElementById('increase').onclick = () => updateSize(5);
// document.getElementById('decrease').onclick = () => updateSize(-5);
// document.getElementById('color').onchange = (e) => color = e.target.value;
// document.getElementById('clear').onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

// function updateSize(change) {
//     size = Math.max(5, Math.min(size + change, 50));
//     document.getElementById('size').innerText = size;
// }


// Get the canvas element and its 2D drawing context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initialize variables for brush size, drawing state, color, and coordinates
let size = 10;
let isDrawing = false; // This will track if the mouse is being held down (drawing)
let color = 'black';
let x = 0, y = 0; // Initial coordinates for drawing

// When the mouse button is pressed down on the canvas
canvas.addEventListener('mousedown', function(e) {
    isDrawing = true; // Start drawing
    x = e.offsetX; // Set the initial x-coordinate
    y = e.offsetY; // Set the initial y-coordinate
});

// When the mouse button is released
canvas.addEventListener('mouseup', function() {
    isDrawing = false; // Stop drawing
    x = 0; // Reset the x-coordinate
    y = 0; // Reset the y-coordinate
});

// When the mouse is moved on the canvas
canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) { // Only draw if the mouse is pressed down
        drawCircle(e.offsetX, e.offsetY); // Draw a circle at the current mouse position
        drawLine(x, y, e.offsetX, e.offsetY); // Draw a line from the last position to the current one
        x = e.offsetX; // Update the x-coordinate
        y = e.offsetY; // Update the y-coordinate
    }
});

// Function to draw a circle at a specific position
function drawCircle(x, y) {
    ctx.fillStyle = color; // Set the fill color to the current color
    ctx.beginPath(); // Start a new path (to draw the circle)
    ctx.arc(x, y, size, 0, Math.PI * 2); // Draw the circle
    ctx.fill(); // Fill the circle with the current color
}

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = color; // Set the line color to the current color
    ctx.lineWidth = size * 2; // Set the line width (twice the size of the circle)
    ctx.beginPath(); // Start a new path (to draw the line)
    ctx.moveTo(x1, y1); // Move to the starting point of the line
    ctx.lineTo(x2, y2); // Draw a line to the end point
    ctx.stroke(); // Render the line on the canvas
}

// Increase brush size when the "Increase Size" button is clicked
document.getElementById('increase').addEventListener('click', function() {
    size += 5; // Increase the size by 5
    if (size > 50) size = 50; // Limit the size to a maximum of 50
    document.getElementById('size').innerText = size; // Update the displayed size
});

// Decrease brush size when the "Decrease Size" button is clicked
document.getElementById('decrease').addEventListener('click', function() {
    size -= 5; // Decrease the size by 5
    if (size < 5) size = 5; // Limit the size to a minimum of 5
    document.getElementById('size').innerText = size; // Update the displayed size
});

// Change the brush color when a new color is selected
document.getElementById('color').addEventListener('input', function(e) {
    color = e.target.value; // Update the color variable with the selected color
});

// Clear the canvas when the "Clear Canvas" button is clicked
document.getElementById('clear').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
});