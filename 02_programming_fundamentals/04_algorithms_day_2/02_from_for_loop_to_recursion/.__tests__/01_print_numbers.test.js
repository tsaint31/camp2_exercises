/* global beforeAll test expect */

test("print numbers from 0 to 100", () => {
  numbers = [];
  _consolelog = console.log;
  console.log = () => {};

  const printNumbers = require("../01_print_numbers");

  console.log = thing => numbers.push(thing);

  printNumbers(0);

  console.log = _consolelog;

  expect(numbers.length).toBe(101);
  expect(numbers[10]).toBe(10);
  expect(numbers[55]).toBe(55);
});
