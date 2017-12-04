const tools = require("../tools");

test("isNotNull should still work", () => {
  expect(tools.isNotNull(1)).toBe(true);
  expect(tools.isNotNull(null)).toBe(false);
})

test("flattenArray should still work", () => {
  expect(tools.flattenArray([[1]])).toEqual([1]);
})
