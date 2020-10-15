const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const options = {
      uri: 'https://api.tronalddump.io/random/quote',
      headers: {
        Accept: 'application/json',
      },
    };
    const quoteObj = await request(options);
    const parsedQuote = JSON.parse(quoteObj);
    return parsedQuote.value;
  } catch (err) {
    console.log(err);
  }
};

// 4.2
getTronaldDumpQuote().then((data) => console.log(data));

// 5
module.exports = { getTronaldDumpQuote };
