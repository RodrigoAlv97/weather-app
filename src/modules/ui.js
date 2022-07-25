import { currentLocation } from "./logic";

const locationName = document.querySelector("#locationName");
const icon = document.querySelector("#icon");
const temp = document.querySelector("#temp");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const wind = document.querySelector("#wind");
const searchBar = document.querySelector("#searchBar");

function showData() {
  locationName.textContent = currentLocation.getName();
  temp.textContent = currentLocation.getTemp();
  min.textContent = 'Min today: ' +currentLocation.getMin();
  max.textContent = 'Max today: ' +currentLocation.getMax();
  wind.textContent = 'Wind: ' +currentLocation.getWind();
}

function showIcon() {
  switch (currentLocation.getDesc()) {
    case "Clear":
      icon.src = "http://openweathermap.org/img/wn/01d.png";
      break;

    case "Clouds":
      icon.src = "http://openweathermap.org/img/wn/02d.png";
      break;

    case "Rain":
      icon.src = "http://openweathermap.org/img/wn/09d.png";
      break;

    case "Thunderstorm":
      icon.src = "http://openweathermap.org/img/wn/11d.png";
      break;

    case "Snow":
      icon.src = "http://openweathermap.org/img/wn/13d.png";
      break;

    case "Mist":
      icon.src = "http://openweathermap.org/img/wn/50d.png";
      break;
  }
}

function clearSearchBar() {
  searchBar.value = "";
}

function showLocationInfo() {
  showData();
  showIcon();
  clearSearchBar();
}

export { showLocationInfo };
