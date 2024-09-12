
// const c = document.querySelector('#Canvas');
// const d = c.getContext('2d');
// d.beginPath();
// d.moveTo(0, 0);
// d.lineTo(300, 100);
// d.moveTo(600, 0);
// d.lineTo(300, 100);
// d.moveTo(300, 100);
// d.lineTo(300, 200);
// d.stroke();



// const c = document.querySelector('Canvas')
// const d = c.getContext('2d')

// c.addEventListener('mousemove',(e)=>{
//     const x = e.offsetX
//     const y = e.offsetY
//     d.lineTo(x,y)
//     d.stroke()
// })


document.addEventListener('DOMContentLoaded',()=>{
const c = document.querySelector('Canvas')
const d = c.getContext('2d')
let x = 0
// const speed = 105
const speed = 2
const size = 20
function animate(){
    d.clearRect(0,0,c.width,c.height)
    d.fillStyle = 'blue'
    d.fillRect(x,c.height/2,size,size)
     x+=speed
     if(x>c.width)x= -size
     requestAnimationFrame(animate)
}animate()
})