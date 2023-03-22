console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  let hourOfDay = new Date().getHours();
  if (hourOfDay >= 6 && hourOfDay <= 12) {
    return "Good Morning";
  }
  if (hourOfDay >= 13 && hourOfDay <= 18) {
    return "Good Afternoon";
  }
  if (hourOfDay >= 19 && hourOfDay <= 22) {
    return "Good Evening";
  }
  return "Good Night";
}

function getDayColor() {
  // Code here
  let dayOfWeek = new Date().getDay();
  if (dayOfWeek === 1) {
    return "darkgray";
  }
  if (dayOfWeek > 1 && dayOfWeek < 5) {
    return "lightblue";
  }
  return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
