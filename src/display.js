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

export { loadMainUpper };
