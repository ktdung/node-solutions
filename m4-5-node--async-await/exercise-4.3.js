const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const joke = await request('https://geek-jokes.sameerkumar.website/api');
    const parsedJoke = JSON.parse(joke);
    return parsedJoke;
  } catch (err) {
    console.log(err);
  }
};

// 4.3
// getGeekJoke().then(data => console.log(data));

// 5
module.exports = { getGeekJoke };
