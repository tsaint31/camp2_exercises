/* global beforeAll test expect */

test("printOddArrayEntry exists", () => {
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

  const printOddArrayEntry = require("../04_filtering");

  console.log = thing => output.push(thing);

  printOddArrayEntry(litteralDigits, 0);

  console.log = _consolelog;

  expect(output).toEqual(["one", "three", "five", "seven", "nine"]);
});
