const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputText.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
