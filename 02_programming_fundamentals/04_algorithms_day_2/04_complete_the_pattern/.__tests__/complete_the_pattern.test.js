const pattern = require("../complete_the_pattern");

test("should not work with zero and under", () => {
  expect(pattern(-2)).toEqual("");
})

test("should work with simple values", () => {
  expect(pattern(1)).toEqual("1");
  expect(pattern(2)).toEqual("1\n22");
  expect(pattern(5)).toEqual("1\n22\n333\n4444\n55555");
})
