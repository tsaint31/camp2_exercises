/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../02_digits_again.js"), "utf8", function(
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

test("digits exists", () => {
  const digits = eval(studentCode + "; digits;");

  expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("one for was used", () => {
  const fors = studentCode.match(/for(\s*?)\(.*?;.*?;.*?\)/gm);

  expect(fors).toBeTruthy();
  expect(fors.length).toBe(1);
});

test("one push was used", () => {
  const push = studentCode.match(/digits(\s*?)\.push/gm);

  expect(push).toBeTruthy();
  expect(push.length).toBe(1);
});
