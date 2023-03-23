/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const thirdInput = document.querySelector("[data-js=third-input]");

const button1 = document.querySelector("[data-js=button1]");
const button2 = document.querySelector("[data-js=button2]");
const button3 = document.querySelector("[data-js=button3]");

button1.addEventListener("click", () => {
  secondInput.value = firstInput.value;
});
button2.addEventListener("click", () => {
  thirdInput.value = firstInput.value.toUpperCase();
});
button3.addEventListener("click", () => {
  let input3 = thirdInput.value  
  let input2 = secondInput.value
  secondInput.value = input3
  thirdInput.value = input2
  
});
