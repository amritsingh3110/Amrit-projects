

    // HAMBURGER MENU 
let line = document.querySelector('.hamburger-menu--line');
let line1 = document.querySelector('.hamburger-menu-line--top')
let line2 = document.querySelector('.hamburger-menu-line--bottom')
let menu = document.querySelector('.hamburger-menu');
let nav = document.querySelector('nav');

menu.addEventListener('click', function() {
    if (nav.classList.contains('show')) {
        // Remove 'show' from both nav and line when it's visible
        nav.classList.remove('show');
        line1.classList.remove('show');
        line2.classList.remove('show');
        setTimeout(() => {
            line.classList.remove('show');
        }, 500);
    } else {
        // Make nav visible and add 'show' to trigger animation
        nav.style.display = 'block';
        setTimeout(() => {
            nav.classList.add('show');
            line.classList.add('show');
            line1.classList.add('show');
            line2.classList.add('show');
        }, 10); 
    }
});






    // slider  ---------------------------------
let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

const nextBtn = document.getElementById('right');
const prevBtn = document.getElementById('left');

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentSlide * 25;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}




// SECTION 5,7 here NEW ARRIVALS,BESTSELLERS
let jacketcolor = document.querySelectorAll(".color-option");
jacketcolor.forEach(color => {
    color.addEventListener('click', function(e) {
        // Remove the border from all elements
        jacketcolor.forEach(element => {
            element.style.border = "none"; // Reset border for all
        });

        // Add the border to the clicked element
        e.target.style.border = "2px solid #000";
    });
});
// section latest stories----------------------
// let viewall = document.querySelector('#view-all');
// let container = document.querySelector('#nextslide');
// viewall.addEventListener("click", function(e) {
//     if (container.style.display === 'none') {
//         viewall.innerHTML = 'VIEW LESS'
//         container.style.display = 'flex';
//     } else {
//         container.style.display = 'none';
//          viewall.innerHTML = 'VIEW ALL'
//     }
// });


let viewall = document.querySelector('#view-all');
let container = document.querySelector('#nextslide');
viewall.addEventListener("click", () => {
  const isHidden = container.style.display === 'none';      //  checks whether the container is currently hidden.
  viewall.innerHTML = isHidden ? 'VIEW LESS' : 'VIEW ALL';  //  uses the ternary operator to change the text inside viewall  whether the container is hidden. If it is hidden, the text becomes "VIEW LESS", otherwise, it becomes "VIEW ALL".
  container.style.display = isHidden ? 'flex' : 'none';     //   If the container is hidden, it's set to flex, and if not, it's set to none.
});






  
