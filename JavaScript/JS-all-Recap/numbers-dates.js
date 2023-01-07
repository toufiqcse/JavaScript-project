const numbers = [-23, 53, 5, 3, 5, 7, 9, 12, 444, -1, -0, 5];
const biggestNumbers = Number.MAX_VALUE;
console.log(biggestNumbers);
// min numbers
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return "Process as 0";
  }
  return x / y;
}

console.log(divide(5e-324, 1));
// expected output: 5e-324

console.log(divide(5e-324, 2));
// expected output: "Process as 0"
// NaN Numbers

function clean(x) {
  if (x === Number.NaN) {
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}
console.log(clean(Number.NaN));

//Parse Float
function circumference(radius) {
  if (Number.isNaN(Number.parseFloat(radius))) {
    return 0;
  }
  return parseFloat(radius) * 2.0 * Math.PI;
}
console.log(circumference(10));
console.log(circumference("abcdf"));

// check integer
function checkInt(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits";
  }
  return "Does not Fitt";
}
console.log(checkInt(10, 3));
console.log(checkInt(8, 16));

//exponential notation

function exponential(a, b) {
  return Number.parseFloat(a).toExponential(b);
}
console.log(exponential(1234, 2));

// toFixed Function
function fixedNumber(n) {
  return Number.parseFloat(n).toFixed(2);
}
console.log(fixedNumber(120.35355355));

// toPrecision
function precisionNumber(n) {
  return Number.parseFloat(n).toPrecision(5);
}
console.log(precisionNumber(123.5838));

//-----------------MATH FUNCTIONS----------------

function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(4, 7)); // .abs()

function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}
console.log(getCircleY(2, 10)); //.sin()

function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}
console.log(getCircleX(2, 10)); //.cos()

//floor function
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.99));

//ceil
console.log(Math.ceil(5.95));
// expected output: 5

//min
console.log(Math.min(3, 5, 6, 8));
//max
console.log(Math.max(3, 5, 6, 8));
//random
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomNumber(8));

//square root
function getSquareRoot(a, b) {
  return Math.sqrt(a * a + b * b);
}
console.log(getSquareRoot(4, 3));

//The Math.cbrt() static method returns the cube root of a number. That is

console.log(Math.cbrt(9));

//The Math.imul() static method returns the result of the C-like 32-bit multiplication of the two parameters.

console.log(Math.imul(3, 4));

// Date object
function jsClock() {
  const today = new Date();
  const hours = today.getHours();
  const mins = today.getMinutes();
  const secs = today.getSeconds();
  let temp = String(hours % 2);
  if (temp === "0") {
    temp = "12";
  }

  temp += (mins < 10 ? ": 0" : ":") + mins;
  temp += (secs < 10 ? ": 0" : ":") + secs;
  temp += hours >= 12 ? " P.M" : "A.M";
  return temp;
}
console.log(jsClock());

// age
var dob = new Date("01/01/1999");
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();
console.log(month_diff);
//convert the calculated difference in date format
var age_dt = new Date(month_diff);
// console.log(age_dt);
//extract year from date
var year = age_dt.getUTCFullYear();
console.log(year);
//now calculate the age of the user
var age = Math.abs(year - 1970);

//display the calculated age
console.log("Age : " + age + " years");
