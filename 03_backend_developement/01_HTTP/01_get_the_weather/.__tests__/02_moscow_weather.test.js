const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const file = () => path.resolve(__dirname, "../02_moscow_weather.sh");

test("the script should return the weather of Moscow", done => {
  expect.assertions(1);

  Promise.all([exec(`bash ${file()}`), curl("wttr.in", "/Moscow")]).then(
    ([[stdout, stderr], curlResult]) => {
      expect(stdout).toEqual(curlResult);
      done();
    }
  );
});
