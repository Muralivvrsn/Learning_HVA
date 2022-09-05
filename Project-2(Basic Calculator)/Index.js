// DECLARATION OF VARIABLES
const firstNumber = parseInt(prompt('Enter First Number'));
const secondNumber = parseInt(prompt('Enter Second Number'));
const operation = prompt('Enter Operation (+,-,%,/,*)');

// USING FUNCTIONS AND IF ELSE STATEMENTS

// IF ELSE STATEMENTS
if (operation === '+')
    sum(firstNumber, secondNumber);
else if (operation === '-')
    subtract(firstNumber, secondNumber);
else if (operation === '*')
    multiply(firstNumber, secondNumber);
else if (operation === '/')
    divide(firstNumber, secondNumber);
else if (operation === '%')
    modulo(firstNumber, secondNumber);
else
    alert('Invalid operation');

//FUNCTIONS

function sum(a, b) {
    alert(a + b);
}
function subtract(a, b) {
    alert(a - b);
}
function multiply(a, b) {
    alert(a * b);
}
function divide(a, b) {
    alert(a / b);
}
function modulo(a, b) {
    alert(a % b);
}


// USING TERNARY OPERATOR
// alert((operation === '+' ? (firstNumber + secondNumber) :
//     (operation == '-' ? firstNumber - secondNumber :
//         (operation == '%' ? firstNumber % secondNumber :
//             (operation == '/' ? firstNumber / secondNumber :
//                 (operation == '*' ? firstNumber * secondNumber : 'Invalid operator'))))));


// Using if else
// if (operation === '+')
//     alert(firstNumber + secondNumber);
// else if (operation === '-')
//     alert(firstNumber - secondNumber);
// else if (operation === '*')
//     alert(firstNumber * secondNumber);
// else if (operation === '/')
//     alert(firstNumber / secondNumber);
// else if (operation === '%')
//     alert(firstNumber % secondNumber);
// else
//     alert('Invalid operation');

