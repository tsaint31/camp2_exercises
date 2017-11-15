const fact = require('../01_factorial');

test('it should work', () => {
  expect(fact(5)).toBe(120);
  expect(fact(0)).toBe(1);
});

test('it should return null for negative numbers', () => {
  expect(fact(-1)).toBe(null);
});

test('it should not work with a string', () => {
  expect(fact('0')).toBe(null);
});
