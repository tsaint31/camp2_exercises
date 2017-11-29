const person = require("../01_using_this.js");

test('should work', () => {
  expect(person.introduceMyself()).toEqual("Hello! I'm Abdel Sadki and I'm 42");
});
