const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/
const colorClass = box.classList;

redButton.addEventListener("click", () => {
  // Code here
  removeAllColors();
  addColorClass();
});

blueButton.addEventListener("click", () => {
  // Code here
  removeAllColors();
  addColorClass();
});

greenButton.addEventListener("click", () => {
  // Code here
  removeAllColors();
  addColorClass();
});

grayButton.addEventListener("click", () => {
  // Code here
  removeAllColors();
  addColorClass();
});
console.log(box.classList[1]);
// Write your two functions below:

// Remove Class Task 1

function removeAllColors() {
  for (let i = 0; i < box.classList.length; i++) {
    if (box.classList[i] != "box") {
      box.classList.remove(box.classList[i]);
    }
  }
}

// Add Class Task 2
function addColorClass() {
  let colorChange = event.target.textContent;
  box.classList.add(colorChange);
}
