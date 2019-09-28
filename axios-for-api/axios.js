// Grab the axios package...
var axios = require("axios");
var myWord = "home";

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios
  .get("http://api.wordnik.com/v4/word.json/" + myWord + "/definitions?api_key=zb8xgmao0hgd9buayof0cvwi30v66g6ejz1mwarlxizadjq3v")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    var myAnswer = response.data[1].text
    console.log(myAnswer);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data.message);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
 
