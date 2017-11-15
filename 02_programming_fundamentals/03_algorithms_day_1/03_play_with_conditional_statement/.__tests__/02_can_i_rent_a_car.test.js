/* global beforeAll test expect */
const fs = require('fs');
const path = require('path');

let studentCode;

beforeAll(() => {
  // Loads the content of the student's code
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, '../02_can_i_rent_a_car.js'), 'utf8', function(
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

function getStudentCode(testData) {
  return studentCode.replace(
    'const driverData = require(\'./.driver_data\');',
    'const driverData = ' + JSON.stringify(testData)
  );
}

test('canRentACar should exist', () => {
  const testData = {
    driverLicense: 'B1',
    licenceIssued: 2001,
    numberOfAccident: 0,
    bonus: 0.8
  };
  const testStudentCode = getStudentCode(testData);
  const canRentACar = eval(testStudentCode + '; canRentACar;');

  expect(canRentACar).toBeDefined();
  expect(typeof canRentACar).toBe('boolean');
});

test('should return false if license is not at least B', () => {
  const testData = {
    driverLicense: 'A',
    licenceIssued: 2001,
    numberOfAccident: 0,
    bonus: 0.8
  };
  const testStudentCode = getStudentCode(testData);
  const canRentACar = eval(testStudentCode + '; canRentACar;');

  expect(canRentACar).toBe(false);
});

test('should return false if license was issued this year', () => {
  const testData = {
    driverLicense: 'B',
    licenceIssued: 2017,
    numberOfAccident: 0,
    bonus: 0.8
  };
  const testStudentCode = getStudentCode(testData);
  const canRentACar = eval(testStudentCode + '; canRentACar;');

  expect(canRentACar).toBe(false);
});

test('should return false if there was accidents and the bonus is too low', () => {
  const testData = {
    driverLicense: 'B',
    licenceIssued: 2001,
    numberOfAccident: 1,
    bonus: 0.6
  };
  const testStudentCode = getStudentCode(testData);
  const canRentACar = eval(testStudentCode + '; canRentACar;');

  expect(canRentACar).toBe(false);
});

test('should return true if there was accidents but the bonus is enough', () => {
  const testData = {
    driverLicense: 'B',
    licenceIssued: 2001,
    numberOfAccident: 1,
    bonus: 0.8
  };
  const testStudentCode = getStudentCode(testData);
  const canRentACar = eval(testStudentCode + '; canRentACar;');

  expect(canRentACar).toBe(true);
});
