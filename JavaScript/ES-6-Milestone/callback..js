function welcomeMessage(name, greetHandler) {
  //   console.log(name, greetHandler);
  greeetMornings(name);
}

function greeetMornings(name) {
  console.log("Good Morning", name);
}
function greeetAfterNooon(name) {
  console.log("Good AfterNoon", name);
}

welcomeMessage("Toufiq", greeetMornings);
welcomeMessage("Rabiul", greeetAfterNooon);

// as like
document.getElementById("btn-btn").addEventListener("click", function () {
  console.log("btn clicked");
});
// declare function
function handleClick() {
  console.log("button clicked");
}
document.getElementById("btn-my").addEventListener("click", handleClick);
