
let liters = 0;
let calls = 0;
jest.setMock('../container', {
  putLitersOfCoffee: n => {
    liters += n;
  },
  consumeLitersOfCoffee: n => {
    calls++;
    if (liters >= n) {
      liters -= n;
      return true;
    }
    return false;
  }
})
const machine = require("../machine");

beforeEach(() => {
  liters = 0;
  calls = 0;
})

test("The commented given example should work", () => {
  machine.fillWithLitersOfCoffee(0.5);

  expect(machine.expresso()).toBe(true);
  expect(machine.longCoffee()).toBe(true);
  expect(machine.longCoffee()).toBe(true);
  expect(machine.longCoffee()).toBe(false);
  expect(machine.expresso()).toBe(true);
  expect(machine.expresso()).toBe(false);
})


test("should be able to serve expresso", () => {
  machine.fillWithLitersOfCoffee(0.16);
  expect(machine.expresso()).toEqual(true);
  expect(machine.expresso()).toEqual(true);
  expect(machine.expresso()).toEqual(false);
});

test("should be able to serve long coffee", () => {
  machine.fillWithLitersOfCoffee(0.32);
  expect(machine.longCoffee()).toEqual(true);
  expect(machine.longCoffee()).toEqual(true);
  expect(machine.longCoffee()).toEqual(false);
});

test("Machine should use the container file", () => {
  machine.fillWithLitersOfCoffee(0.5);

  expect(machine.expresso()).toBe(true);
  expect(calls).toBe(1)
})
