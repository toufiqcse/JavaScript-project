function addNumber(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const summaryrr = addNumber(22, 12);
// console.log(summaryrr);

//use of unlimited parameter values

function sumNumber(num1, num2) {
  // console.log(arguments);
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }

  return result;
}
const summary = sumNumber(33, 44, 33, 4, 5, 2, 4, 5, 5, 78, 8, 6, 3);
console.log(summary);
