const canRentACar = require("../01_index.js");

test("Returns true when driver has B License for 2 years, without accidents and bonus of 0.8", () => {
  const driver = {
    driverLicense: 'B1',
    licenseIssued: new Date().getFullYear() - 2,
    numberOfAccident: 0,
    bonus: 0.8,
  };

  expect(canRentACar(driver)).toBe(true);
});


test("Returns true when driver has B License for 2 years, with 5 accidents and bonus of 0.7", () => {
  const driver = {
    driverLicense: 'B1',
    licenseIssued: new Date().getFullYear() - 2,
    numberOfAccident: 5,
    bonus: 0.8,
  };

  expect(canRentACar(driver)).toBe(true);
});

test("Returns true when driver has B License for 2 years, without accidents and bonus of 0.3", () => {
  const driver = {
    driverLicense: 'B1',
    licenseIssued: new Date().getFullYear() - 2,
    numberOfAccident: 0,
    bonus: 0.3,
  };

  expect(canRentACar(driver)).toBe(true);
});

test("Returns false when driver has B License for 1 year, without accidents and bonus of 0.9", () => {
  const driver = {
    driverLicense: 'B1',
    licenseIssued: new Date().getFullYear() - 1,
    numberOfAccident: 0,
    bonus: 0.9,
  };

  expect(canRentACar(driver)).toBe(false);
});

test("Returns false when driver has C License for 5 year, without accidents and bonus of 0.9", () => {
  const driver = {
    driverLicense: 'C1',
    licenseIssued: new Date().getFullYear() - 5,
    numberOfAccident: 0,
    bonus: 0.9,
  };

  expect(canRentACar(driver)).toBe(false);
});
