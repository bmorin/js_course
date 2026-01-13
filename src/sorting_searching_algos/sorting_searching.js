/**
 *
 * @param {number} target number to find in array
 * @param {array} arr array of numbers
 * @returns {number} index of target in array
 */

const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};

/**
 *
 * @param {array} arr of numbers
 * @returns {array} sorted array
 */

const mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	const merged = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			merged.push(left[i]);
			i++;
		} else {
			merged.push(right[j]);
			j++;
		}
	}
	return [...merged, ...left.slice(i), ...right.slice(j)];
};

/**
 *
 * @param {array} arr of numbers
 * @returns {array} sorted array
 */

const quickSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = {
	binarySearch,
	mergeSort,
	quickSort,
};
