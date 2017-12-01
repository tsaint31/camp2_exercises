const fs = require("fs");
const path = require("path");
const curl = require("./curl");
const exec = require("./exec");

const commandFile = () => path.resolve(__dirname, "../07_fetch_comments_by_posts.sh");

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

  exec(`bash ${commandFile()} 1`).then(([result]) => {
    curl("http://jsonplaceholder.typicode.com/comments?postId=1", null, curlHeader).then(
      curlResult => {
        expect(curlResult).toEqual(result);
        done();
      }
    );
  });
});
