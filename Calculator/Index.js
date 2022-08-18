const firstNumber = parseInt(prompt('Enter First Number'));
const secondNumber = parseInt(prompt('Enter Second Number'));
const operation = prompt('Enter Operation (+,-,%,/,*)');
alert((operation === '+' ? (a + b) : (operation == '-' ? a - b : (operation == '%' ? a % b : (operation == '/' ? a / b : (operation == '*' ? a * b : 'Invalid operator'))))));
