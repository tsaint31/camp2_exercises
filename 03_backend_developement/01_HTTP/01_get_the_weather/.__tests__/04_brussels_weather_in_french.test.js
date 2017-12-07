const fs = require("fs");
const path = require("path");
const exec = require("./exec");

const commandFile = () =>
  path.resolve(__dirname, "../04_brussels_weather_in_french.sh");
const resultFile = () => path.resolve(__dirname, "../brussels.weather");

afterEach(() => {
  fs.existsSync(resultFile()) && fs.unlinkSync(resultFile());
});

test("Check that the weather file exists", done => {
  expect.assertions(1);

  exec(`bash ${commandFile()}`).then(() => {
    expect(fs.existsSync(resultFile())).toBe(true);
    done();
  });
});

test("Check that the weather is for Brussels", done => {
  expect.assertions(1);

  exec(`bash ${commandFile()}`).then(() => {
    const weather = fs.readFileSync(resultFile(), "utf8");
    expect(/Brussels, Belgium/.test(weather)).toBe(true);
    done();
  });
});

test("Check that the weather is in french", done => {
  expect.assertions(1);

  exec(`bash ${commandFile()}`).then(() => {
    const weather = fs.readFileSync(resultFile(), "utf8");
    expect(weather.startsWith("Prévisions météo pour:")).toBe(true);
    done();
  });
});
