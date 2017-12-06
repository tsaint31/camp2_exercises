const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const commandFile = () => path.resolve(__dirname, "../05_postman_api_call.sh");
const resultFile = () =>
  path.resolve(__dirname, "../05_postman_api_call.result");

let curlHeader;

afterEach(() => {
  fs.existsSync(resultFile()) && fs.unlinkSync(resultFile());
});

beforeAll(() => {
  exec("curl --version").then(([stdout]) => {
    curlHeader = stdout
      .split(" ")
      .slice(0, 2)
      .join("/");
  });
});

test("Check that the result file exists", done => {
  expect.assertions(1);

  exec(`bash ${commandFile()}`).then(() => {
    expect(fs.existsSync(resultFile())).toBe(true);
    done();
  });
});

test("Check that the result file is not empty (does the curl call work?)", done => {
  expect.assertions(1);

  exec(`bash ${commandFile()}`).then(() => {
    const result = fs.readFileSync(resultFile(), "utf8");
    expect(result).not.toBe("");
    done();
  });
});

test("Check that the call has been done", done => {
  expect.assertions(1);
  const result = fs.readFileSync(resultFile(), "utf8");

  exec(`bash ${commandFile()}`).then(() => {
    const date = new Date();
    const dateYear =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date
        .getDate()
        .toString()
        .padStart(2, "0");

    curl(
      `https://postman-echo.com/time/valid?timestamp=${dateYear}`,
      curlHeader
    ).then(curlResult => {
      expect(curlResult).toEqual(result);
      done();
    });
  });
});
