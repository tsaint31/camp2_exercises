
const request = require("request");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const POLAR_CLIENT_ID=process.env.POLAR_CLIENT_ID;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

// https://flow.polar.com/oauth2/authorization?response_type=codeclient_id=

app.get("/:code", function(request, result) {
  console.log(result);
  result.json(request.params);
});

function polarAuthentification(CLIENT_ID) {
  request(
    {
      url: `https://flow.polar.com/oauth2/authorization?response_type=code&client_id=${CLIENT_ID}`,
      method: "GET"
    },
    function (error,response,body) {
      console.log(body);
      return body;
    }
  );
}

polarAuthentification(POLAR_CLIENT_ID);
