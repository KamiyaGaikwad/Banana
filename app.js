var btn1 = document.querySelector("#btnn"); 
var text = document.querySelector("#t1");
console.log(text);
console.log("This script is working");
   
function clickedbtn() {
    console.log("clicked");
    console.log("input",text.value);
    };

btn1.addEventListener("click", clickedbtn)
