// @ts-nocheck
//get the amount deppositted
//add event listener
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");

  const newdepositAmount = parseFloat(depositInput.value);

  const depositTotal = document.getElementById("deposit-total");

  const previusDepositText = depositTotal.innerText;
  const previusDepositAmount = parseFloat(previusDepositText);

  //   console.log(previusDepositAmount, typeof previusDepositAmount);

  const newDepositTotal = previusDepositAmount + newdepositAmount;

  //   console.log(newDepositTotal, typeof newDepositTotal);
  //new deposit ammount
  depositTotal.innerText = newDepositTotal;

  //update account balanced
  const balanceTotal = document.getElementById("balance-total");

  //previous balance amount
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  //new balance atotal
  const newBalanceTotal = previousBalanceTotal + newdepositAmount;

  // balance total set
  balanceTotal.innerText = newBalanceTotal;

  //   clear input fields
  depositInput.value = "";
});

//withdraw account balance handlers

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withDrawAmountText = withdrawInput.value;
  //convert to numbers
  const newWithDrawAmount = parseFloat(withDrawAmountText);

  //set nwithdraw total amount

  const withDrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withDrawTotal.innerText;
  //convert to numbers
  const previuosWithdrawTotal = parseFloat(previousWithdrawText);

  const newWithDrawTotal = previuosWithdrawTotal + newWithDrawAmount;
  withDrawTotal.innerText = newWithDrawTotal;

  //after withdraw balance total amount

  const balanceTotalTk = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalTk.innerText);

  const newbalanceTotalTk = previousBalanceTotal - newWithDrawAmount;
  balanceTotalTk.innerText = newbalanceTotalTk;

  //   clear withdraw input
  withdrawInput.value = "";
  //check for negative amount
  const alertnegativeAmount = document.getElementById("balance-total");

  if (balanceTotalTk.innerText <= 0) {
    alertnegativeAmount.style.color = "red";
  }
});
