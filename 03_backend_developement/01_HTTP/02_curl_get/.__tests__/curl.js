const https = require("https");
const http = require("http");
const URL = require("url");

function curl(url, userAgent = "curl/7.54.0") {
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
        headers: { accept: "*/*", "user-agent": userAgent }
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
    req.end();
  });
}

module.exports = curl;
