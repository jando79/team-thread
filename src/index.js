import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic
  
function getPalette(color) {
  const url = "http://colormind.io/api/";
  let data = {
    model : "default",
    input :[color,"N","N","N","N"]
  };
  
  let palette;
  let request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      palette = JSON.parse(request.responseText).result;
      printElements(palette);
      printPalette(palette);
    } else {
      printError();
    }
  };
  request.open("POST", url, true);
  request.send(JSON.stringify(data));
}

// UI Logic

function printElements(colours) {
  let body = document.querySelector("body");
  body.style.background = "linear-gradient(rgb("+colours[0].toString()+"), white)";
  let title = document.getElementById("title");
  title.style.background = "linear-gradient(to left top, rgb("+colours[1].toString()+"), white";
  let submitButton = document.getElementById("submit-button");
  submitButton.style.background = "linear-gradient(to left top, rgb("+colours[1].toString()+"), white";
  let form = document.getElementById("clothing");
  form.style.background = "linear-gradient(to left top, rgb("+colours[2].toString()+"), white";
  let results = document.getElementById("results-div");
  results.style.background = "linear-gradient(to left top, rgb("+colours[3].toString()+"), white";
  let shoeDiv = document.getElementById("shoe-selection");
  shoeDiv.style.background = "linear-gradient(to left top, rgb("+colours[4].toString()+"), white";
  let hatDiv = document.getElementById("hat-selection");
  hatDiv.style.background = "linear-gradient(to left top, rgb("+colours[4].toString()+"), white";
  let innerWearDiv = document.getElementById("inner-wear-selection");
  innerWearDiv.style.background = "linear-gradient(to left top, rgb("+colours[4].toString()+"), white";
  let outerWearDiv = document.getElementById("outer-wear-selection");
  outerWearDiv.style.background = "linear-gradient(to left top, rgb("+colours[4].toString()+"), white";
}

function printPalette(palette) {
  let resultsDiv = document.getElementById("results-div");
  resultsDiv.innerHTML = "";
  let h4 = document.createElement("h4");
  h4.append("your personalized color palette:");
  resultsDiv.prepend(h4);
  for (let i = 0; i <= 4; i++) {
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.display = "inline-block";
    div.style.background="rgb("+palette[i].toString()+")";
    document.getElementById("results-div").appendChild(div);
  }
}

function printError() {
  document.getElementById("results-div").innerText = `There was an error accessing the data.`;
}

function getRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [ r, g, b ];
}

function hideResults() {
  document.getElementById("shoe-selection").setAttribute("class", "hidden");
  document.getElementById("hat-selection").setAttribute("class", "hidden");
  document.getElementById("inner-wear-selection").setAttribute("class", "hidden");
  document.getElementById("outer-wear-selection").setAttribute("class", "hidden");
}

function showResults() {
  let shoeSelection = document.getElementById("1");
  let hatSelection = document.getElementById("2");
  let innerWearSelection = document.getElementById("3");
  let outerWearSelection = document.getElementById("4");

  if (shoeSelection.checked === true) {
    document.querySelector('#shoe-selection').removeAttribute("class");
  } if (hatSelection.checked === true) {
    document.querySelector('#hat-selection').removeAttribute("class");
  } if (innerWearSelection.checked === true) {
    document.querySelector('#inner-wear-selection').removeAttribute("class");
  } if (outerWearSelection.checked === true) {
    document.querySelector('#outer-wear-selection').removeAttribute("class");
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  hideResults();
  showResults();
  const keyColor = document.getElementById("color1").value;
  let color = getRgb(keyColor);
  getPalette(color);
}

window.addEventListener("load", function() {

  document.querySelector("form#clothing").addEventListener("submit", handleFormSubmission);

  document.getElementById("shoe1").src="./assets/images/converse.png";
  document.getElementById("shoe2").src="./assets/images/boots.png";
  document.getElementById("hat1").src="./assets/images/beanie.png";
  document.getElementById("hat2").src="./assets/images/newerahats.png";
  document.getElementById("shirt1").src="./assets/images/davidtshirt.png";
  document.getElementById("shirt2").src="./assets/images/outwearbuttonup.png";
  document.getElementById("jacket1").src="./assets/images/windbreaker copy.png";
  document.getElementById("jacket2").src="./assets/images/hoodie.png";
  
  document.getElementById("christopherWalkin").src="./assets/images/Christopher_Walkin.png";
});