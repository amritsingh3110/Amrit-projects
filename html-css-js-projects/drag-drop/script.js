
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.ondragstart = () => setTimeout(() => fill.className = 'invisible', 0);
fill.ondragend = () => fill.className = 'fill';

empties.forEach(empty => {
    empty.ondragover = e => e.preventDefault();
    empty.ondragenter = e => (e.preventDefault(), empty.classList.add('hovered'));
    empty.ondragleave = () => empty.className = 'empty';
    empty.ondrop = () => (empty.className = 'empty', empty.append(fill));
});
