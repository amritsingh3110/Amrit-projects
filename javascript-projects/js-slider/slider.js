
// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelector('.slide');
//     const totalSlides = slides.children.length;
//     currentIndex = index;

//     // if (currentIndex >= totalSlides) {
//     //     currentIndex = 0;
//     // } else if (currentIndex < 0) {
//     //     currentIndex = totalSlides - 1;
//     // }

//     slides.style.transform = `translateX(-${currentIndex * 33.3}%)`;
// }

// function nextSlide() {
//     currentIndex++;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex--;
//     showSlide(currentIndex);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentIndex);
// });








    






// let ci = 0

// function showslide(index){
//     let slide = document.querySelector('.slide')
//     let totalslide = slide.children.length
//     if(index >= totalslide){ci = 0}
//     else if(index < 0){ci = totalslide-1}
//     else{ci = index}
//     slide.style.transform = `translateX(-${ci * (80/totalslide)}%)`
// }

// function prevSlide(){
//     showslide(ci - 1)
// }
// function nextSlide(){
//     showslide(ci + 1)
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const cards = document.querySelectorAll(".card img");

//     cards.forEach(card => {
//         const originalSrc = card.src;
//         const hoverSrc = card.getAttribute("data-hover");

//         card.addEventListener("mouseover", () => {
//             card.src = hoverSrc;
//         });

//         card.addEventListener("mouseout", () => {
//             card.src = originalSrc;
//         });
//     });
//     showslide(ci);
// })







let currentIndex = 0;
let isTransitioning = false;

function showSlide(index, isJump = false) {
    const slides = document.querySelector('.slide');
    const totalSlides = slides.children.length / 2; // Since slides are duplicated

    if (index >= totalSlides) {
        currentIndex = 0;
        if (!isJump) {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    slides.style.transition = 'transform 0.3s ease-in-out';
                    showSlide(currentIndex + 1);
                });
            });
            return;
        }
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
        if (!isJump) {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    slides.style.transition = 'transform 0.3s ease-in-out';
                    showSlide(currentIndex - 1);
                });
            });
            return;
        }
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 39}%)`;
}

function nextSlide() {
    if (!isTransitioning) {
        isTransitioning = true;
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (!isTransitioning) {
        isTransitioning = true;
        showSlide(currentIndex - 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slide');
    const totalSlides = slides.children.length;

    // Duplicate slides
    slides.innerHTML += slides.innerHTML;

    slides.addEventListener('transitionend', () => {
        isTransitioning = false;
    });

    showSlide(currentIndex, true);

    const cards = document.querySelectorAll(".card img");

    cards.forEach(card => {
        const originalSrc = card.src;
        const hoverSrc = card.getAttribute("data-hover");

        card.addEventListener("mouseover", () => {
            card.src = hoverSrc;
        });

        card.addEventListener("mouseout", () => {
            card.src = originalSrc;
        });
    });
});





