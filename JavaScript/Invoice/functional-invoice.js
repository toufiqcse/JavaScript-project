// @ts-nocheck
//get input value
function getInputValue(filedId) {
  const inputFiled = document.getElementById(filedId);
  const inputFiledText = inputFiled.value;
  const inputvalue = parseFloat(inputFiledText);
  inputFiled.value = "";
  return inputvalue;
}

// handle calculate button
document.getElementById("calculate").addEventListener("click", function () {
  const incomeTkField = document.getElementById("income-tk");
  const incomeTkText = incomeTkField.value;
  const incomeTk = parseFloat(incomeTkText);
  const foodTk = getInputValue("food");
  const rentTk = getInputValue("rent");
  const clothesTk = getInputValue("clothes");
  //   sum for exp
  const sum = foodTk + rentTk + clothesTk;
  const prev = document.getElementById("total-expns");
  const prevValuetext = prev.innerText;
  const previousBalance = parseFloat(prevValuetext);
  const newBalance = sum + previousBalance;
  prev.innerText = newBalance;

  const currentBalance = document.getElementById("total-balance");
  const balance = incomeTk - newBalance;
  currentBalance.innerText = balance;
});
