const http = require("http");

function curl(host, path) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        host: host,
        path: path ? "/" + path : undefined,
        headers: { accept: "*/*", "user-agent": "curl/7.43.0" }
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
