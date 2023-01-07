// @ts-nocheck
/*
Assignment Operators
An assignment operator assigns a value to its left operand based on the value of its right operand
*/
// Exponentiation assignment operators
let num1 = 10;
console.log((num1 **= 3));
console.log((num1 **= 0));

// left shift অ্যাসাইনমেন্ট (<<=) অপারেটর নির্দিষ্ট পরিমাণ bit বাম দিকে নিয়ে যায় এবং ভেরিয়েবলে ফলাফল বরাদ্দ করে

let num2 = 5; //00000000000000000000000000000101
num2 <<= 2; //00000000000000000000000000010100
console.log(num2);

//Right shift assignment
// opposite to the left shift assignment
let rightShiftNumber = -5;
rightShiftNumber >>= 2;
console.log(rightShiftNumber);

// assigning to the properties
const object = {};
object.x = 3;
console.log(object.x);
const key = "Y";
object[key] = 6;
console.log(object[key]);
console.log(object);

// Destructuring assignment
const fruits = ["apple", "banana", "orange"];
// without destructuring
const apple = fruits[0];
const banana = fruits[1];
const orange = fruits[2];
//   console.log(apple);

// with destructuring
// const [apple, banana, orange] = fruits;

// Arithmetic operations
//Increment
let num = 3;
const y = num++;
console.log(y);
let unNum = 9;
const result = ++unNum;
console.log(result);

// Ternary operation
const age = 10;
const status = age >= 18 ? "Adult" : "Child";
console.log(status);

// Grouping Operator
const n1 = 2;
const n2 = 4;
const n4 = 40;
const output = n1 + n2 * n4;
const output2 = n1 + n2 / n4;
console.log(output);
console.log(output2);
