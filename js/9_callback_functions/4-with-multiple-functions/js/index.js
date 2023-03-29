console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`User "${userName}" does not exist`);
  }
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

let currentUser = "Jane Doe";

handleUserLogin(showWelcomeMessage, showErrorMessage, currentUser);

currentUser = "John Doe";
handleUserLogin(showWelcomeMessage, showErrorMessage, currentUser);
