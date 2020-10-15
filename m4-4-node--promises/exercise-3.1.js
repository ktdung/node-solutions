// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => {
      // Parse as JSON
      const issLocation = JSON.parse(response);
      // Return object with lat and lng
      return {
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude,
      };
    })
    .then((data) => {
      return data; // return it to continue the data down the chain of Promises (if needed)
    })
    .catch((err) => console.log('Error: ', err));
};

// getIssPosition().then((response) => console.log(response));

module.exports = { getIssPosition };
