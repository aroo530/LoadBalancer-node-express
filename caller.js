const axios = require('axios');

function caller() {
  axios.get('http://localhost:8080')
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Use a setInterval to create a loop with a delay of 1000 milliseconds
setInterval(caller, 1000);
