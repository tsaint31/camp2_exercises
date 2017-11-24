const filter = require("../01_filter_with_string");

test("should handle empty arrays", () => {
  expect(filter([], 'odd')).toEqual([]);
})

test("should handle weird string", () => {
  expect(filter([1, 2, 3], 'iDoNotHandleSuchAWeirdCase')).toEqual([1, 2, 3]);
})

test("should filter", () => {
  expect(filter([1, 2, 3, 4, 5], 'even')).toEqual([2, 4]);
  expect(filter([0, -1, -2, -3, -4, -5], 'even')).toEqual([0, -2, -4]);
  expect(filter([1, 2, 3, 4, 5], 'odd')).toEqual([1, 3, 5]);
})
