console.log = () => undefined

const machine = require("../03_coffee_machine");

beforeEach(() => {
  machine.litersOfCoffee = 0;
})

test("should be able to serve expresso", () => {
  machine.litersOfCoffee = 0.16;
  expect(machine.expresso()).toEqual(true);
  expect(machine.expresso()).toEqual(true);
  expect(machine.expresso()).toEqual(false);
});

test("should be able to serve long coffee", () => {
  machine.litersOfCoffee = 0.32;
  expect(machine.longCoffee()).toEqual(true);
  expect(machine.longCoffee()).toEqual(true);
  expect(machine.longCoffee()).toEqual(false);
});

test("should be able to fill the machine", () => {
  machine.fillWithLitersOfCoffee(5);

  expect(machine.litersOfCoffee).toEqual(5);
});

test("should be able to re-fill the machine", () => {
  machine.litersOfCoffee = 2;
  machine.fillWithLitersOfCoffee(5);

  expect(machine.litersOfCoffee).toEqual(7);
});
