
const squareDigits = require("../square_digits");

test("It should work for single digits ", () => {
  expect(squareDigits(1)).toBe(1);
  expect(squareDigits(3)).toBe(9);
  expect(squareDigits(5)).toBe(25);
  expect(squareDigits(9)).toBe(81);
})

test("It should work for double digits ", () => {
  expect(squareDigits(11)).toBe(11);
  expect(squareDigits(66)).toBe(3636);
  expect(squareDigits(99)).toBe(8181);
})

test("It should work for complex digits ", () => {
  expect(squareDigits(9129)).toBe(811481);
  expect(squareDigits(12345)).toBe(1491625);
  expect(squareDigits(54321)).toBe(2516941);
})
