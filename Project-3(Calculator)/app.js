const buttons = document.querySelectorAll("button");
const clear = document.getElementById("btn16");
const answer = document.getElementById("btn15");
const backSpace = document.getElementById("btn18");
const square = document.getElementById("btn17");
const input = document.getElementById("enter");
let str = "";
let InputContent = "";
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if(element === square){
        str= input.value * input.value;
        str = String(str);
    }
    else if (element !== clear && element !== answer && element !== backSpace) {
      str += element.value;
    } else if (element === clear) {
      str = "";
    } else if (element === answer && str !== "") {
      str = eval(str).toString();
    } else {
      str = str.slice(0, -1);
    }
    input.value = str;
  });
});
