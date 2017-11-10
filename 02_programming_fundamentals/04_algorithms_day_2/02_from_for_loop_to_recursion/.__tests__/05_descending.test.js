/* global beforeAll test expect */

test("reversePrintArrayEntry exists", () => {
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

  const reversePrintArrayEntry = require("../05_descending");

  console.log = thing => output.push(thing);

  reversePrintArrayEntry(litteralDigits);

  console.log = _consolelog;

  expect(output).toEqual(litteralDigits.reverse());
});
