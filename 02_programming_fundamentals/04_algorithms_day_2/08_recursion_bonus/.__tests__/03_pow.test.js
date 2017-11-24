const pow = require('../03_pow');

test('it should work', () => {
  expect(pow(2, 8)).toBe(Math.pow(2, 8));
  expect(pow(4, 42)).toBe(Math.pow(4, 42));
  expect(pow(1, 1)).toBe(Math.pow(1, 1));
  expect(pow(2, 0)).toBe(Math.pow(2, 0));
});
