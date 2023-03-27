console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  console.log("TEST THAT IT WORKS!");
  let newListItem = document.createElement("li");
  newListItem.classList.add(`toast-container__message`);
  newListItem.innerText = `This is some toast`;
  toastContainer.append(newListItem);
  // toastContainer.append(document.createElement("li"));
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
