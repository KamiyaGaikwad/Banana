var btn1 = document.querySelector("#btnn"); 
var text = document.querySelector("#t1");
var outp = document.querySelector("#output");
function clickedbtn() {
    console.log("clicked");
    console.log("input",text.value);
    outp.innerText = "output " + text.value;
    var x = outp.innerText
    console.log(x)

    };

btn1.addEventListener("click", clickedbtn)
