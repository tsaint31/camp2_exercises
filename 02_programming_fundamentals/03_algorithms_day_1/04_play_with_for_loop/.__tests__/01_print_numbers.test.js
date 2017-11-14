/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../01_print_numbers.js"), "utf8", function(
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

test("one for was used", () => {
  const fors = studentCode.match(/for(\s*?)\(.*?;.*?;.*?\)/gm);

  expect(fors).toBeTruthy();
  expect(fors.length).toBe(1);
});
