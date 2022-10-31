//Factorial
function factorial(number) {
  let factorialNuber = 1;
  for (let i = 1; i < factorialNuber; i++) {
    factorialNuber = factorialNuber * number;
  }
  return factorialNuber;
}
let fact = factorial(5);
console.log(fact);
