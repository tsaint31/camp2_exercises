const fibo = require('../02_fibonacci');

test('it should work', () => {
  expect(fibo(10)).toBe(55);
  expect(fibo(0)).toBe(0);
  expect(fibo(3)).toBe(2);
});

test('it should return null for negative numbers', () => {
  expect(fibo(-1)).toBe(null);
});

test('it should not work with a string', () => {
  expect(fibo('0')).toBe(null);
});
