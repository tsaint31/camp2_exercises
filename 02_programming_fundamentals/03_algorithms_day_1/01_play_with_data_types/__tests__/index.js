/* global beforeAll describe test expect */
const fs = require('fs');
const path = require('path');

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, '../index.js'), 'utf8', function(
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

describe('computations', () => {
  test('a and b should exist', () => {
    const a = eval(studentCode + '; a;');
    const b = eval(studentCode + '; b;');

    expect(a).toBeDefined();
    expect(a).not.toBe(0);
    expect(typeof a).toBe('number');

    expect(b).toBeDefined();
    expect(b).not.toBe(0);
    expect(typeof b).toBe('number');
  });

  test('sum should be the sum of a and b', () => {
    const a = eval(studentCode + '; a;');
    const b = eval(studentCode + '; b;');
    const sum = eval(studentCode + '; sum;');

    expect(sum).toBe(a + b);
  });

  test('division should be the division of b by a', () => {
    const a = eval(studentCode + '; a;');
    const b = eval(studentCode + '; b;');
    const division = eval(studentCode + '; division;');

    expect(division).toBe(b / a);
  });

  test('multiply should be the product of a and 2 times b', () => {
    const a = eval(studentCode + '; a;');
    const b = eval(studentCode + '; b;');
    const multiply = eval(studentCode + '; multiply;');

    expect(multiply).toBe(a * 2 * b);
  });

  test('diffence should be the difference of a and b', () => {
    const a = eval(studentCode + '; a;');
    const b = eval(studentCode + '; b;');
    const difference = eval(studentCode + '; difference;');

    expect(difference).toBe(a - b);
  });

  test('name and firstname should exist', () => {
    const name = eval(studentCode + '; name;');
    const firstname = eval(studentCode + '; firstname;');

    expect(name).toBeDefined();
    expect(typeof name).toBe('string');

    expect(firstname).toBeDefined();
    expect(typeof firstname).toBe('string');
  });

  test('age should exists', () => {
    const age = eval(studentCode + '; age;');

    expect(age).toBeDefined();
    expect(typeof age).toBe('number');
  });

  test('canLegallyDrink should exists', () => {
    const age = eval(studentCode + '; age;');
    const canLegallyDrink = eval(studentCode + '; canLegallyDrink;');

    expect(canLegallyDrink).toBeDefined();
    expect(typeof canLegallyDrink).toBe('boolean');
    expect(canLegallyDrink).toBe(age >= 18);
  });

  test('canLegallyDrink takes age into account', () => {
    const modifiedStudentCode = studentCode
      .replace(/const /g, 'let ')
      .replace('let canLegallyDrink', 'age = 17; let canLegallyDrink');

    const canLegallyDrink = eval(modifiedStudentCode + '; canLegallyDrink;');

    expect(canLegallyDrink).toBeDefined();
    expect(typeof canLegallyDrink).toBe('boolean');
    expect(canLegallyDrink).toBe(false);
  });
});
