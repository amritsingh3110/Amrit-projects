// const progress = document.getElementById('progress')
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// const circle = document.querySelector('.circle')

// let currentActive = 1
// next.addEventListener('click',()=>{
//     currentActive++
//     if (currentActive> circle.length) {
//         currentActive = circle.length
//     }
//     update()
// })
// next.addEventListener('click',()=>{
//     currentActive++
//     if (currentActive> circle.length) {
//         currentActive = 1
//     }
//     update()
// })

// function update(){
//     circle.forEach((circle,idx) => {
//         if (idx< currentActive) {
            
//         }
//     });
// }




const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => changeStep(1));
prev.addEventListener('click', () => changeStep(-1));

function changeStep(step) {
    currentActive += step;

    if (currentActive < 1) {
        currentActive = 1;
    } else if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
}

function update() {
    circles.forEach((circle, idx) => {
        circle.classList.toggle('active', idx < currentActive);
    });

    const activeCount = document.querySelectorAll('.active').length;
    progress.style.width = ((activeCount - 1) / (circles.length - 1)) * 100 + '%';

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}
