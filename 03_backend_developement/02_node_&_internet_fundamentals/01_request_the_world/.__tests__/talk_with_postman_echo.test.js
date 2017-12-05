const {
  simpleGet,
  simpleGetWithParams,
  validateTimestamp
} = require("../talk_with_postman_echo");

const request = require("request");
const requestPromise = options =>
  new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      resolve([response, body]);
    });
  });

describe("simpleGet", () => {
  test("should call postman", done => {
    expect.assertions(1);
    requestPromise("https://postman-echo.com/get").then(
      ([response, testResult]) => {
        simpleGet(result => {
          expect(result).toEqual(testResult);
          done();
        });
      }
    );
  });
});

describe("simpleGetWithParams", () => {
  test("should call postman", done => {
    expect.assertions(1);
    requestPromise(
      "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis"
    )
      .then(([response, testResult]) => JSON.parse(testResult))
      .then(testResult => testResult.args)
      .then(testResult => {
        simpleGetWithParams(result => {
          expect(result).toEqual(testResult);
          done();
        });
      });
  });
});

describe("validateTimestamp", () => {
  test("should call postman", done => {
    expect.assertions(1);

    const date = new Date();
    const timestamp =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date
        .getDate()
        .toString()
        .padStart(2, "0");

    requestPromise(
      `https://postman-echo.com/time/valid?timestamp=${timestamp}`
    ).then(([response, testResult]) => {
      validateTimestamp(result => {
        expect(result).toEqual(testResult);
        done();
      });
    });
  });
});
