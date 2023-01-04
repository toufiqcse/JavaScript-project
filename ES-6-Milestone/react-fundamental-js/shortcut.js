// 1. False = '', 0, false, null, undefined

// check truthy values
let myVar = 5;
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

const money = 100;
let food;
if (money > 140) {
  food = "Biriani";
} else {
  food = "snacks";
}
// ternary logic
const food1 = money > 140 ? "Biriani" : "snacks";
console.log(food1);

// convert number to string
const num1 = 67;
console.log(num1 + "");
// convet string to number
const num2 = "870";
console.log(+num2);

// shortcut
const isActive = true;
const showuser = () => console.log("display user");
const hideuser = () => console.log("Hide user");

isActive ? showuser() : hideuser();

isActive && showuser();
isActive || hideuser();

// toggle boolean status
isActive != isActive;
