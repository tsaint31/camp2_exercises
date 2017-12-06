const greeting = require("./greeting");

describe("a block of tests", function() {

  test("Say hello name if name valid", function() {
    // expect something
    const result = greeting.greet("thierry");
    expect(result).toBe("Hello THIERRY!");
  });
  test("Say hello world if name is not valid", function() {
    // expect something
    const result = greeting.greet();
    expect(result).toBe("Hello WORLD!");
  });
});
