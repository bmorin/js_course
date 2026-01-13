const { mergeSort, binarySearch, quickSort } = require('./sorting_searching');

describe('merge sort', () => {
    it('sorts an unsorted array', () => {
        const unsortedArr = [10, 9, 1, 3, 4, 6, 7, 5, 8, 2];
        expect(mergeSort(unsortedArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

describe('quick sort', () => {
    it('sorts an unsorted array', () => {
        const unsortedArr = [10, 9, 1, 3, 4, 6, 7, 5, 8, 2];
        expect(quickSort(unsortedArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

describe('binary search', () => {
    it('finds the index of an element in an array', () => {
        const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(binarySearch(sortedArr, 3)).toEqual(2);
    });

    it('returns -1 if an element is not in the array', () => {
        const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(binarySearch(sortedArr, 12)).toEqual(-1);
    });
});
