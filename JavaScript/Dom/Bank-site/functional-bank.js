// @ts-nocheck
//get input value
function getInputValue(fieldId) {
  const inputFiled = document.getElementById(fieldId);
  const inputFieldText = inputFiled.value;
  const inputFieldValue = parseFloat(inputFieldText);
  inputFiled.value = "";
  return inputFieldValue;
}
//function update total value
function updateTotalValue(fieldId, amount) {
  const previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
  return newTotal;
}

//update balance function
function updateBalance(amount, isAdding) {
  const previousBalance = getInnerTextValue("balance-total");
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  document.getElementById("balance-total").innerText = newBalance;
}
// function get inner text
function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueText = fieldTag.innerText;
  const fieldValue = parseFloat(fieldValueText);
  return fieldValue;
}
// deposit button handle
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    console.log(amount);
    if (amount > 0) {
      updateTotalValue("deposit-total", amount);
      updateBalance(amount, true);
    }
  });
// withdraw button handle
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    if (amount > 0 && amount <= balance) {
      updateTotalValue("withdraw-total", amount);
      updateBalance(amount, false);
    }
  });
