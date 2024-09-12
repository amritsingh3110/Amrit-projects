const ps5 = document.querySelector('.ps5')
const xbox = document.querySelector('.xbox')
const body = document.querySelector('body')
// ps5.addEventListener('mouseover', () => {body.style.gridTemplateColumns = "70% 30%";});
// ps5.addEventListener('mouseout', () => {body.style.gridTemplateColumns = "50% 50%";});
// xbox.addEventListener('mouseover', () => {body.style.gridTemplateColumns = "30% 70%";});
// xbox.addEventListener('mouseout', () => {body.style.gridTemplateColumns = "50% 50%";});


ps5.addEventListener('mouseover', function() { body.classList.add('left')});
ps5.addEventListener('mouseout', function() { body.classList.remove('left')});
xbox.addEventListener('mouseover', function() { body.classList.add('right') });
xbox.addEventListener('mouseout', function() { body.classList.remove('right') });