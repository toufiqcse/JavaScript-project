const user = {
  name: "John",
  id: "123",
  designation: "Worker",
  salary: 398000,
  skill: {
    webDevelopment: true,
    androidDeveloper: false,
    operatingSystem: "Kali Linux",
  },
  education: ["SSC", "HSC", "Honours", "MSC", "PHD"],
  income: function (expenses) {
    this.salary = this.salary - expenses;
    console.log(this);
    return this.salary;
  },
};

// user.income(5000);
// 2nd task
const stringVariable = `My Name is ${user.name} and my operating system skil is ${user.skill.operatingSystem} and also education qualificatiob is ${user.education[1]}`;
// console.log(stringVariable);

// 3
const zero = () => {
  return true;
};
// console.log(89);

//4
const vagfol = (inputNumber) => {
  const output = inputNumber / 7;
  return output;
};

const outputNumber = vagfol(70);
// console.log(outputNumber);
//  5
const sumVagfol = (num1, num2) => {
  const sum = num1 + num2;
  const result = sum / 2;
  return result;
};
const outputVagfol = sumVagfol(10, 20);
// console.log(outputVagfol);

// 6
const array = [7, 14, 21, 28, 35, 30, 10];
const newArray = [];
array.map((element) => {
  const vag = element / 7;
  newArray.push(vag);
});
// console.log(array);
console.log(newArray);
