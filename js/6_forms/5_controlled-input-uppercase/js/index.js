console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  let inputKey = input.value;
  input.value = inputKey.toUpperCase();
});
