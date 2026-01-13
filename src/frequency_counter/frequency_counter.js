/**
 * countFrequency - counts the frequency of each value in an array
 * @param {array} arr [1, 1, 2, 3]
 * @returns {object} an object with the key being the value and the value being the frequency {1: 2, 2: 1, 3: 1}
 */
const countFrequency = (arr) => {
  let frequency = {};

  for (let value of arr) {
    if (frequency[value]) {
      frequency[value] += 1;
    } else {
      frequency[value] = 1;
    }
  }

  return frequency;
};

/**
 * getDuplicates returns all the duplicate values in an array
 * @param {array} arr [1,2,1,2,3,4,5,6,7,8,9,9]
 * @returns {array} an array of all the duplicate values in the array [1,2,9]
 */

const getDuplicates = (arr) => {
  let result = [];

  let seen = new Set();
  for (let value of arr) {
    if (seen.has(value) && !result.includes(value)) {
      result.push(value);
    } else {
      seen.add(value);
    }
  }

  return result;
};

module.exports = {
  countFrequency,
  getDuplicates,
};
