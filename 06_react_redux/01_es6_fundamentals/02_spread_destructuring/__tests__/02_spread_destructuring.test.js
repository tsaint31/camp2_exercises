const spread = require("../02_spread_destructuring.js");

describe("a block of tests", function() {

  test("launch GO", function() {
    // expect something
    const result = spread.go({ speed: 5 });
    expect(result).toBe(undefined);
  });

  test("launch lastIndexOf", function() {
    // expect something
    const result = spread.lastIndexOf([1, 2, 1, 2], 2);
    expect(result).toBe(3);
  });

  test("launch copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5])", function() {
    // expect something
    const result = spread.copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]);
    expect(result).toEqual([ 1, 2, 3, 4, 5, 6 ]);
  });

  test("launch replace(testArray, 2, 4, [3, 4, 5])", function() {
    // expect something
    const testArray = [1, 2, 100, 100, 6];
    const result = spread.replace(testArray, 2, 4, [3, 4, 5]);
    expect(result).toBe(undefined);
  });

});
