// @ts-nocheck
function deleteMe() {
  document.getElementById("my-result").value = "";
}

function calculator(newValue) {
  document.getElementById("my-result").value += newValue;
}

function answer() {
  var storeInput = document.getElementById("my-result").value;
  var calculationData = eval(storeInput);
  document.getElementById("my-result").value = calculationData;
}
