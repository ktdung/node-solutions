// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require('./exercise-3.1');
const { getPositionFromAddress } = require('./exercise-3.2');

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

// VERSION 1 (write a new Promise)
// ----------------------------------------------
// const getDistanceFromIss = (address) => {
//   return new Promise((resolve) => {
//     let positions = {};
//     getPositionFromAddress(address)
//       .then((pos1) => (positions.pos1 = pos1))
//       .then(() => getIssPosition())
//       .then((pos2) => (positions.pos2 = pos2))
//       .then(() => {
//         resolve(getDistance(positions.pos1, positions.pos2));
//       });
//   });
// };
// getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));
// ----------------------------------------------

// VERSION 2 (return an existing promise)
// ----------------------------------------------
// this version could lead to callback hell
// const getDistanceFromIss = (address) => {
//   return getPositionFromAddress(address).then((pos1) =>
//     getIssPosition().then((pos2) => getDistance(pos1, pos2))
//   );
// };
// getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ----------------------------------------------

// VERSION 3 (combo of V1 and V2)
// ----------------------------------------------
// const getDistanceFromIss = (address) => {
//   let pos1 = {};
//   return getPositionFromAddress(address)
//     .then((data) => (pos1 = data))
//     .then(() => getIssPosition())
//     .then((pos2) => getDistance(pos1, pos2));
// };
// getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ----------------------------------------------

// VERSION 4 (Use Promise.all)
// ----------------------------------------------
// Promise.all([
//   getIssPosition(),
//   getPositionFromAddress(
//     '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
//   ),
// ])
//   .then((data) => getDistance(data[0], data[1]))
//   .then((dist) => console.log(dist));
// ----------------------------------------------

// VERSION 5 (Use async/await)
// ----------------------------------------------
// const getDistanceFromIss = async (address) => {
//   const pos1 = await getIssPosition();
//   const pos2 = await getPositionFromAddress(address);

//   return getDistance(pos1, pos2);
// };
// getDistanceFromIss(
//   '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
// ).then((data) => console.log(data));
// ----------------------------------------------

// VERSION 6 (Use async/await and Promise.all)
// ----------------------------------------------
// const getDistanceFromIss = async (address) => {
//   const [pos1, pos2] = await Promise.all([
//     getIssPosition(),
//     getPositionFromAddress(address),
//   ]);
//   return getDistance(pos1, pos2);
// };
// getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ----------------------------------------------
