const weather = require("./weather");


test("retrieve the temp", () => {
  expect.assertions(1);
  return weather.weatherByCityName("Marseille")
    .then (temp => {
      expect(temp).toBe(11.26);
    });
});

test("retrieve the temp", () => {
  expect.assertions(1);
  return weather.weatherByLatitudeAndLongitude(3.0586, 50.633)
    .then (temp => {
      expect(temp[0].temperature).toBe(25.8);
    });
});
