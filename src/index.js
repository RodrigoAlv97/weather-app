import { getData } from "./modules/logic.js";
import { showLocationInfo } from "./modules/ui.js";

const searchBar = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#searchBtn");

async function showDefaultLocation() {
  await getData("Montevideo");
  showLocationInfo();
}

showDefaultLocation();

searchBtn.addEventListener("click", async () => {
  await getData(searchBar.value);
  showLocationInfo();
});
