import { getWeatherData } from "./model.js";

const handleSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "mainForm") {
      const location = document.querySelector("input").value;
      (async () => {
        try {
          const weatherData = await getWeatherData(location);
          console.log("data: " + JSON.stringify(weatherData));
        } catch (error) {
          console.log("error: " + error);
        }
      })();
    }
  });
};

export { handleSubmit };
