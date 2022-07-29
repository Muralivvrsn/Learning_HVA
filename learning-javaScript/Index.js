let a_input = 2
let b_input = 4
let c_input = 8
function read(){
    a_input = document.getElementById("a-input");
    b_input = document.getElementById("b-input");
    c_input = document.getElementById("c-input");
}
function solve(){
    let determinent = (b_input*b_input)-4*(a_input)*(b_input)
    if(determinent>=0){
        document.getElementById("x-sol").innerHTML = (-b_input+(determinent))/(2*a_input)
        document.getElementById("y-sol").innerHTML = (-b_input-(determinent))/(2*a_input)
    }
    else{
        document.getElementById("x-sol").innerHTML = (-b_input)+"+ i"+abs(determinent)+"/"+(2*a_input);
        document.getElementById("y-sol").innerHTML = (-b_input)+"- i"+abs(determinent)+"/"+(2*a_input);
    }
    
}