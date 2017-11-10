/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(
      path.join(__dirname, "../02_arrays_methods.js"),
      "utf8",
      function(err, text) {
        if (err) {
          reject(err);
          return;
        }
        studentCode = text;
        resolve();
      }
    );
  });
});

describe("digits", () => {
  test("digits exists", () => {
    const digits = eval(studentCode + "; digits;");

    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("digits has been defined with push", () => {
    const found = studentCode.match(/digits(\s*?)\.push/g);

    expect(found.length).toBe(10);
  });
});

describe("last", () => {
  test("last exists", () => {
    const last = eval(studentCode + "; last;");

    expect(last).toEqual(9);
  });

  test("last is linked to the last cell of digits", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const) last/m),
      "digits.push(true); $&"
    );
    const last = eval(changedStudentCode + "; last;");
    expect(last).toBe(true);
  });
});

test("litteralDigits exists", () => {
  const litteralDigits = eval(studentCode + "; litteralDigits;");

  expect(litteralDigits).toEqual([
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
  ]);
});

describe("allDigits", () => {
  test("allDigits exists", () => {
    const allDigits = eval(studentCode + "; allDigits;");

    expect(allDigits).toEqual(
      "zero - one - two - three - four - five - six - seven - eight - nine"
    );
  });

  test("allDigits is linked to litteralDigits, changing it should change allDigits", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const) allDigits/m),
      "litteralDigits[5] = 'cinq'; $&"
    );
    const allDigits = eval(changedStudentCode + "; allDigits;");
    expect(allDigits).toBe(
      "zero - one - two - three - four - cinq - six - seven - eight - nine"
    );
  });
});
