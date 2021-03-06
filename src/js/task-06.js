const inputElem = document.querySelector("#validation-input");
const inputData = inputElem.getAttribute("data-length");

inputElem.addEventListener("blur", (event) => {
  if (inputElem.value.length === +inputData) {
    inputElem.classList.add("valid");
  } else {
    inputElem.classList.add("invalid");
  }
});

inputElem.addEventListener("focus", () => {
  inputElem.classList.remove("invalid");
  inputElem.classList.remove("valid");
});
