console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (event) => {
  let number1 = parseInt(firstInput.value);
  let number2 = parseInt(secondInput.value);
  let calculation = number1 * number2;
  result.textContent = `${calculation}`
});

secondInput.addEventListener("input", (event) => {
  let number1 = parseInt(firstInput.value);
  let number2 = parseInt(secondInput.value);
  let calculation = number1 * number2;
  result.textContent = `${calculation}`
});