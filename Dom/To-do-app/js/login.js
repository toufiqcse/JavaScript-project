// @ts-nocheck
const form = document.getElementById("create-account-form");
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("useremail");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //call that function
  validateForm();
});

function validateForm() {
  //username
  if (userNameInput.value.trim() == "") {
    //cal the set errror function
    setError(userNameInput, "Name cannot be empty");
  } else if (
    userNameInput.value.trim().length < 6 ||
    userNameInput.value.trim().length > 10
  ) {
    setError(userNameInput, "Name must be 5 to 10 characters");
  } else {
    setSuccess(userNameInput);
  }
  //email
  if (emailInput.value.trim() == "") {
    setError(emailInput, "Provide an Email Address");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, "Provide valid email address");
  }
  //password
  if (passwordInput.value.trim() == "") {
    setError(passwordInput, "Password can not be empty");
  } else if (
    passwordInput.value.trim().length < 6 ||
    passwordInput.value.trim().length > 8
  ) {
    setError(passwordInput, "Password give min 6 and max 8 charecter");
  } else {
    setSuccess(passwordInput);
  }
  //confirm-password
  if (confirmPasswordInput.value.trim() == "") {
    setError(confirmPasswordInput, "Password can not be empty");
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setError(confirmPasswordInput, "Password does not match");
  } else {
    setSuccess(confirmPasswordInput);
  }
}

//function setError
function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  //change the error message text
  const changeErrorText = parent.querySelector("p");
  changeErrorText.textContent = errorMessage;
}

//function set Success
function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

//valid email address
function isEmailValid(email) {
  const emailExpress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailExpress.test(email);
}
