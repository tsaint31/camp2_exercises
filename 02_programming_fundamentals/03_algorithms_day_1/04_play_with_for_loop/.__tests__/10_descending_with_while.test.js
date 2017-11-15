/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../10_descending_with_while.js"), "utf8", function(
      err,
      text
    ) {
      if (err) {
        reject(err);
        return;
      }
      studentCode = text;
      resolve();
    });
  });
});

test("print numbers from zero to nine", () => {
  numbers = [];
  _consolelog = console.log;
  console.log = thing => numbers.push(thing);

  eval(studentCode);

  console.log = _consolelog;
  const expected = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].reverse();

  expect(numbers).toEqual(expected);
});

test("one while was used", () => {
  const whiles = studentCode.match(/while(\s*?)\(.*?\)/gm);

  expect(whiles).toBeTruthy();
  expect(whiles.length).toBe(1);
});
