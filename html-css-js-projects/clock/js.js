// // Get references to HTML elements
// const hourEl = document.querySelector('.hour');
// const minuteEl = document.querySelector('.minute');
// const secondEl = document.querySelector('.second');
// const timeEl = document.querySelector('.time');
// const dateEl = document.querySelector('.date');
// const toggle = document.querySelector('.toggle');

// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// // Toggle dark/light mode
// toggle.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
//     toggle.textContent = document.documentElement.classList.contains('dark') ? 'Light mode' : 'Dark mode';
// });

// // Update time and date
// function setTime() {
//     const now = new Date();
//     const hours = now.getHours() % 12 || 12;
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     hourEl.style.transform = `rotate(${(hours / 12) * 360}deg)`;
//     minuteEl.style.transform = `rotate(${(minutes / 60) * 360}deg)`;
//     secondEl.style.transform = `rotate(${(seconds / 60) * 360}deg)`;

//     timeEl.textContent = `${hours}:${minutes.toString().padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
//     dateEl.innerHTML = `${days[now.getDay()]}, ${months[now.getMonth()]} <span class="circle">${now.getDate()}</span>`;
// }

// setTime();
// setInterval(setTime, 1000);







const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const clock = document.querySelector('.clock');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.textContent = 'Dark mode';
        clock.style.background = 'bisque'
    } else {
        html.classList.add('dark');
        toggle.textContent = 'Light mode';
        clock.style.background = '#333'
    }
});

function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const month = now.getMonth();
    const day = now.getDay();
    const date = now.getDate();
    const hoursForClock = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const hourDeg = (hoursForClock / 12) * 360;
    const minuteDeg = (minutes / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

    timeEl.textContent = `${hoursForClock}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);








