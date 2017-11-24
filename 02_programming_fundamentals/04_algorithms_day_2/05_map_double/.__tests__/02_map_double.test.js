const mapDouble = require("../02_map_double");

test("double should work", () => {
  expect(mapDouble.double(24)).toBe(48);
});

test("map should work", () => {
  expect(mapDouble.map([1, 2, 3], (x) => x*x)).toEqual([1, 4, 9]);
});

test("double with map should work", () => {
  const arr = mapDouble.map([1, 2, 3], mapDouble.double);
  expect(arr).toEqual([2, 4, 6]);
});
