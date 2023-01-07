function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  // @ts-ignore
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  // @ts-ignore
  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    // @ts-ignore
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

function openPopup() {
  const popup = document.getElementById("open-popup");
  popup.classList.add("open-popup");
  return popup;
}
function closePopup() {
  const popup = document.getElementById("open-popup");
  popup.classList.remove("open-popup");
}

// handle deposit  button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

// handle withdraw button
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
//handle popupmenu
document.getElementById("close-popup").addEventListener("click", function () {
  closePopup();
});
