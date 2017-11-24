const double = require("../01_double");

test("it should work", () => {
  expect(double([0, 1, 2, 3])).toEqual([0, 2, 4, 6]);
});
