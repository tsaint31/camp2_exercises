const fetch = require("node-fetch");

const MAPWEATHER_ID=process.env.MAPWEATHER_ID;
let done="";

function weatherByCityName(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${MAPWEATHER_ID}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(`${result.main.temp} °C`);
      const output=result.main.temp;
      return output;
    })
    .catch((error) => {
      console.warn(error);
    });
}

function weatherByLatitudeAndLongitude(lat,lon) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${MAPWEATHER_ID}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((json) => {
      const weatherAlldate=json.list.map(returnDate);
      return weatherAlldate;
    })
    .then((weatherAlldate) => {
      const weatherOnedate = weatherAlldate.filter(uniqueDate);
      console.log(weatherOnedate);
      return weatherOnedate;
    })
    .catch((error) => {
      console.warn(error);
    });
}


function returnDate(table) {
  const returnObject={
    date:"",
    temperature: 0,
    weather: {
      "id":0,
      "main":"",
      "description":""
    }
  };

  const date = new Date(table.dt*1000);
  const time =
    date
      .getDate()
      .toString()
      .padStart(2, "0")
     +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getFullYear().toString();
  returnObject.temperature = table.main.temp;
  returnObject.date = time;
  returnObject.weather.id = table.weather[0].id;
  returnObject.weather.main = table.weather[0].main;
  returnObject.weather.description = table.weather[0].description;
  return returnObject;
}


function uniqueDate(eachHour){
  if (done!==eachHour.date) {
    done=eachHour.date;
    return true;
  }
  else {
    return false;
  }
}

weatherByCityName("Marseille");
weatherByLatitudeAndLongitude(3.0586, 50.633);

module.exports = {
  weatherByCityName: weatherByCityName,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude
};
