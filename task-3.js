const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function (event) {
  const value = event.currentTarget.value.trim();

  output.textContent = value === "" ? "Anonymous" : value;
});
