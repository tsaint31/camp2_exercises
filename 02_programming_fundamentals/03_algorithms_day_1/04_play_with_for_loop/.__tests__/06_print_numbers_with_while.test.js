/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../06_print_numbers_with_while.js"), "utf8", function(
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

test("print numbers from 0 to 100", () => {
  numbers = [];
  _consolelog = console.log;
  console.log = thing => numbers.push(thing);

  eval(studentCode);

  console.log = _consolelog;

  expect(numbers.length).toBe(101);
  expect(numbers[10]).toBe(10);
  expect(numbers[55]).toBe(55);
});

test("one while was used", () => {
  const whiles = studentCode.match(/while(\s*?)\(.*?\)/gm);

  expect(whiles).toBeTruthy();
  expect(whiles.length).toBe(1);
});
