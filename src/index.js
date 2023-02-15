import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/images/vintagebuttonupshirt.jpg';
// import GetPalette from './js/getpalette.js';

// Business Logic
  
function getPalette(color1, color2, color3) {
  const url = "http://colormind.io/api/";
  let data = {
    model : "default",
    input :[color1, color2, color3,"N","N"]
  };
  
  let palette;
  let request = new XMLHttpRequest();
  
  request.onreadystatechange = function(result) {
    if(request.readyState == 4 && request.status == 200) {
      palette = JSON.parse(request.responseText).result;
      console.log(palette);
      printElements(palette);
    } else {
      printError();
      console.log(`${request.status}${result}`);
    }
  };
  request.open("POST", url, true);
  request.send(JSON.stringify(data));
}

// UI Logic

function printElements(colours) {
  document.getElementById("results-div").innerHTML = "";
  for (let i = 0; i <= 4; i++) {
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background="rgb("+colours[i].toString()+")";
    div.innerHTML=colours[i];
    div.style.color="white";
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
  // return {r, g, b} // return an object
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
  const accentColor1 = document.getElementById("color2").value;
  const accentColor2 = document.getElementById("color3").value;

  let color1 = getRgb(keyColor);
  let color2 = getRgb(accentColor1);
  let color3 = getRgb(accentColor2);
  getPalette(color1, color2, color3);
  console.log(color1);
  console.log(color2);
  console.log(color3);
}

window.addEventListener("load", function() {

  document.querySelector("form#clothing").addEventListener("submit", handleFormSubmission);

  document.getElementById("shoe1").src="./assets/images/Nike-Dunk-Low-Reverse-Brazil.jpeg";
  document.getElementById("shoe2").src="./assets/images/vintageboots.jpeg";
  document.getElementById("hat1").src="./assets/images/flipsidehatsclassicecobeanie.jpeg";
  document.getElementById("hat2").src="./assets/images/neweracap.jpeg";
  document.getElementById("shirt1").src="./assets/images/davidvintagetshirt.jpg";
  document.getElementById("shirt2").src="./assets/images/vintagebuttonupshirt.jpg";
  document.getElementById("jacket1").src="./assets/images/outerwearwindbreaker.jpg";
  document.getElementById("jacket2").src="./assets/images/outerwearhoodie.jpg";
});