import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ThreadService from './js/threads.js';

// Business Logic

async function getThreads(city) {
  const response = await ThreadService.getThreads(city);
  if (response.main) {
    printElements(response, city);
  } else {
    printError(response, city);
  }
}

// <!-- const favoriteColor = document.getElementById("color").value; -->