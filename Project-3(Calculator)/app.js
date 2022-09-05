const one = document.getElementById('one');
const equal = document.getElementById('equal');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const mul = document.getElementById('mul');
const clear = document.getElementById('clear');
const input = document.getElementById('enter');
let str="";
one.addEventListener('click', function () {
    str = str + one.textContent;
    input.value = str;
})
two.addEventListener('click', function () {
    str += two.textContent;
    input.value = str;
})
three.addEventListener('click', function () {
    str += three.textContent;
    input.value = str;
})
four.addEventListener('click', function () {
    str += four.textContent;
    input.value = str;
})
five.addEventListener('click', function () {
    str += five.textContent;
    input.value = str;
})
six.addEventListener('click', function () {
    str += six.textContent;
    input.value = str;
})
seven.addEventListener('click', function () {
    str += seven.textContent;
    input.value = str;
})
eight.addEventListener('click', function () {
    str += eight.textContent;
    input.value = str;
})
nine.addEventListener('click', function () {
    str += nine.textContent;
    input.value = str;
})
zero.addEventListener('click', function () {
    str += zero.textContent;
    input.value = str;
})
plus.addEventListener('click', function () {
    str += plus.textContent;
    input.value = str;
})
minus.addEventListener('click', function () {
    str += minus.textContent;
    input.value = str;
})
divide.addEventListener('click', function () {
    str += divide.textContent;
    input.value = str;
})
mul.addEventListener('click', function () {
    str += mul.textContent;
    input.value = str;
})
clear.addEventListener('click', function () {
    str = "";
    input.value = str;
})
equal.addEventListener('click', function(){
    input.value = eval(str);
    str = eval(str);
})