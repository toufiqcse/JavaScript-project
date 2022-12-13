const add = (num1, num2) => num1 + num2;
const sum = add(10, 12);

const multiplication = (num1, num2, num3) => num1 * num2 * num3;
const result = multiplication(10, 10, 5);
console.log(result);
// 5times
const fiveTimes = (num) => num * 5;
const double = fiveTimes(5);
console.log(double);
// without parameter
const getName = () => "Toufiq";
const names = getName();
console.log(names);

// math operation
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = x * y;
  const output = result * 5;
  return output;
};
const total = doMath(2, 3);
console.log(total);
