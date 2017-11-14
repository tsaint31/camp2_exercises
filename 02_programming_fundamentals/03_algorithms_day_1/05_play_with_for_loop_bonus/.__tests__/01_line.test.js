/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../01_line.js"), "utf8", function(
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

test("display a line", () => {
  output = [];
  _consolelog = console.log;
  console.log = thing => output.push(thing);

  eval(studentCode);

  console.log = _consolelog;

  expect(output).toEqual(["**********"]);
});
