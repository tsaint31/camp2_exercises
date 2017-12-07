const request = require("request");

const MAPWEATHER_ID=process.env.MAPWEATHER_ID;


function weatherByCity(city) {
  const temp=request(
    {
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${MAPWEATHER_ID}&units=metric`,
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      const temp = (`${result.main.temp} °C`);
      console.log(temp);
      return temp;
    }
  );
  return temp;
}

weatherByCity("london");

module.exports = weatherByCity;
