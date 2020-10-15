const request = require('request-promise');

const getDadJoke = async () => {
  const options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  };
  const joke = await request(options);
  return JSON.parse(joke).joke;
};

// 4.1
// getDadJoke().then((data) => console.log(data));

// 5
module.exports = { getDadJoke };
