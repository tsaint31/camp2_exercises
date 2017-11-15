/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(
      path.join(__dirname, "../01_can_i_drink_alcohol.js"),
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

test("Frieda should be inside an object frieda", () => {
  const frieda = eval(studentCode + "; frieda;");

  expect(frieda.age).toBe(22);
  expect(frieda.name).toBe("Frieda");
});

test("Francis should be inside an object francis", () => {
  const francis = eval(studentCode + "; francis;");

  expect(francis.age).toBe(17);
  expect(francis.name).toBe("Francis");
});

describe("Frieda and alchohol", () => {
  test("Frieda should be able to drink alcohol", () => {
    const canFriedaDrinkAlcohol = eval(
      studentCode + "; canFriedaDrinkAlcohol;"
    );

    expect(canFriedaDrinkAlcohol).toBe(true);
  });

  test("Frieda should not be able to drink alcohol if we change her age", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const) canFriedaDrinkAlcohol/m),
      "frieda.age = 15; $&"
    );
    const canFriedaDrinkAlcohol = eval(
      changedStudentCode + "; canFriedaDrinkAlcohol;"
    );

    expect(canFriedaDrinkAlcohol).toBe(false);
  });
});

describe("Francis and alchohol", () => {
  test("Francis should not be able to drink alcohol", () => {
    const canFrancisDrinkAlcohol = eval(
      studentCode + "; canFrancisDrinkAlcohol;"
    );

    expect(canFrancisDrinkAlcohol).toBe(false);
  });

  test("Francis should be able to drink alcohol if we change his age", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const) canFrancisDrinkAlcohol/m),
      "francis.age = 22; $&"
    );
    const canFrancisDrinkAlcohol = eval(
      changedStudentCode + "; canFrancisDrinkAlcohol;"
    );

    expect(canFrancisDrinkAlcohol).toBe(true);
  });
});
