import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import ThreadService from './js/thread-service.js';

// Business Logic

function getPalette() {
  const url = "http://colormind.io/api/";
  let data = {
    model : "default",
    input : [[44,43,44],[90,83,82],"N","N","N"]
  }

  let request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      let palette = JSON.parse(request.responseText).result;
      console.log(palette);
    } else {
      console.log(`${request.status}`);
    }
  }

  request.open("POST", url, true);
  request.send(JSON.stringify(data));

}

//User Interface Logic

// function printElements() {
//   getPalette();
// }

// function printError() {

// }