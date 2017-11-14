/* global beforeAll test expect */
const makeDigits = require('../02_digits_again')

test("digits exists", () => {
  const digits = makeDigits(0, []);
  expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
