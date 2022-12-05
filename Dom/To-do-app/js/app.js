// @ts-nocheck
//cath input field

const userName = document.getElementById("name");
const useeID = document.getElementById("id");
const userAddress = document.getElementById("address");
const userEmail = document.getElementById("email");
// const userDept = document.getElementById("name");
const userResult = document.getElementById("result");

//function for pass values

function passValue() {
  var firstname = document.getElementById("name");
  localStorage.setItem("textValue", firstname);
  return false;
}

//add event listeners
// document.getElementById("button").addEventListener("click", function () {
//   const nameValue = userName.value;
//   const tableDelatis = document.getElementById("table-details");
// });
