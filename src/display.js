const loadMainUpper = (upperMain) => {
  const header = document.createElement("p");
  header.textContent = "Sky Track";

  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  form.appendChild(input);
  form.appendChild(button);

  upperMain.appendChild(header);
  upperMain.appendChild(form);
};

export { loadMainUpper };
