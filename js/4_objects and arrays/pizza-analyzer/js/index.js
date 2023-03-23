console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = pizzaInput1.value;
let pizzaSize2 = pizzaInput2.value;
pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// console.log(pizzaSize1);
// console.log(pizzaSize2);

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  area1 = Math.pow(diameter1 * 0.5, 2) * Math.PI;
  area2 = Math.pow(diameter2 * 0.5, 2) * Math.PI;

  calculatedValue = ((area2 - area1) / area1) * 100;
  roundedGainValue = Math.round(calculatedValue);
  output.textContent = roundedGainValue;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  let displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${displaySize}px`;
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
  let winOrLoseColorShift;
  if (size1 > size2) {
    winOrLoseColorShift = "var(--red)";
  } else {
    winOrLoseColorShift = "var(--green)";
  }
  outputSection.style.backgroundColor = winOrLoseColorShift;
}
