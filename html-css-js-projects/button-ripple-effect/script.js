document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', e => {
        const circle = document.createElement('span');
        circle.className = 'circle';
        circle.style.top = `${e.pageY - e.target.offsetTop}px`;
        circle.style.left = `${e.pageX - e.target.offsetLeft}px`;
        button.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});
