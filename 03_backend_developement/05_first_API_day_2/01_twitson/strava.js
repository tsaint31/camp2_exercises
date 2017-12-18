const request = require("request");
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;
const STRAVA_ID=process.env.STRAVA_ID;
const STRAVA_SECRET=process.env.STRAVA_SECRET;

// https://www.strava.com/oauth/authorize?response_type=code&client_id=    &redirect_uri=http://localhost:3000
// fetch(
//   "https://www.strava.com/oauth/authorize?response_type=code&client_id=     redirect_uri=http://localhost:3000",
//   {method: "GET"}
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.warn(error);
//   });
// https://www.strava.com/oauth/authorize?response_type=code&client_id=     &redirect_uri=http://localhost:3000

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/", function(request, result) {
  const code = request.param("code");
  getToken(code);
});

function getToken(code){
  request(
    {
      url: `https://www.strava.com/oauth/token?code=${code}&client_secret=${STRAVA_SECRET}&client_id=${STRAVA_ID}`,
      method: "POST",
    },
    function(error, response, result) {
      const Token= JSON.parse(result).access_token;
      searchUserInfo(Token);
      searchUserActivities(Token);
    }
  );
}
// 14536012
function searchUserInfo(token) {

  const headers = {"Authorization": `Bearer ${token}`};
  fetch("https://www.strava.com/api/v3/athletes/14536012",
    {
      method: "GET",
      headers: headers
    })
    .then(function(res) {
      return res.json();
    }).then(function(body) {
      console.log("USER INFO");
      console.log(body);
    });
}

function searchUserActivities(token) {

  const headers = {"Authorization": `Bearer ${token}`};
  fetch("https://www.strava.com/api/v3/athlete/activities",
    {
      method: "GET",
      headers: headers
    })
    .then(function(res) {
      return res.json();
    }).then(function(body) {
      console.log("USER ACTIVITY");
      console.log(body);
    });
}
