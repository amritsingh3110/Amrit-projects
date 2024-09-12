let myform = document.querySelector('form')
let input = document.querySelector('input')
let errors = document.querySelector('.error')

const required = ["email","username"]
myform.addEventListener('submit',Validation)

function Validation(e){
    console.log(e);
    e.prevent
    
}