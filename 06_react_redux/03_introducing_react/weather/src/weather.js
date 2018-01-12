

const MAPWEATHER_ID=process.env.REACT_APP_MAPWEATHER_ID;

function weatherByCityName(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${MAPWEATHER_ID}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.main.temp);
      const output=`${result.main.temp}°C`;
      return output;
    })
    .catch((error) => {
      console.warn(error);
      const output="This town is unknown"
      return output;
    });
}

export default weatherByCityName;
