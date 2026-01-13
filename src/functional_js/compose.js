/**
 * Composes a list of functions into a single function
 * @param  {function[]} fns javascript functions
 * @returns {function} a function that takes in an argument and passes it through all the functions
 */
const composeFunctions = (...fns) => {
	return (arg) => {
		return fns.reduce((acc, fn) => {
			return fn(acc);
		}, arg);
	};
};

/**
 * Transforms an item using a list of functions
 * @param {function[]} fns an array of functions
 * @param {*} item an item to transform
 * @returns {*} the transformed item in its original shape
 */
const transforms = (item) => {
	const removeJob = (obj) => {
		const { job, ...rest } = obj;
		return rest;
	};

	const addName = (obj) => {
		return { ...obj, name: obj.name.toLocaleUpperCase() };
	};

	const updateAge = (obj) => {
		return { ...obj, age: Number(obj.age) };
	};

	const fns = [removeJob, addName, updateAge];

	return fns.reduce((acc, fn) => {
		return fn(acc);
	}, item);
};

module.exports = {
	composeFunctions,
	transforms,
};
