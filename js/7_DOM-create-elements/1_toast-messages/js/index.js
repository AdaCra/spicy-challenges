console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  console.log("TEST THAT IT WORKS!");
  let newListItem = document.createElement("li");
  toastContainer.append(newListItem);
  // toastContainer.append(document.createElement("li"));
  document
    .querySelector('[data-js="toast-container"]')
    .append(document.createElement("li"));
  newListItem.classList.add(`toast-container__message`);
  newListItem.innerText = `I'm a toast message`;

  // `<li class='toast-container__message'>I'm a toast message.</li>`;
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
