const numbers = [42, 65];
const [firstValue, secondValue] = [30, 40];

const boxify = (num1, num2) => {
  const nums = [num1, num2];
  return nums;
};
console.log(boxify(20, 30));

//objects destructuring
const { names, age } = { names: "Toufiq", age: 34 };

const employee = {
  ide: "VS Code",
  designation: "Web Developer",
  machine: "mac OS",
  language: ["HTML", "JavaScript", "CSS"],
  specification: {
    height: 55,
    weight: "44kg",
    address: "Dhaka",
    drink: "Water",
  },
};
const { machine, ide } = employee;
const { address } = employee?.specification;
