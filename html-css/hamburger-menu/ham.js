// let img = document.querySelector("img")
// let ul = document.querySelector("ul")

// img.onclick = function(){
//     ul.style.opacity = "1"
//     ul.style.transform = "translateX(0)";
//     // ul.style.backgroundColor = "red"
// }
let img = document.querySelector("img");
let sidebar = document.getElementById("sidebar");


img.addEventListener("click", function() {
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.remove('hide');
        sidebar.classList.add('show');
    }
});