let display = document.getElementById('display')
function appendtoDisplay (input){
    console.log(display.value += input)
}
function calculate(){
    display.value = eval(display.value)
    console.log(display.value = eval(display.value))
}
function clearDisplay(){
    display.value = ''
}
function dellast(){
    display.value = display.value.slice(0,-1)
}