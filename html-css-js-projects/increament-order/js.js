// document.querySelectorAll('.counter').forEach(counter => {
//     let target = +counter.getAttribute('data-target');
//     let count = 0;

//     function updateCounter() {
//         counter.innerText = Math.ceil(count += target / 200);
//         if (count < target) setTimeout(updateCounter, 10);
//     }

//     updateCounter();
// });

document.querySelectorAll('.counter').forEach(counter => {
    let target = counter.getAttribute('data-target')
    console.log(target);
    let count = 0
    let increment = target/20000

    function counters(){
        count += increment
        counter.innerHTML = Math.ceil(count)
        if(count < target){
            setTimeout(counters,1)
        }
    }counters()
});
