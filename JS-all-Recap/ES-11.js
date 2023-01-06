//global this work with browser and also node js
globalThis.setTimeout(() => console.log("hello world"), 100);

//BigInt

let LargetNumber = Number.MAX_SAFE_INTEGER;
LargetNumber += 1;
LargetNumber = BigInt(LargetNumber) + 1n;
// console.log(largetNumber);
10n === BigInt(10);

//optional chaining function ?
// not thorough the error but showing  the undefined
const language = {
  name: "javaScript",
  creator: "Brendon Eich",
  library: {
    react: {
      company: "Facebook",
      mobile: "React native mobile",
    },
  },
};

let mobile = language.library.react.mobile;
let others = language?.library?.mobile;
console.log(mobile);
console.log(others);

// same system also use in array method

//Nullish coalasing operator
// use this ?? operator it will show the right side result when left side value is null or undefined
// it is differecne with OR operator
let person;
person = null;
// person = NaN;
// person = 0;
// person = false;

console.log(person ?? "Nullish value is null or undefined");
console.log(person || "OR Operator");

//promise
const promise1 = new Promise((resolve) => resolve("Burger"));
const promise2 = new Promise((_, reject) => reject("Apple"));
const promise3 = new Promise((resolve) => resolve("Pizza"));

Promise.allSettled([promise1, promise2, promise3]).then((Response) =>
  console.log(Response)
);

//matchAll
const email = "ToufiqCse7@gmail.Com";
const regx = /[A-Z]/g;
const results = email.matchAll(regx);
console.log(resultsd);

for (let match of resultsd) {
  console.log(match);
}
