/*
For temp: us for Farenheit, metric for Celcius
*/

const getWeatherData = async (location, tempMeasurement) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?unitGroup=${tempMeasurement}&key=S5TGJ858R683JZX54HDUDQ6JN&include=days&elements=datetime,temp,precip,humidity,windspeed,conditions,icon`,
  );

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const weatherData = await response.json();
  return weatherData;
};

export { getWeatherData };
