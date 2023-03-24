console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObject = Object.fromEntries(formData);
  console.log(dataObject);
  //   console.log(data.headline, data.task);

  if (dataObject.headline && dataObject.task) {
    addEntry(dataObject);
    form.reset();
    form.headline.focus();
  }
});

function addEntry(taskInput) {
  const createListItem = document.createElement("li");

  const taskHeadline = document.createElement("h2");
  taskHeadline.textContent = taskInput.headline;

  const taskInstruction = document.createElement("p");
  taskInstruction.textContent = taskInput.task;

  createListItem.append(taskHeadline);
  createListItem.append(taskInstruction);
  todoList.append(createListItem);
}
