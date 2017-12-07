const weatherByCityName = require("./weatherByCityName");

describe("test weatherByCityName", function() {

  test("weatherByCityName bogota", function() {
    // expect something
    const result = weatherByCityName.weatherByCityName("nice");
    console.log(result)
    expect(result).toBe("9.53°C");
  });

});
