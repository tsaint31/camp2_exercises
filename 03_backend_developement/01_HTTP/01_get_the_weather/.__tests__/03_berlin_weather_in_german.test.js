const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const file = () => path.resolve(__dirname, "../03_berlin_weather_in_german.sh");

test("the script should return the weather of Berlin", done => {
  expect.assertions(1);

  exec(`bash ${file()}`).then(([stdout, stderr]) => {
    expect(/Berlin, Germany/.test(stdout)).toEqual(true);
    done();
  });
});

test("the script should return the weather of Berlin in German", done => {
  expect.assertions(1);

  Promise.all([exec(`bash ${file()}`), curl("de.wttr.in", "/Berlin")]).then(
    ([[stdout, stderr], curlResult]) => {
      expect(stdout).toEqual(curlResult);
      done();
    }
  );
});
