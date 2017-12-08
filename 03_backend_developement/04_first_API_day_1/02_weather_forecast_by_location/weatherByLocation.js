const request = require("request");

const MAPWEATHER_ID=process.env.MAPWEATHER_ID;
let done="";
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

function weatherByLatitudeAndLongitude(lat,lon) {
  const resultlatlon=request(
    {
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${MAPWEATHER_ID}&units=metric`,

      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      const output=result.list.map(returnDate);
      const filterOutput = output.filter(uniqueDate);
      console.log(filterOutput);
      return output;
    }
  );
  return resultlatlon;
}

function weatherByZipcode(zip,pays) {
  const resultzip=request(
    {
      url: `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${pays}&APPID=${MAPWEATHER_ID}&units=metric`,
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      const output=result.list.map(returnDate);
      const filterOutput = output.filter(uniqueDate);
      console.log(filterOutput);
      return output;
    }
  );
  // const returnzip=resultzip.filter(uniqueDate());
  return resultzip;
}

weatherByLatitudeAndLongitude(3.0586, 50.633);
weatherByZipcode(59000, "fr");


module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode:weatherByZipcode
};
