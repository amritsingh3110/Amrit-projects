const canvas = document.getElementById('doraemonCanvas');
const ctx = canvas.getContext('2d');

// Draw Doraemon's face
ctx.beginPath();
ctx.arc(250, 250, 200, 0, Math.PI * 2, true); // Outer circle
ctx.fillStyle = "#00AEEF";
ctx.fill();
ctx.stroke();

// Draw face white area
ctx.beginPath();
ctx.arc(250, 250, 170, 0, Math.PI * 2, true); // Inner white circle
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

// Draw eyes
ctx.beginPath();
ctx.arc(200, 200, 40, 0, Math.PI * 2, true); // Left eye
ctx.arc(300, 200, 40, 0, Math.PI * 2, true); // Right eye
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

// Draw pupils
ctx.beginPath();
ctx.arc(215, 215, 15, 0, Math.PI * 2, true); // Left pupil
ctx.arc(285, 215, 15, 0, Math.PI * 2, true); // Right pupil
ctx.fillStyle = "black";
ctx.fill();

// Draw nose
ctx.beginPath();
ctx.arc(250, 250, 25, 0, Math.PI * 2, true);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// Draw mouth
ctx.beginPath();
ctx.arc(250, 300, 100, 0, Math.PI, false); // Mouth
ctx.stroke();

// Draw whiskers
ctx.beginPath();
ctx.moveTo(150, 250);
ctx.lineTo(80, 230);
ctx.moveTo(150, 270);
ctx.lineTo(80, 270);
ctx.moveTo(150, 290);
ctx.lineTo(80, 310);

ctx.moveTo(350, 250);
ctx.lineTo(420, 230);
ctx.moveTo(350, 270);
ctx.lineTo(420, 270);
ctx.moveTo(350, 290);
ctx.lineTo(420, 310);
ctx.stroke();