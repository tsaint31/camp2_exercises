const https = require("https");
const http = require("http");
const URL = require("url");
const querystring = require('querystring');

function curl(url, postData = null, userAgent = "curl/7.54.0", method = "GET") {
  const urlParts = URL.parse(url);
  let requester;
  switch (urlParts.protocol) {
    case "https:":
      requester = https;
      break;
    case "http:":
    default:
      requester = http;
      break;
  }

  return new Promise((resolve, reject) => {
    const req = requester.request(
      {
        host: urlParts.host,
        path: urlParts.path,
        headers: {
          accept: "*/*",
          "user-agent": userAgent,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: method
      },
      function(res) {
        let chunkString = "";
        res.setEncoding("utf8");
        res.on("data", chunk => {
          chunkString += chunk.toString();
        });
        res.on("end", () => {
          resolve(chunkString);
        });
      }
    );
    req.on("error", e => {
      reject("Problem with request: " + e.message);
    });
    if (postData) {
      req.write(querystring.stringify(postData));
    }
    req.end();
  });
}

module.exports = curl;
