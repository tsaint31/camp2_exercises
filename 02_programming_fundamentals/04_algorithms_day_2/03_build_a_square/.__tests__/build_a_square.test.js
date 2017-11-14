const generateShape = require("../build_a_square");

test("should not work with zero and under", () => {
  expect(pattern(0)).toEqual("");
  expect(pattern(-2)).toEqual("");
})

test("should work with simple values", () => {
  expect(generateShape(3)).toEqual("+++\n+++\n+++");
  expect(generateShape(1)).toEqual("+");
  expect(generateShape(2)).toEqual("++\n++");
})
