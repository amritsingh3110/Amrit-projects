// const body = document.body
// const slides = document.querySelectorAll('.slide')
// const leftBtn = document.getElementById('left')
// const rightBtn = document.getElementById('right')

// let activeSlide = 0

// rightBtn.addEventListener('click', () => {
//   activeSlide++

//   if (activeSlide > slides.length - 1) {
//     activeSlide = 0
//   }

//   setBgToBody()
//   setActiveSlide()
// })

// leftBtn.addEventListener('click', () => {
//   activeSlide--

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1
//   }

//   setBgToBody()
//   setActiveSlide()
// })

// setBgToBody()

// function setBgToBody() {
//   body.style.backgroundImage = slides[activeSlide].style.backgroundImage
// }

// function setActiveSlide() {
//   slides.forEach((slide) => slide.classList.remove('active'))

//   slides[activeSlide].classList.add('active')
// }

// Get elements from the HTML
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0 // Track the current active slide

// Event listener for the right button
rightBtn.addEventListener('click', () => {
  activeSlide++ // Move to the next slide

  if (activeSlide >= slides.length) { // If we're at the last slide, go back to the first
    activeSlide = 0
  }

  updateSlide() // Update the background and active slide
})

// Event listener for the left button
leftBtn.addEventListener('click', () => {
  activeSlide-- // Move to the previous slide

  if (activeSlide < 0) { // If we're at the first slide, go to the last
    activeSlide = slides.length - 1
  }

  updateSlide() // Update the background and active slide
})

// Set the initial background and active slide
updateSlide()

// Function to update the background and active slide
function updateSlide() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage // Change the background image

  slides.forEach(slide => slide.classList.remove('active')) // Remove 'active' class from all slides
  slides[activeSlide].classList.add('active') // Add 'active' class to the current slide
}
