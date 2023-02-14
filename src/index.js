import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import GetPalette from './js/getpalette.js';

// Business Logic
  
function getPalette(color1, color2, color3) {
  const url = "http://colormind.io/api/";
  let data = {
    model : "default",
    input : `[${color1}, ${color2}, ${color3},"N","N"]`
  };
  
  let palette;
  let request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      palette = JSON.parse(request.responseText).result;
      console.log(palette);
      printElements(palette);
    } else {
      printError();
      console.log(`${request.status}`);
    }
  };
  request.open("POST", url, true);
  request.send(JSON.stringify(data));
}

// UI Logic

function printElements(palette) {
  document.getElementById("results-div").innerText = `Here's the palette ${palette}!!`;
}

function printError(request, apiResponse, city) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function getRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // return {r, g, b} // return an object
  return [ r, g, b ];
}

function hideResults() {
  document.getElementById("hat-selection").setAttribute("class", "hidden");
  document.getElementById("inner-wear-selection").setAttribute("class", "hidden");
  document.getElementById("outer-wear-selection").setAttribute("class", "hidden");
  document.getElementById("shoes").setAttribute("class", "hidden");
}

function handleFormSubmission(event) {
  event.preventDefault();
  hideResults();
  
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

  // const shoeSize = parseInt(document.querySelector('#shoes').value);
  // const hatSize = parseInt(document.querySelector('#hat-fit').value);
  // const clothingSize = document.getElementById("clothing-size").value;
  // const userSelections = document.querySelectorAll("input[name=gear]:checked");
  // const userSelectionsArray = Array.from(userSelections);

  // userSelectionsArray.forEach(function(element) {
  // });

  const gear = document.getElementsByClassName('clothing');
  for (let i=0; i < gear.length; ++i) {
      if (shoe[i].checked) {
        inputTopping += parseInt(pizzaToppings[i].value);
      }
    }

}



window.addEventListener("load", function() {
  document.querySelector("form#clothing").addEventListener("submit", handleFormSubmission);
});