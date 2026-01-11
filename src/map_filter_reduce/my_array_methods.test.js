require("./my_array_methods");
const { addAllNumbers } = require("./my_array_methods");

describe("myArrayMethods", () => {
  it("filters an array", () => {
    const arrayWithOddNums = [1, 2, 3, 4, 5, 6, 7, 8];

    const removeOdds = (num) => num % 2 === 0;
    const filteredArr = arrayWithOddNums.myFilter(removeOdds);

    expect(arrayWithOddNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(filteredArr).toEqual([2, 4, 6, 8]);
    expect(arrayWithOddNums.myFilter((item) => item > 3)).toEqual([
      4, 5, 6, 7, 8,
    ]);
  });

  it("maps over an array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const doubleEachNum = (num) => num * 2;

    const filteredArr = arr.myMap(doubleEachNum);

    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(filteredArr).toEqual([2, 4, 6, 8, 10, 12, 14, 16]);
    expect(arr.myMap((item) => (item *= 3))).toEqual([
      3, 6, 9, 12, 15, 18, 21, 24,
    ]);
  });

  it("returns true if every item in an array matches a conditon", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const isEven = (num) => num % 2 === 0;
    const isLessThan100 = (num) => num < 100;
    expect(arr.myEvery(isEven)).toEqual(false);
    expect(arr.myEvery(isLessThan100)).toEqual(true);
  });

  it("returns true if some items in the array match a conditon", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const isEven = (num) => num % 2 === 0;
    expect(arr.mySome(isEven)).toEqual(true);
  });

  it("sums numbers in an array", () => {
    expect(addAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
  });
});
