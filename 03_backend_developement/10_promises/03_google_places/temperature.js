const fetch = require("node-fetch");
const GOOGLE_API_PLACE_KEY=process.env.GOOGLE_API_PLACE_KEY;

const MAPWEATHER_ID=process.env.MAPWEATHER_ID;

function temperatureAt(address) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&key=${GOOGLE_API_PLACE_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return weather(result);
    })
    .catch((error) => {
      console.warn(error);
    });
}

function weather(result) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${result.results[0].geometry.location.lat}&lon=${result.results[0].geometry.location.lng}&APPID=${MAPWEATHER_ID}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((json) => {
      const weatherAlldate=`${json.list[0].main.temp} ˚C`;
      console.log(weatherAlldate);
      return weatherAlldate;
    });
}

temperatureAt("Decathlon Marseille"); // Displays 17 ˚C.

module.exports = {
  temperatureAt: temperatureAt,
};
