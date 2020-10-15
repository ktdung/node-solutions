'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {
  handleAllClients,
  handleClient,
  handleAddClient,
  handleDeleteClient,
} = require('./handlers/clientHandlers');

const {
  handleGetWord,
  handleGetNewWord,
  handleGuess,
} = require('./handlers/hangmanHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Exercise 2
  .get('/clients', handleAllClients)
  .get('/clients/:id', handleClient)
  .post('/clients', handleAddClient)
  .delete('/clients/:id', handleDeleteClient)

  // Exercise 3
  .get('/hangman/word/:id', handleGetWord) // test endpoint
  .get('/hangman/word', handleGetNewWord)
  .get('/hangman/guess/:id/:letter', handleGuess)

  .listen(8000, () => console.log(`Listening on port 8000`));
