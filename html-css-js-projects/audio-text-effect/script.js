const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
    textEl.innerText = text.substring(0, idx);
    idx = (idx % text.length) + 1; // Cycle through the text
    setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', () => {
    speed = 300 / speedEl.value;
});
