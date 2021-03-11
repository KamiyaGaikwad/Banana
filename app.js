var btn1 = document.querySelector("#btnn"); 
var text = document.querySelector("#t1");
var outp = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructurl(intput){
    return serverURL + "?text=" + text.value;
};

function errorhandler(error){
    console.log("error occured",error);
    alert("something wrong with server! Please try again");
};

function clickedbtn(){
    var intput = text.value;
    fetch(constructurl(intput))
    .then(response => response.json())
    .then(json => {
        var translated1 = json.contents.translated;
        outp.innerText = translated1;
    
    })
    .catch(errorhandler)
    };
btn1.addEventListener("click", clickedbtn)
