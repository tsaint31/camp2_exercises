/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, "../index.js"), "utf8", function(
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

test("hello sparta", () => {
  const hello = eval(studentCode + "; hello;");

  expect(hello).toBe("Sparta");
});

test("currentYear", () => {
  const currentYear = eval(studentCode + "; currentYear;");

  expect(currentYear).toBe(2017);
});

test("foo", () => {
  const foo = eval(studentCode + "; foo;");

  expect(foo).toBe(12);
});

test("bar", () => {
  const bar = eval(studentCode + "; bar;");

  expect(bar).toBe(28);
});

describe("sumResult", () => {
  test("sumResult", () => {
    const sumResult = eval(studentCode + "; sumResult;");

    expect(sumResult).toBe(40);
  });

  test("sumResult should be linked to foor and bar, changing foo should update it", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
      "const foo = 10;"
    );
    const sumResult = eval(changedStudentCode + "; sumResult;");
    expect(sumResult).toBe(38);
  });

  test("sumResult should be linked to foor and bar, changing bar should update it", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
      "const bar = 10;"
    );
    const sumResult = eval(changedStudentCode + "; sumResult;");
    expect(sumResult).toBe(22);
  });
});

describe("prodResult", () => {
  test("prodResult", () => {
    const prodResult = eval(studentCode + "; prodResult;");

    expect(prodResult).toBe(336);
  });

  test("prodResult should be linked to foor and bar, changing foo should update it", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
      "const foo = 10;"
    );
    const prodResult = eval(changedStudentCode + "; prodResult;");
    expect(prodResult).toBe(280);
  });

  test("prodResult should be linked to foor and bar, changing bar should update it", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
      "const bar = 10;"
    );
    const prodResult = eval(changedStudentCode + "; prodResult;");
    expect(prodResult).toBe(120);
  });
});

test("promo", () => {
  const promo = eval(studentCode + "; promo;");
  const expected = {
    year: 2017,
    kind: "hello"
  };
  expect(promo).toEqual(expected);
});

describe("promoYear", () => {
  test("promoYear should be linked to currentYear, changing currentYear should update it", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp(/(let|const)(\s*?)currentYear(\s*?)=(\s*?)([0-9]{4})(\s*?);/),
      "const currentYear = 2000;"
    );
    const promo = eval(changedStudentCode + "; promo;");
    const expected = {
      year: 2000,
      kind: "hello"
    };
    expect(promo).toEqual(expected);
  });

  test("promoYear", () => {
    const promoYear = eval(studentCode + "; promoYear;");

    expect(promoYear).toEqual(2017);
  });

  test("promoYear should be linked to promo, changing the year inside promo should update it", () => {
    const changedStudentCode = studentCode.replace(
      new RegExp("(let|const) promoYear"),
      "promo.year = 2000; $&"
    );
    const promoChanged = eval(changedStudentCode + "; promoYear;");
    expect(promoChanged).toEqual(2000);
  });
});

test("digits", () => {
  const digits = eval(studentCode + "; digits;");

  expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
