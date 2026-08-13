const handleSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "mainForm") {
      console.log("I have submitted");
    }
  });
};

export { handleSubmit };
