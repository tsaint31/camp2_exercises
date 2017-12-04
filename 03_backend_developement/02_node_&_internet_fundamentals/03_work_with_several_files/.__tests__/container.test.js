const container = require("../container");

test("should not be able to consume coffee right away", () => {
  expect(container.consumeLitersOfCoffee(10)).toBe(false);
})

test("putLitersOfCoffee should allow to consume it", () => {
  container.putLitersOfCoffee(1);
  expect(container.consumeLitersOfCoffee(1)).toBe(true);
})

test("putLitersOfCoffee should allow to consume only what is given before", () => {
  container.putLitersOfCoffee(1);
  expect(container.consumeLitersOfCoffee(1)).toBe(true);
  expect(container.consumeLitersOfCoffee(1)).toBe(false);
})
