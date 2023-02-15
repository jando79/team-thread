import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import GetPalette from './js/getpalette.js';

// Business Logic
  
// function getPalette(color1, color2, color3) {
//   const url = "http://colormind.io/api/";
//   let data = {
//     model : "default",
//     input : `[${color1}, ${color2}, ${color3},"N","N"]`
//   };
  
//   let palette;
//   let request = new XMLHttpRequest();
  
//   request.onreadystatechange = function() {
//     if(request.readyState == 4 && request.status == 200) {
//       palette = JSON.parse(request.responseText).result;
//       console.log(palette);
//       printElements(palette);
//     } else {
//       printError();
//       console.log(`${request.status}`);
//     }
//   };
//   request.open("POST", url, true);
//   request.send(JSON.stringify(data));
// }

// UI Logic

// function printElements(palette) {
//   document.getElementById("results-div").innerText = `Here's the palette ${palette}!!`;
// }

// function printError(request, apiResponse, city) {
//   document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
// }

// function getRgb(hex) {
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);
//   // return {r, g, b} // return an object
//   return [ r, g, b ];
// }

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
  }

window.addEventListener("load", function() {
  document.querySelector("form#clothing").addEventListener("submit", handleFormSubmission);
});