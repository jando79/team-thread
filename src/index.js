import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ThreadService from './js/thread-service.js';




// UI Logic




function handleFormSubmission(event) {
  event.preventDefault();
  // collecting the color selected by user
  const keyColor = document.getElementById("color1").value;
  const accentColor1 = document.getElementById("color2").value;
  const accentColor2 = document.getElementById("color3").value;
  // collect info from shoe and hat size boxes
  const shoeSize = parseInt(document.querySelector('#shoes').value);
  const hatSize = parseInt(document.querySelector('#hat-fit').value);
  // collect clothing size
  const clothingSize = document.getElementById("clothing-size").value;
  // collect check box info
  const userSelections = document.querySelectorAll("input[name=gear]:checked");
  // we need to add an array
}

window.addEventListener("load", function() {
  document.querySelector("form#clothing").addEventListener("submit", handleFormSubmission);
});