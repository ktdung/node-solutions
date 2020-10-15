const { words } = require('../data/words');

const getWord = (id) => {
  return words.filter((word) => word.id === id)[0] || null;
};

const handleGetWord = (req, res) => {
  const { id } = req.params;
  const wordObj = getWord(id);

  wordObj
    ? res.status(200).json({ status: 200, data: wordObj })
    : res
        .status(404)
        .json({ status: 404, data: { id }, message: 'word not found.' });
};

const handleGetNewWord = (req, res) => {
  const newWord = words[Math.floor(Math.random() * words.length)];
  delete newWord.word;
  res.status(200).json({ status: 200, data: newWord });
};

const handleGuess = (req, res) => {
  const { id, letter } = req.params;
  const wordObj = getWord(id);
  const arr = wordObj && wordObj.word.split('').map((ltr) => ltr === letter);

  wordObj
    ? res
        .status(200)
        .json({ status: 200, data: { ...req.params, letterPlacement: arr } })
    : res
        .status(404)
        .json({ status: 404, data: { id }, message: 'word not found.' });
};

module.exports = { handleGetWord, handleGetNewWord, handleGuess };
