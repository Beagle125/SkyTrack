import { getWeatherData } from "./model.js";
import {
  openLoadingView,
  closeLoadingView,
  loadErrorView,
  loadInformationView,
} from "./display.js";

const handleSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const tempMeasurement = "metric";
    if (e.target.id === "mainForm") {
      const location = document.querySelector("input").value;
      openLoadingView(document.querySelector("body"));
      (async () => {
        try {
          const weatherData = await getWeatherData(location, tempMeasurement);
          console.log(
            `location: ${JSON.stringify(weatherData.resolvedAddress)}`,
          );
          console.log("data: " + JSON.stringify(weatherData));

          loadInformationView(
            document.querySelector("#mainLower"),
            weatherData,
            tempMeasurement,
          );
        } catch (error) {
          console.log("error: " + error);
          loadErrorView(document.querySelector("#mainLower"), location);
        }
        closeLoadingView();
      })();
    }
  });
};

export { handleSubmit };
