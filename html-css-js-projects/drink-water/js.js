
// let fill = document.querySelector('.fill');
// let glass = document.querySelectorAll('.glass');

// let currentHeight = 0;

// glass.forEach((item) => {
//     item.addEventListener('click', () => {
//         if (currentHeight < 100) {
//             currentHeight += 12.5;
//             fill.style.height = currentHeight + '%';
//         }
//         item.style.background = 'blue'
//     });
// });

// glass.forEach((item) => {
//     item.addEventListener('click', () => {
//         if (currentHeight > 0) {
//             currentHeight -= 12.5;
//             fill.style.height = currentHeight + '%';
//         }
//         item.style.background = ''
//     });
// });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Get all small cups and the big cup percentage element
const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');

// Loop through each small cup and add a click event
smallCups.forEach(function(cup, index) {
    cup.addEventListener('click', function() {
        handleCupClick(index);
    });
});

// Function to handle what happens when a cup is clicked
function handleCupClick(index) {
    // Check if the clicked cup is already full and the next one isn't
    if (smallCups[index].classList.contains('full') && 
        (index === smallCups.length - 1 || !smallCups[index + 1].classList.contains('full'))) {
        index--; // Move back one cup to unfill it
    }

    // Loop through all cups to either fill or unfill them
    smallCups.forEach(function(cup, i) {
        if (i <= index) {
            cup.classList.add('full'); // Fill the cup
        } else {
            cup.classList.remove('full'); // Unfill the cup
        }
    });

    // Update the big cup based on how many cups are filled
    updateBigCup(index + 1);
}

// Function to update the big cup percentage
function updateBigCup(filledCups) {
    const totalCups = smallCups.length; // Get the total number of small cups
    const percentFilled = (filledCups / totalCups) * 100; // Calculate the percentage

    // Update the big cup's height and text to show the percentage
    percentage.style.height = percentFilled + '%';
    percentage.innerText = percentFilled + '%';
}
