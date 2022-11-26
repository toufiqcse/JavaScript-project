// @ts-nocheck
//function for input values
function getInputValue(inputId) {
  const inputFiled = document.getElementById(inputId);
  // @ts-ignore
  const inputText = inputFiled.value;
  const amountValue = parseFloat(inputText);
  //clear the input Field
  console.log(amountValue);
  // @ts-ignore
  inputFiled.value = "";
  return amountValue;
}

//function to for update total Field
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

//function for get cuurent balance field
function getCurrentbalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(balanceText);
  return previousBalance;
}

//function for update balance field
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalance = getCurrentbalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalance + amount;
  } else {
    balanceTotal.innerText = previousBalance - amount;
  }
}

// add event listner to the field

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
      openPopup();
    }
  });
