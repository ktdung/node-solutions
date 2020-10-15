// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === 'string')) {
      resolve(array.map((word) => word.toUpperCase()));
    } else {
      reject('Error: Not all items in the array are strings!');
    }
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === 'string')) {
      resolve(array.sort());
    } else {
      reject('Error: Something went wrong with sorting words.');
    }
  });
};

makeAllCaps(['cucumber', 'tomatos', 'avocado'])
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(['cucumber', 44, true])
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
