
const pattern = require("../complete_the_pattern");

test("should return an empty string for negative numbers", () => {
  expect(pattern(-1)).toBe("");
})

test("should return one line for the value 1", () => {
  expect(pattern(1)).toBe("1");
})

test("should work for any values", () => {
  expect(pattern(3)).toBe("1\n22\n333");
  expect(pattern(5)).toBe("1\n22\n333\n4444\n55555");
  expect(pattern(11)).toBe("1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999\n10101010101010101010\n1111111111111111111111");
})
