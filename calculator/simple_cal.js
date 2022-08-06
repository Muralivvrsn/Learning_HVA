let a = parseInt(prompt("Enter 1st number"));
let b = parseInt(prompt("Enter 2nd number"));
let c = prompt("Enter operation");
if (c === "+") {
    alert(a + b);
}
else if (c === "-") {
    alert(a - b);
}
else if (c === "/") {
    alert(a / b);
}
else if (c === "*") {
    alert(a * b);
}
else if (c === "%") {
    alert(a % b);
}
else {
    alert("Invalid operation");
}
