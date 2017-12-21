const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const MAPWEATHER_ID=process.env.MAPWEATHER_ID;

function applisten() {
  app.listen(port, function () {
    console.log("Server listening on port:" + port);
  });
}

app.use(express.static('./'));

app.get(`/:id`, function(request, result) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${request.params.id}&APPID=${MAPWEATHER_ID}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result1) => {
      console.log("WEATHER" + result1.weather[0].main);
      const output=result1.weather[0].main;
      // result.send(output);
      result.send(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
            integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div class="container">
            <div class="row justify-content-center">
              <div class="text-center" class="col">
              <h1>WEATHER OF YOUR TOWN</h1>
              <h1>${request.params.id}</h1>
              <h1>${output}</h1>
              <img class="img-fluid" src="${output}.jpg" alt="weather View">
              </div>
            </div>
          </div>


        </body>
      </html>`);
    })
    .catch((error) => {
      console.warn(error);
    });
});

applisten();


// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
//   module.exports = output;
// }
