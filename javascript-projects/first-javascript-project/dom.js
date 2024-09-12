// let h2 = document.querySelector("h2")
// console.dir(h2)
// // console.log(h2)
// // h2.innerText = h2.innerText + " how are you"
// let init = h2.innerHTML
// setInterval(function count(){
//     init = init>0 ? init -1 : 0
//     h2 = init%2 === 0 ? h2.style.backgroundColor = "red" : h2.style.backgroundColor = "blue"
     
//      h2.innerHTML = init
//      console.log('Interval Running')
// },1000)


// let h2 = document.querySelector("h2");
// console.dir(h2);

// Uncomment the following line if you want to append " how are you" to the inner text of h2
// h2.innerText = h2.innerText + " how are you";

// let init = parseInt(h2.innerHTML); // Parse the initial value of h2.innerHTML as an integer
// let interval = setInterval(function() {
//     init = init > 0 ? init - 1 : 0;
//     h2.style.fontSize = init*100 +"px"
//     h2.style.width = init*10 +"%"
//     // Use proper conditional assignment to change background color
//     h2.style.backgroundColor = init % 2 === 0 ? "red" : "blue";
    
//     h2.innerHTML = init; // Update the innerHTML of h2 with the new value
//     // console.log('Interval Running');
//     if(init <=1 ){
//         clearInterval(interval)
//     }
// }, 1000);




// let newh2 = document.createElement("h2")
// newh2.innerText = "how are you"
// console.log(newh2)
// document.querySelector("body").prepend(newh2)
// newh2.style.color = "blue"
// newh2.style.textAlign = "center"

// ---------------------------------------------------events-----------------------------------------------------------------
// let btn = document.querySelector("button.btn")
// let b = document.querySelector("body")
// btn.onclick = function(){
//     b.style.background = "rgb("+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+")"
//     btn.style.background = "rgb("+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+")"
//     btn.style.color = "rgb("+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+")"
//     btn.style.fontSize = "50px"
//     btn.style.border = "none"
// } 



// ------------------------------------------------------------ font +- --------------------------------------------------------------------------------------

// let inc = document.querySelector("button.inc")
// let dec = document.querySelector("button.dec")
// let h1 = document.querySelector("h1")


// let fs = window.getComputedStyle(h1).fontSize
// fs = parseInt(fs.substring(0,(fs.length -2)))


// inc.onclick = function(){
//     fs += 10
//     h1.style.fontSize = fs + "px"
// }
// dec.onclick = function(){
//     fs -= 10
//     h1.style.fontSize = fs + "px"
// }

// -------------------------------------------------------form event--------------------------------------------------------------------------------------------------------------------------------------
// let uname = document.getElementById("uname")
// let pass = document.getElementById("pass")
// let button = document.querySelector("button")

// uname.addEventListener('input',function(event){
//    console.log(event.target.value);
//    console.log(event.target.value.length);
// });

// ------------------------------------------------------------KeyboardEvent-------------------------------------------------------------------------------------------------------------------------------------

// document.body.addEventListener('keydown',function(){
//    console.log("key was pressed");
//    console.log(event.key);
//    console.log(event.keyCode);
//    console.log(event.which);
// })
// document.body.addEventListener('keydown',function(e){
//    let keyCode = e.keyCode
//    if(keyCode == 13){
//       console.log(keyCode+"key was clicked");
//    }
// })
// document.body.addEventListener('keypress',function(){
//    console.log("key was pressed");
//    console.log(event.key);
//    console.log(event.keyCode);
//    console.log(event.which);
// })

// --------------------------------------------------------------------------------MouseEvent------------------------------------------------------------------------------------------------
// let btn = document.querySelector("button")
// let h1 = document.querySelector("h1")
// btn.addEventListener('mousedown',function(){
//       console.log("mouse clicked");
//    })
// btn.addEventListener('mouseup',function(){
//       console.log("mouse left ");
//    })
// btn.addEventListener('click',function(){
//       console.log("mouse is click ones");
//    })
// btn.addEventListener('dblclick',function(){
//       console.log("mouse is click twice");
//    })
//    h1.addEventListener('mouseover',function(){
//       console.log("mouse over");
//       h1.style.color = "rgb("+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+")"
//    })


// ------------------------------------------------ creat new element --------------------------------------------------------------------------------------------------------------------------------------------/
// var ul = document.querySelector('ul');

// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){

// var li = document.createElement('li')

// var textNode = document.createTextNode('List Item' + (ul.childElementCount + 1))

// li.appendChild(textNode);

// // li.id = "item" + (ul.childElementCount + 1);

// ul.appendChild(li);
// console.log(ul.appendChild(li))
// console.log(ul.childElementCount);
// });







// let ul = document.querySelector('ul')
// let btn = document.querySelector('button#add')
// let inputs = document.querySelector('input')
// let up = document.querySelector('button#update')
// let re = document.querySelector('button#remove')
// let cv = ''
// inputs.addEventListener('input',function(event){
//      cv = event.target.value
// }) 
// inputs.addEventListener('keyup',function(event){
//     if(event.keyCode === 13){
//         addlist()
//     }
// })
// function addlist(){
//     if(cv !== undefined && cv !== null && cv !== ''  ){
//         let li = document.createElement('li')
    
//     let textNode = document.createTextNode(cv)
//     li.appendChild(textNode)
//     li.id = "item" + (ul.childElementCount + 1)
//     ul.appendChild(li)
//     inputs.value = ''
//     cv = ''
// }else{
//         alert('please enter a value')
//      }
// } 
// btn.addEventListener('click',addlist)
// up.addEventListener('click',function(){
//     let firstel = ul.firstElementChild
//     let newlist = createNewNode()
//     ul.replaceChild(newlist,firstel)
// })

// re.addEventListener('click',function(){
//     let firstel = ul.firstElementChild
//     ul.removeChild(firstel)
// })



let ul = document.querySelector('ul');
let i = document.querySelector('i');
let btnAdd = document.querySelector('button#add');
let input = document.querySelector('input');
let btnUpdate = document.querySelector('button#update');
let btnRemove = document.querySelector('button#remove');





// Event listener for input to capture current value
let currentValue = '';
input.addEventListener('input', function(event) {
    currentValue = event.target.value;
});

// Function to add a new item to the list
function addListItem() {
    if (currentValue.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = currentValue;
        li.id = "item" + (ul.childElementCount + 1);

        // Create and append <i> tag
        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-trash', ); // Example class for Font Awesome icon
        icon.addEventListener('click', function() {
            ul.removeChild(li); // Remove the <li> when the icon is clicked
        });
        li.appendChild(icon);

        ul.appendChild(li);
        input.value = '';
        currentValue = '';
    } else {
        alert('Please enter a value');
    }
}

// Event listeners for add button and Enter key
btnAdd.addEventListener('click', addListItem);
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addListItem();
    }
});

// Function to update the first item in the list
btnUpdate.addEventListener('click', function() {
    let firstItem = ul.firstElementChild;
    if (firstItem) {
        firstItem.textContent = currentValue;

        // Check if icon is present, if not add it
        let icon = firstItem.querySelector('i');
        if (!icon) {
            icon = document.createElement('i');
            icon.classList.add('fas', 'fa-trash', ); // Example class for Font Awesome icon
            icon.addEventListener('click', function() {
                ul.removeChild(firstItem); // Remove the <li> when the icon is clicked
            });
            firstItem.appendChild(icon);
        }
    } else {
        alert('No items in the list to update');
    }
});

// Function to remove the first item from the list
btnRemove.addEventListener('click', function() {
    let firstItem = ul.firstElementChild;
    if (firstItem) {
        ul.removeChild(firstItem);
    } else {
        alert('No items in the list to remove');
    }
});
i.addEventListener('click', function() {
    let firstItem = ul.firstElementChild;
    if (firstItem) {
        ul.removeChild(firstItem);
    } else {
        alert('No items in the list to remove');
    }
});