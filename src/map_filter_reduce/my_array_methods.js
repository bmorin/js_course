/**
 *
 * PLEASE DO NOT USE THE BUILT IN METHODS FOR THE FOLLOWING EXERCISES
 */
Array.prototype.myFilter = function (callBack) {
  const result = [];
  for (const item of this) {
    if (callBack(item)) {
      result.push(item);
    }
  }
  return result;
};

Array.prototype.myMap = function (callBack) {
  const result = [];
  for (const item of this) {
    result.push(callBack(item));
  }
  return result;
};

Array.prototype.myEvery = function (callBack) {
  for (const item of this) {
    if (!callBack(item)) {
      return false;
    }
  }
  return true;
};

Array.prototype.mySome = function (callBack) {
  for (const item of this) {
    if (callBack(item)) {
      return true;
    }
  }
  return false;
};

const addAllNumbers = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

module.exports = {
  addAllNumbers,
};
