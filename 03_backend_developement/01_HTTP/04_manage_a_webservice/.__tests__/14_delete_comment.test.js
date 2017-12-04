const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const commandFile = () => path.resolve(__dirname, "../14_delete_comment.sh");

let curlHeader;

beforeAll(() => {
  exec("curl --version").then(([stdout]) => {
    curlHeader = stdout
      .split(" ")
      .slice(0, 2)
      .join("/");
  });
});

test("Check that the file exists", () => {
  expect(fs.existsSync(commandFile())).toBe(true);
});

test("Check that the call has been done", done => {
  expect.assertions(1);

  exec(`alias curl='curl -v' && bash ${commandFile()} 1`).then(([stdout, stderr]) => {
    expect(/DELETE \/comments\/1 HTTP\/1.1/.test(stderr)).toBe(true)
    done();
  });
});
