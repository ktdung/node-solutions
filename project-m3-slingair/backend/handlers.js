"use strict";

// https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({ status: 200, data: Object.keys(flights) });
};

const getFlight = (req, res) => {
  console.log(req.params.flight);
  res.status(200).json({ status: 200, data: flights[req.params.flight] });
};

const addReservations = (req, res) => {
  const { flight, seat, givenName, surname, email } = req.body;

  // verify that user does not already have a reservation
  if (reservations.some((obj) => obj.email === email || obj.seat === seat)) {
    res.status(409).json({
      status: 409,
      data: req.body,
      message: "user already has a reservation",
    });
  } else {
    const newReservation = {
      id: uuidv4(),
      flight,
      seat,
      givenName,
      surname,
      email,
    };
    // create the reservation
    reservations.push(newReservation);
    // update the seat status
    flights[flight].forEach((obj, index) => {
      if (obj.id === seat) flights[flight][index].isAvailable = false;
    });
    res.status(201).json({ status: 201, data: newReservation });
  }
};

const getReservations = (req, res) => {
  res.status(200).json({ status: 200, data: reservations });
};

const getSingleReservation = (req, res) => {
  const { id } = req.params;
  const data = reservations.filter((item) => item.id === id);
  console.log(data);
  data.length
    ? res.status(200).json({ status: 200, data: data[0] })
    : res
        .status(404)
        .json({ status: 404, data: { id }, message: "Reservation not found." });
};

const deleteReservation = (req, res) => {
  const { id } = req.params;

  const itemIndex = reservations.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    reservations.splice(itemIndex);
    res.status(200).json({ status: 200, message: "Reservation deleted." });
  } else {
    res
      .status(404)
      .json({ status: 404, data: { id }, message: "reservation not found." });
  }
};

const updateReservation = (req, res) => {
  const { id } = req.params;

  const itemIndex = reservations.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    reservations[itemIndex] = { ...reservations[itemIndex], ...req.body };
    res.status(200).json({ status: 200, message: "Reservation updated." });
  } else {
    res
      .status(404)
      .json({ status: 404, data: { id }, message: "reservation not found." });
  }
};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
