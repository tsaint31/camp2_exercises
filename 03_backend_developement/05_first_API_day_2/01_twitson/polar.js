
const request = require("request");
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 3000;
const POLAR_CLIENT_ID=process.env.POLAR_CLIENT_ID;
const POLAR_CLIENT_SECRET=process.env.POLAR_CLIENT_SECRET;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

// https://flow.polar.com/oauth2/authorization?response_type=codeclient_id=

app.get("/", function(request, result) {
  const code = request.param("code");
  console.log(code);
  getToken(code);
});

function getToken(code){
  const clientSecretEncoded = new Buffer(POLAR_CLIENT_ID + ":" +POLAR_CLIENT_SECRET).toString("base64");
  const headers = {"Authorization": `Basic ${clientSecretEncoded}`};
  request(
    {
      url: "https://polarremote.com/v2/oauth2/token",
      method: "POST",
      headers: headers,
      form: {"grant_type" : "authorization_code",
        "code" : `${code}`
      }
    },
    function(error, response, result) {
      const Token= JSON.parse(result).access_token;
      console.log( `token à utiliser = ${Token}`);
      registerUser(Token);
    }
  );
}
// https://flow.polar.com/oauth2/authorization?response_type=code&client_id=

function registerUser(token) {
  // const inputBody = {
  //   "member-id": "User_id_999"
  // };
  const headers = {
    "Content-Type":"application/xml",
    "Accept":"application/json",
    "Authorization": `Bearer ${token}`
  };

  console.log("token" + token);
  fetch("https://www.polaraccesslink.com/v3/users",
    {
      method: "POST",
      body: {"member-id" : "User_id_999"},
      headers: headers
    })
    .then(function(res) {
      console.log(res);
      return res.json();
    })
    .then(function(body) {
      console.log(body);
    })
    .catch((error) => {
      console.warn(error);
    });
}
