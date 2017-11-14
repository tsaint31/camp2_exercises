const pattern = require("../complete_the_pattern");


test("should not work with zero and under", () => {
  expect(pattern(0)).toEqual("");
  expect(pattern(-2)).toEqual("");
})

test("should work with simple values", () => {
  expect(pattern(1)).toEqual("1");
  expect(pattern(2)).toEqual("21\n2");
  expect(pattern(5)).toEqual("54321\n5432\n543\n54\n5");
})
