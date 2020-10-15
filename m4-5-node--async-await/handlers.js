const { getDadJoke } = require('./__solution/exercise-4.1');
const { getTronaldDumpQuote } = require('./__solution/exercise-4.2');
const { getGeekJoke } = require('./__solution/exercise-4.3');

const handleJoke = async (req, res) => {
  const { type } = req.params;
  const response = { status: 200 };
  switch (type) {
    case 'geek':
      response.joke = await getGeekJoke();
      break;
    case 'tronald':
      response.joke = await getTronaldDumpQuote();
      break;
    case 'dad':
      response.joke = await getDadJoke();
      break;
    default:
      response.status = 400;
      response.message = 'Unrecognized joke type.';
      break;
  }
  res.status(response.status).json(response);
};

module.exports = { handleJoke };
