const decodeMorse = require("../morse_code");

test("should work for one letter", () => {
  expect(decodeMorse(".-")).toBe("A");
  expect(decodeMorse("...")).toBe("S");
  expect(decodeMorse("---")).toBe("O");
  expect(decodeMorse(".---")).toBe("J");
})

test("should work for HEY JUDE", () => {
  expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
})

test("should work with a sentence", () => {
  expect(decodeMorse(".. -   .. ...   .... .- .-. -..   -... ..- -   ..-. ..- -.")).toBe("IT IS HARD BUT FUN");
})
