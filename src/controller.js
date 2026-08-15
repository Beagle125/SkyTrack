import { getWeatherData } from "./model.js";
import { openLoadingView, closeLoadingView, loadErrorView } from "./display.js";

const handleSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "mainForm") {
      const location = document.querySelector("input").value;
      openLoadingView(document.querySelector("body"));
      (async () => {
        try {
          const weatherData = await getWeatherData(location);
          console.log("data: " + JSON.stringify(weatherData));
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
