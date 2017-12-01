const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const commandFile = () => path.resolve(__dirname, "../09_publish_comment.sh");

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

  exec(`bash ${commandFile()} 1 "name" "email" "body"`).then(([result]) => {
    curl(
      "http://jsonplaceholder.typicode.com/comments",
      { email: "email", name: "name", postId: 1, body: "body" },
      curlHeader,
      "POST"
    ).then(curlResult => {
      expect(JSON.parse(curlResult)).toEqual(JSON.parse(result));
      done();
    });
  });
});
