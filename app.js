var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/oldenglish.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("there is something wrong in the server please tyr fter some time");
}

function clickHandler() {
  var textInput = txtinput.value;

  fetch(getTranslationURL(textInput))
    .then((response) => response.json())
    .then((json) => {
      var traslatedText = json.contents.translated;
      outputDiv.innerText = traslatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
