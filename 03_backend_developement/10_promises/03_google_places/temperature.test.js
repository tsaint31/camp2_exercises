const temp = require("./temperature");


test("retrieve the temp", () => {
  expect.assertions(1);
  return temp.temperatureAt("Decathlon Marseille")
    .then (temp => {
      expect(temp).toBe("10.86 ˚C");
    });
});
