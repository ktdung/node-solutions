const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

const getClientIndex = (id) => {
  return clients.findIndex((client) => client.id === id);
};

const handleAllClients = (req, res) => {
  res.status(200).json({ status: 200, data: clients });
};

const handleClient = (req, res) => {
  const { id } = req.params;
  const client = clients.filter((client) => client.id === id)[0];
  if (client) {
    res.status(200).json({ status: 200, data: client });
  } else {
    res.status(404).json({ status: 404, data: 'Invalid client id.' });
  }
};

const handleAddClient = (req, res) => {
  const newClient = req.body;
  if (clients.filter((client) => client.email === newClient.email).length) {
    res.status(400).json({
      status: 400,
      data: req.body,
      message: 'client email already in database.',
    });
  } else {
    newClient.id = uuidv4();
    clients.push(newClient);
    res.status(201).json({ status: 201, data: newClient });
  }
};

const handleDeleteClient = (req, res) => {
  const { id } = req.params;
  const clientIndex = getClientIndex(id);
  if (!!clientIndex) {
    clients.splice(clientIndex, 1);
    res
      .status(200)
      .json({ status: 200, data: { id }, message: 'client deleted' });
  } else {
    res.status(404).json({ status: 404, data: 'Invalid client id.' });
  }
};

module.exports = {
  handleAllClients,
  handleClient,
  handleAddClient,
  handleDeleteClient,
};
