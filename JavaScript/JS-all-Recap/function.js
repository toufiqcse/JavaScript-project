// Functions are one of the fundamental building blocks in JavaScript

//defining function
function multiply(number) {
  const result = number * number;
  return result;
}
console.log(multiply(3));

//for factorials
const factorial = function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1);
};
console.log(factorial(3));
// kono sonkhar 3 gun
const numbers = [0, 2, 4, 3, 5, 6, 8, 9];

for (const num of numbers) {
  const output = num * num;
  console.log(output);
}
// console.log(threeMultiply(4));

// function expression
function map(f, a) {
  const results = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    results[i] = f(a[i]);
  }
  return results;
}
const f = function (number) {
  return number * number * number;
};
const numberArray = [1, 2, 3, 4, 5, 6, 7, 10];

const cube = map(f, numberArray);
console.log(cube);

// factorial function
function factori(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factori(n - 1);
  }
}
console.log(factori(3));

function newFactorial(number) {
  return number < 2 ? 1 : number * newFactorial(number - 1);
}
console.log(newFactorial(3));

//function hoisting
console.log(square(4));
function square(n) {
  return n * n;
}

// function scope
const globalVar = 39;
const globalVar2 = 10;
const globalName = "Toufiq";
// this functionis desfined is the global scope
function multi() {
  const sum = globalVar + globalVar2;
  return sum;
}
console.log(multi());

//nested function example with
function getResult() {
  const bangla = 84;
  const english = 89;
  function add() {
    return `${globalName} Result is ${bangla + english}`;
  }
  return add();
}

console.log(getResult());

// recursive function
function recursive(x) {
  if (x >= 10) {
    return;
  }
  recursive(x + 1);
}
console.log(recursive(2));

// stack recursion function
// function foo() {
//   if (i < 0) {
//     return;
//   }
//   console.log(`start: ${i}`);
//   foo(i - 1);
//   console.log(`end: ${i}`);
// }
// console.log(foo(3));

// nested function
function addSquare(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

const squareResult = addSquare(2, 3);
console.log(squareResult);
// other nested functions
function gradeResult(marks, id) {
  function subjectName(sub) {
    return sub + id;
  }
  return subjectName(marks) + subjectName(id);
}
const newGrade = gradeResult(70, 900);
console.log(newGrade);

// multiply nested functions
function a(x) {
  function b(y) {
    function c(z) {
      console.log(x + y + z);
    }
    c(3);
  }
  b(8);
}
a(3);

/// name conflicts and  scope chains
function outerMost() {
  const myName = 6;
  function innerMost(myName) {
    return myName * 2;
  }
  return innerMost;
}
console.log(outerMost()(3));

// closer function
function getCashTk(capital) {
  return function (interest) {
    return (capital * interest) / 100;
  };
}
const business = getCashTk(1000);
console.log(business(25));
//
const pet = function (name) {
  const getName = function () {
    return name;
  };
  return getName;
};
const myPet = pet("Toufiqul Isalm");
console.log(myPet());

// other way to create closer
const newPet = function (name) {
  return function (getMyName) {
    return name + getMyName;
  };
};
const resultPet = newPet("Toufiq" + " ");
console.log(resultPet("Hasan "));

// default parameters for
function minimize(a, b = 3) {
  return a - b;
}
console.log(minimize(88));

// rest parameters for
function adding(sum, ...args) {
  return args.map((x) => sum * x);
}
const aray = adding(4, 2, 3);
console.log(aray);

// Arrow Functions
//1. shorter function ES-6 versio( .self instead of .this value)
function baby() {
  const self = this;
  self.age = 0;
  setInterval(function growUp() {
    self.age++;
  }, 5000);
  //   clearInterval;
}
const p = new baby();
// console.log(p);
