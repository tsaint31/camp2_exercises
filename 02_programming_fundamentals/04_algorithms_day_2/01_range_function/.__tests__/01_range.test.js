const range = require("../01_range");

test ("it should work in ascending order", () => {
  expect(range(1, 4)).toEqual([1, 2, 3, 4]);
});

test ("it should work in descending order", () => {
  expect(range(4, 1)).toEqual([4, 3, 2, 1]);
});
