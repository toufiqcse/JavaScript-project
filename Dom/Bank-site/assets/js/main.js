//form validation

document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");

  // @ts-ignore
  const userEmail = emailField.value;
  //   console.log(userEmail);

  //get user password
  const passwordField = document.getElementById("user-password");

  // @ts-ignore
  const userPassword = passwordField.value;
  //   console.log(userPassword);

  //check
  if (userEmail == "abc@gmail.com" && userPassword == "abc@474070#") {
    window.location.href = "banking.html";
  }
});
