console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.table(data);

  const formElements = event.target.elements;

  const badnessScale =
    parseInt(formElements.age.value) + parseInt(formElements.badness.value);
  console.log("Badness Scale: " + badnessScale);
});
