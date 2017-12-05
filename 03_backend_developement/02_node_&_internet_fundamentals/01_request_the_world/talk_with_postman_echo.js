const request = require("request");


function simpleGet(output) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function simpleGetWithParams(output) {
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function (error,response,body) {
      const resultJson=JSON.parse(body);
      output(resultJson.args);
    }
  );
}

function validateTimestamp(output) {
  const date = new Date();
  const time =
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date
      .getDate()
      .toString()
      .padStart(2, "0");
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${time}`,
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function callback(result) {
  console.log(result);
}

// simpleGet(callback);
// simpleGetWithParams(callback);
validateTimestamp(callback);

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
