console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// ----Call handleUserLogin below!----
handleUserLogin(showWelcomeMessage);

// ----created callbacks----
// 1
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}

// 2 & 3
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});

