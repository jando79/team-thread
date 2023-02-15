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
  
  request.onreadystatechange = function(result) {
    if(request.readyState == 4 && request.status == 200) {
      palette = JSON.parse(request.responseText).result;
      printElements(palette);
    } else {
      // printError();
    }
  };
  request.open("POST", url, true);
  request.send(JSON.stringify(data));
}

// UI Logic

function printElements(colours) {
  document.getElementById("results-div").innerHTML = "";
  let body = document.querySelector("body");
  body.style.background = "linear-gradient(rgb("+colours[0].toString()+"), white)";
  let header = document.querySelector("h1");
  header.style.background = "linear-gradient(to left top, rgb("+colours[0].toString()+"), white";
  let colorPick = document.getElementById("color-pick");
  colorPick.style.background = "linear-gradient(to left top, rgb("+colours[2].toString()+"), white";
  let gearDiv = document.getElementById("gear");
  gearDiv.style.background = "linear-gradient(to left top, rgb("+colours[2].toString()+"), white";
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


// function printError(request, apiResponse, city) {
//   document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
// }

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
});