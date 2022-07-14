let a_input = 2
let b_input = 4
let c_input = 8
function solve(){
    let determinent = (b_input*b_input)-4*(a_input)*(b_input)
    if(determinent>=0){
        document.getElementById("x-sol").innerText = (-b_input+(determinent))/(2*a_input)
        document.getElementById("y-sol").innerText = (-b_input-(determinent))/(2*a_input)
    }
    else{
        document.getElementById("x-sol").innerText = (-b_input)+"+ i"+abs(determinent)+"/"+(2*a_input);
        document.getElementById("y-sol").innerText = (-b_input)+"- i"+abs(determinent)+"/"+(2*a_input);
    }
    
}