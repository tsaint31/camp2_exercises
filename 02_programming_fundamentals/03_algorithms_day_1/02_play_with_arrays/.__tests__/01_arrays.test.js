/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../01_arrays.js"), "utf8", function(
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

describe("first", () => {
  test("first exists", () => {
    const first = eval(studentCode + "; first;");

    expect(first).toEqual(0);
  });

  test("first is linked to the first cell of digits", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp("(let|const) first"),
      "digits[0] = true; $&"
    );
    const first = eval(changedStudentCode + "; first;");
    expect(first).toBe(true);
  });
});

describe("last", () => {
  test("last exists", () => {
    const last = eval(studentCode + "; last;");

    expect(last).toEqual(9);
  });

  test("last is linked to the last cell of digits", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp("(let|const) last"),
      "digits[9] = true; $&"
    );
    const last = eval(changedStudentCode + "; last;");
    expect(last).toBe(true);
  });
});


describe("sixth", () => {
  test("sixth exists", () => {
    const sixth = eval(studentCode + "; sixth;");

    expect(sixth).toEqual(6);
  });

  test("sixth is linked to the sixth cell of digits", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp("(let|const) sixth"),
      "digits[6] = true; $&"
    );
    const sixth = eval(changedStudentCode + "; sixth;");
    expect(sixth).toBe(true);
  });
});
