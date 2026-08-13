/*
For temp: us for Farenheit, metric for Celcius
*/

const getWeatherData = async () => {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/manila/next5days?unitGroup=metric&key=S5TGJ858R683JZX54HDUDQ6JN&include=days&elements=temp,precip,humidity,windspeed,conditions,icon",
    );

    const weatherData = await response.json();
    console.log("Success in getting the data!");
  } catch (error) {
    console.log("Error:" + error);
  }
};

export { getWeatherData };
