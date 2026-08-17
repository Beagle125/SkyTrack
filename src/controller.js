import { getWeatherData } from "./model.js";
import {
  openLoadingView,
  closeLoadingView,
  loadErrorView,
  loadInformationView,
  loadUpperRow,
  loadLowerRow,
} from "./display.js";

// declare a global variable weatherData to be accessed by other event handlers
let weatherData;
let tempMeasurement;

const handleSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    tempMeasurement = "metric"; // to be changed
    if (e.target.id === "mainForm") {
      const location = document.querySelector("input").value;
      openLoadingView(document.querySelector("body"));
      (async () => {
        try {
          weatherData = await getWeatherData(location, tempMeasurement);
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

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("clickableComponents")) {
      const index = e.target.id;
      loadUpperRow(
        document.querySelector("#lowerUpperRow"),
        weatherData,
        tempMeasurement,
        index,
      );

      loadLowerRow(
        document.querySelector("#lowerLowerRow"),
        weatherData,
        tempMeasurement,
        index,
      );
    }
  });
};

export { handleSubmit };
