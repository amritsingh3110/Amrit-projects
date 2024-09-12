// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const output = document.querySelector('.output');
// const output1 = document.createElement('div');
// output1.classList.add('main');
// const baseurl = 'https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec';
// input.classList.add('box')
// input.setAttribute('name','nameOG')
// input.value = 'hello jii'
// output.append(input)
// for (let i = 0; i <= 10; i++) {
//     const myinput = document.createElement('input')
//     myinput.setAttribute('type','text')
//     myinput.setAttribute('placeholder','value'+i)
//     myinput.classList.add('box')
//     myinput.setAttribute('name','name'+(i+1))
//     myinput.value= 'value'+i
//     output.append(myinput)
// }
// output.append(btn)
// output.append(output1)
// btn.classList.add('box')

// // input.classList.add('box');
// btn.addEventListener('click',loaddata)
// function loaddata(){
//     console.log('ready');
//     let url = baseurl + '?'
//     const eles = output.querySelectorAll('input')
//     let temparr = []
//     eles.forEach((el)=> {
//         console.log(el.name);
//         let temp = `${el.name}=${el.value}`
//         temparr.push(temp)
         
       
//     }); 
//     let requrl = temparr.join('&')
//     url += requrl
//     console.log(url);
//     getdata(url)
// }

// function getdata(url){
// fetch(url)
// .then(res => res.json())
// .then(data => {
//     outputob(data)
// })
// }


// function outputob(ob){
//     output1.innerHTML = ''
//     for(const prop in ob){
//        output1.innerHTML += `${prop} : ${ob[prop]}<br>`;
//     }

// }




const btn = document.querySelector('button');
const inpEle = document.querySelector('input');
const output = document.querySelector('.output');
const myForm = document.createElement('form');
document.body.append(myForm);
const output1 = document.createElement('div');
output1.classList.add('main');
const baseUrl = 'https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec';
inpEle.classList.add('box');
inpEle.setAttribute('name', 'nameOG');
inpEle.value = 'Hello jiiii';
myForm.append(inpEle);
for (let i = 0; i < 10; i++) {
    const myInput = document.createElement('input');
    myInput.setAttribute('type', 'text');
    myInput.setAttribute('placeholder', 'Value ' + i);
    myInput.classList.add('box');
    myInput.setAttribute('name', 'name' + (i + 1));
    myInput.value = 'Value ' + i;
    myForm.append(myInput);
}
myForm.append(btn);
output.append(output1);
btn.classList.add('box');
btn.addEventListener('click', getPost);
 
function loadData(e) {
    e.preventDefault();
    console.log('ready');
    let formData = new FormData(myForm);
    let data = [...formData.entries()];
    console.log(data);
    const para = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`);
    const res = para.join('&');
    console.log(res);
    let url = baseUrl + '?' + res;
    getData(url);
}
 
function getPost(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    let formData = new FormData(myForm);
    let body = {};
    formData.forEach((val, key) => {
        body[key] = val;
    })
    console.log(body);
    const opts = {
        method: 'POST',
        myHeaders,
        body: JSON.stringify(body)
    }
    fetch(baseUrl, opts)
        .then(res => res.json())
        .then(data => {
            outputObj(data);
        })
 
}
 
function getData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            outputObj(data);
        })
}
 
function outputObj(obj) {
    console.log(obj);
    output1.innerHTML = '';
    for (const prop in obj) {
        output1.innerHTML += `${prop} : ${obj[prop]}<br>`;
    }
}