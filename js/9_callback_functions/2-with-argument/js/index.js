console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage(userNamer) {
  console.log(`Welcome ${userNamer}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName) => {
  console.log(`Welcome ${userNamer}! You are logged in now.`);
});
