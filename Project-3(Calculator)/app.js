const buttons = document.querySelectorAll('button');
const clear = document.getElementById('btn16');
const answer = document.getElementById('btn15');
const backSpace = document.getElementById('btn18');
const input = document.getElementById('enter');
let str = "";
function changeColor(element) {
    element.style.backgroundColor = 'white';
}
function changeColor1(element){
    element.style.backgroundColor = 'red';
    setTimeout(changeColor(element),1000);
}
buttons.forEach(element => {
    element.addEventListener('click', () => {
        setTimeout(changeColor1(element),1000);
        if(element!==clear && element!==answer && element!==backSpace){
            str+=element.textContent;
        }
        else if(element===clear){
            str="";
        }
        else if(element===answer){
            str=eval(str);
        }
        else{
            str=str.slice(0,-1);
        }
        input.value = str;
    })
});