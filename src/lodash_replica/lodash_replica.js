/**
 * Returns a flattened array
 *
 * @param {array} arr a nested OR not nested array ex: [1, [2,3], [4, [5]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const myFlatMap = (arr) => {
    let result = [];
    const flatten = (input) => {
        for (let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i])) {
                flatten(input[i]);
            } else {
                result.push(input[i]);
            }
        }
    };
    flatten(arr);
    return result;
};

/**
 * Returns an array combining the initial array with the other values
 *
 * @param {array} arr an array
 * @param {array} values destructured series of arrays ex: [1], [2], [3]
 * @returns {array} ex: [1,2,3]
 */
const myConcat = (arr, ...values) => {
    let result = arr.slice();
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
            result.push(values[i][j]);
        }
    }
    return result;
};

/**
 * Returns an array with all rejected items removed
 *
 * @param {array} arr an array
 * @param {any} itemToReject value which should be removed from arr
 * @returns {array}
 */
const myReject = (arr, itemToReject) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== itemToReject) {
            result.push(arr[i]);
        }
    }
    return result;
};

module.exports = {
    myFlatMap,
    myConcat,
    myReject,
};
