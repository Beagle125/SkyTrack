import searchImage from "../static/search.svg";

const loadMainUpper = (upperMain) => {
  const header = document.createElement("div");
  const sky = document.createElement("span");
  const track = document.createElement("span");
  sky.textContent = "Sky";
  track.textContent = "Track";
  header.classList.add("header");
  sky.classList.add("highlighted");

  header.appendChild(sky);
  header.appendChild(track);

  const form = document.createElement("form");
  form.id = "mainForm";
  const input = document.createElement("input");
  input.id = "formInput";
  input.type = "text";
  input.autocomplete = "off";
  input.placeholder = "search a location...";
  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("submitBtn");
  const buttonImg = document.createElement("img");
  buttonImg.id = "searchImg";
  buttonImg.src = searchImage;
  button.appendChild(buttonImg);

  form.appendChild(input);
  form.appendChild(button);

  upperMain.appendChild(header);
  upperMain.appendChild(form);
};

const openLoadingView = (body) => {
  const loadingScreen = document.createElement("div");
  loadingScreen.id = "loadingScreen";
  loadingScreen.textContent = "Loading data...";
  body.appendChild(loadingScreen);
};

const closeLoadingView = () => {
  const loadingScreen = document.querySelector("#loadingScreen");

  if (loadingScreen != null) loadingScreen.remove();
};

const loadErrorView = (lowerMain, value) => {
  lowerMain.replaceChildren();
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("errorMessage");
  errorMessage.textContent = `Unable to find weather data for "${value}". Please enter a valid location.`;
  lowerMain.appendChild(errorMessage);

  if (!lowerMain.classList.contains("active"))
    lowerMain.classList.add("active");
};

const loadInformationView = (lowerMain, weatherData, tempMeasurement) => {
  lowerMain.replaceChildren();
  const upperRow = document.createElement("div");
  const todayInfo = document.createElement("div");

  const locationLabel = document.createElement("p");
  const location = weatherData.resolvedAddress;
  locationLabel.textContent =
    location.charAt(0).toUpperCase() + location.slice(1);
  todayInfo.appendChild(locationLabel);

  const iconTempLabel = document.createElement("div");
  const tempLabel = document.createElement("p");
  tempLabel.textContent =
    weatherData.days[0].temp + tempStringify(tempMeasurement);
  iconTempLabel.appendChild(tempLabel);

  upperRow.appendChild(todayInfo);
  upperRow.appendChild(iconTempLabel);

  lowerMain.appendChild(upperRow);

  if (!lowerMain.classList.contains("active"))
    lowerMain.classList.add("active");
};

const tempStringify = (tempMeasurement) => {
  switch (tempMeasurement) {
    case "metric":
      return "°C";
    default:
      return "°F";
  }
};

export {
  loadMainUpper,
  openLoadingView,
  closeLoadingView,
  loadErrorView,
  loadInformationView,
};
