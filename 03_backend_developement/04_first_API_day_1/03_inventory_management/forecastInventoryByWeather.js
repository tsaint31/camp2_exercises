const request = require("request");
const GOOGLE_API_PLACE_KEY=process.env.GOOGLE_API_PLACE_KEY;
const MAPWEATHER_ID=process.env.MAPWEATHER_ID;

const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];
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

function getLatitudeAndLongitude(address) {
  let resultlatlon=[];
  resultlatlon=request(
    {
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&key=${GOOGLE_API_PLACE_KEY}`,
      method: "GET"
    },
    function (error,response,body) {
      const place=[];
      const result=JSON.parse(body);
      const latitude=result.results[0].geometry.location.lat;
      place.push(latitude);
      const longitude=result.results[0].geometry.location.lng;
      place.push(longitude);
      weatherByLatitudeAndLongitude(latitude,longitude,address);
    }
  );
  return resultlatlon;
}

function weatherByLatitudeAndLongitude(lat,lon,address) {
  const resultlatlon=request(
    {
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${MAPWEATHER_ID}&units=metric`,

      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      const output=result.list.map(returnDate);
      let nbDayRain=0;
      for (let i=0; i<output.length; i++) {
        if(output[i].weather.main==="Rain") {
          nbDayRain=nbDayRain+1;
        }
      }
      const DayRain= Math.floor(nbDayRain/8);
      console.log(`nb of raining days ${DayRain} in ${address}`);
      return output;
    }
  );
  return resultlatlon;
}


function forecastInventoryByWeather(listStores) {
  for (let i=0; i<listStores.length;i++) {
    getLatitudeAndLongitude(listStores[i]);
  }

}

forecastInventoryByWeather(stores);






// function forecastInventoryByWeather ()
// {
// }
//
// forecastInventoryByWeather(stores)
// > "You need to buy some parkas for the store in Villeneuve-d'Ascq"
// > "You need to buy some parkas for the store in Lorient"
