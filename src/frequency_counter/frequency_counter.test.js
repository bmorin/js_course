const { countFrequency, getDuplicates } = require("./frequency_counter");

describe("Frequency Counter", () => {
  it("should count the frequency of each value in an array", () => {
    expect(countFrequency([1, 1, 2, 3])).toEqual({ 1: 2, 2: 1, 3: 1 });
    expect(countFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
    });
  });
});

describe("getDuplicates", () => {
  it("should return an array of all the duplicate values in an array", () => {
    expect(getDuplicates([1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9])).toEqual([
      1, 2, 9,
    ]);
  });
});
