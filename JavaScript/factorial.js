//factorial...
// let factorial = 3;
// for (let i = 1; i < 3; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

//factorial with function
// function getFactorial(number) {
//   let factorialSet = 1;
//   for (let i = 1; i <= number; i++) {
//     factorialSet = factorialSet * i;
//   }
//   return factorialSet;
// }
// let inputFactorial = getFactorial(4);
// console.log("Factorial is:", inputFactorial);

//functin with factorial
function getFactorial(number) {
  let setFactorial = 1;
  for (let i = 1; i <= number; i++) {
    setFactorial = setFactorial * i;
  }
  return setFactorial;
}
let inputFactorial = getFactorial(5);
console.log("Factorial", inputFactorial);
