/* global beforeAll test expect */

test("printArrayEntry exists", () => {
  const litteralDigits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  output = [];
  _consolelog = console.log;
  console.log = () => {};

  const printArrayEntry = require("../03_iteration");

  console.log = thing => output.push(thing);

  printArrayEntry(litteralDigits, 0);

  console.log = _consolelog;

  expect(output).toEqual(litteralDigits);
});
