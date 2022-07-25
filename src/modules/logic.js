let currentLocation;

const LocationInfo = (name, temp, min, max, desc, wind) => {
  const getName = () => name;
  const getTemp = () => Math.trunc(temp) + "º";
  const getMin = () => Math.trunc(min) + "º";
  const getMax = () => Math.trunc(max) + "º";
  const getDesc = () => desc;
  const getWind = () => wind + " Km/h";

  return { getName, getTemp, getMin, getMax, getDesc, getWind };
};

async function getData(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=c3c9b94a84922c416cdc3eb8cabb70ad`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    const info = LocationInfo(
      weatherData.name,
      weatherData.main.temp,
      weatherData.main.temp_min,
      weatherData.main.temp_max,
      weatherData.weather[0].main,
      weatherData.wind.speed
    );

    currentLocation = info;
  } catch (error) {
    return;
  }
}

export { currentLocation, getData };
