let player = {
    speed: 100
    , x: 100
    , y: 100
}
window.addEventListener('DOMContentLoaded', build);
document.addEventListener('keydown', function (e) {
    let key = e.keyCode;
    console.log(key);
    if (key === 37) {
        player.x -= player.speed
    }
    if (key === 38) {
        player.y -= player.speed
    }
    if (key === 39) {
        player.x += player.speed
    }
    if (key === 40) {
        player.y += player.speed
    }
    player.el.style.left = player.x + "px";
    player.el.style.top = player.y + "px";
})

function build() {
    player.el = document.createElement('div');
    player.x = 100;
    player.y = 100;
    player.el.style.position = "absolute";
    player.el.style.width = "100px";
    player.el.style.height = "100px";
    player.el.style.backgroundColor = "red";
    player.el.style.top = player.x + "px";
    player.el.style.left = player.y + "px";
    document.body.appendChild(player.el);
}



// let d = new Date();
// let val;
// //d = Date.now();
// d = new Date(2020, 11, 15, 5, 10, 30, 40);
// //d = new Date(10000000000000);
// //d = d.toString();
// //d = d.toDateString();
// //d = new Date("2020-12-31");
// //d = new Date("2020/12/27");
// val = d.getDate();
// val = d.getDay(); //0-6
// val = d.getTime();
// val = d.getMilliseconds();
// val = d.getUTCMilliseconds();
// val = d.getHours(); //local time
// val = d.getUTCHours(); //universal time
// let days = 100;
// const newDate = new Date(Date.now() + (days * 24 * 60 * 60 * 1000));
// console.log(newDate);
// console.log(val);



