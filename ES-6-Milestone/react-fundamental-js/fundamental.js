// @ts-nocheck
// declare varibale using let or const

const fatherName = "Rafiqul Islam";
let weather = "Rainy";
weather = "Summer";
// console.log(weather, fatherName);

// use 6 basic conditions

const studentName = "Karim";
const studentAge = 20;
const studentRoll = 1;

if ((studentName === "Karim" && studentAge <= 18) || studentRoll <= 2) {
  console.log("You are good student!");
} else if (studentAge >= 18) {
  console.log("You are  adult");
} else {
  console.log("You are student");
}

// using array
const myArray = [10, 23, 3, 2, 45, 35, 565, 443, 33, 6, 7, 8];
console.log(myArray.length);
// console.log(myArray.indexOf(2));
// set value
myArray[0] = "firstValue";
// console.log(myArray);
//push value
myArray.push(100);
// myArray.pop();
myArray[1] = "secondValue";
// console.log(myArray);

//loop through

for (let i = 0; i < myArray.length; i++) {
  const value = myArray[i];
  //   console.log("loop value is", value);
}

// function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(10, 3);
console.log("multiply is", output);

// object
const myObj = {
  name: "Toufiqul Isalm",
  age: 24,
  DOB: "01 Jan 1999",
  hobbies: "Progrmming",
  skill: ["Web Developer", "App design", "Graphic Designer"],
};
const birthday = "DOB";
// 3 ways to access object properties
console.log(myObj.skill[1]);

console.log(myObj.name);

console.log(myObj["age"]);

console.log(myObj[birthday]);
