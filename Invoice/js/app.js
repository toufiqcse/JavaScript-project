// @ts-nocheck
const incomeTkFiled = document.getElementById("income-tk");
const foodCostTkFiled = document.getElementById("food");
const rentCostTkFiled = document.getElementById("rent");
const clothesCostTkFiled = document.getElementById("clothes");
const totalExpns = document.getElementById("total-expns");
const totalBalance = document.getElementById("total-balance");
const saveAmountFiled = document.getElementById("save-amount");
const savingAmountBalane = document.getElementById("saving-amount-balance");
const netBalance = document.getElementById("net-balance");

// add event handlers for calculations
document.getElementById("calculate").addEventListener("click", function () {
  calculateCost();
  isnegativeNumber();
});

// add event handlers for  saving amount
document.getElementById("save-btn").addEventListener("click", function () {
  calculateSavingAmount();
});
//create function for calculate the cost and show the value on total expns

function calculateCost() {
  const foodCostText = foodCostTkFiled.value;
  const foodTk = parseFloat(foodCostText);
  //for rentCost
  const rentCostText = rentCostTkFiled.value;
  const rentTk = parseFloat(rentCostText);
  // clothes cost
  const clothCostText = clothesCostTkFiled.value;
  const clothTk = parseFloat(clothCostText);
  //check for negative and value clear
  if (foodTk < 0 || clothTk < 0 || rentTk < 0) {
    foodCostTkFiled.value = "";
    rentCostTkFiled.value = "";
    clothesCostTkFiled.value = "";
  } else {
    const totalExpenses = foodTk + rentTk + clothTk;
    // show this sum to expnses row
    totalExpns.innerText = totalExpenses;
    // minus the income into expense
    const incomeTkText = incomeTkFiled.value;
    const incomeTk = parseFloat(incomeTkText);
    //set error for over expanses
    if (totalExpenses > incomeTk) {
      setError();
    } else {
      const balance = incomeTk - totalExpenses;
      totalBalance.innerText = balance;
    }
  }

  return;
}

//create function for calculate the saving amount and show the value
function calculateSavingAmount() {
  const foodCostText = foodCostTkFiled.value;
  const foodTk = parseFloat(foodCostText);
  //for rentCost
  const rentCostText = rentCostTkFiled.value;
  const rentTk = parseFloat(rentCostText);
  // clothes cost
  const clothCostText = clothesCostTkFiled.value;
  const clothTk = parseFloat(clothCostText);
  const totalExpenses = foodTk + rentTk + clothTk;
  const incomeTkText = incomeTkFiled.value;
  const incomeTk = parseFloat(incomeTkText);
  const balance = incomeTk - totalExpenses;
  const savingTkText = saveAmountFiled.value;
  const savingTk = parseFloat(savingTkText);
  const finalSavingTk = Math.round((savingTk / 100) * incomeTk);
  savingAmountBalane.innerText = finalSavingTk;
  const remainingBalance = balance - finalSavingTk;
  if (remainingBalance < 0) {
    setError();
  } else {
    netBalance.innerText = remainingBalance;
  }

  return;
}

function setError() {
  const errorMessage = document.getElementById("over-error");
  errorMessage.style.display = "block";
  return errorMessage;
}

// function for checking if negative number
function isnegativeNumber() {
  if (incomeTkFiled.value <= 0) {
    negativeError();
  } else if (foodCostTkFiled.value <= 0) {
    negativeError();
  } else if (rentCostTkFiled.value <= 0) {
    negativeError();
  } else if (clothesCostTkFiled.value <= 0) {
    negativeError();
  }
  return;
}
//negativeError
function negativeError() {
  const negativeErrorMessage = document.getElementById("negative");
  negativeErrorMessage.style.display = "block";
  foodCostTkFiled.value = "";
  rentCostTkFiled.value = "";
  clothesCostTkFiled.value = "";
}
