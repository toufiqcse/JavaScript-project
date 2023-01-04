// @ts-nocheck
const checkEmail = () => {
  const emailField = document.getElementById("email-field").value;
  let validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailField.match(validEmail)) {
    const dialog = document.getElementById("dialog");
    const div = document.createElement("div");
    dialog.textContent = "";
    div.innerHTML = `
        <div class ="mt-2">
            <h6 class = "text-success">Your Email is Valid</h6>
        </div>
    `;
    dialog.appendChild(div);
    return true;
  } else if (emailField === "") {
    alert("empty email");
  } else {
    const dialog = document.getElementById("dialog");
    const div = document.createElement("div");
    dialog.textContent = "";
    div.innerHTML = `
        <div class ="mt-2">
            <h6 class = "text-danger">Your Email is Not Valid</h6>
        </div>
    `;
    dialog.appendChild(div);
    return false;
  }
  //   console.log(emailField);
};
