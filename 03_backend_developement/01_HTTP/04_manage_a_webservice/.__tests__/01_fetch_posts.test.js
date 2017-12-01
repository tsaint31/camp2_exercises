const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const commandFile = () => path.resolve(__dirname, "../01_fetch_posts.sh");

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

  exec(`bash ${commandFile()}`).then(([result]) => {
    curl("http://jsonplaceholder.typicode.com/posts", null, curlHeader).then(
      curlResult => {
        expect(curlResult).toEqual(result);
        done();
      }
    );
  });
});
