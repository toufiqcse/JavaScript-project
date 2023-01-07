// @ts-nocheck
// for templatte string
const firstName = "Toufiq";
const id = 102;

//object
const walton = { name: "Laptop", price: 28736, color: "Silver" };
const prdct = walton.name;
const Bio = `<h3>My NAme is ${firstName} and my id no is ${id} and I have ${walton.name}  and this color is ${walton.color}</h3> `;
console.log(Bio);

// one perameter based arrow function
const numbers = (number) => number * 2;
const result = numbers(20);
console.log(result);
// two perameter based arrow function
const twoPerameter = (num1, num2) => {
  const sumFirst = num1 + 2;
  const sumSecond = num2 + 2;
  const multiplication = sumFirst * sumSecond;
  return multiplication;
};

const output = twoPerameter(2, 3);
console.log(output);
// three perameter based arrow functions
const threePerameter = (num1, num2, num3) => {
  const multply = num1 * num2 * num3;
  return multply;
};
const threePerameterResult = threePerameter(1, 2, 3);
console.log(threePerameterResult);

// use map on the array
const mapArray = [23, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const mapResult = mapArray.map((x) => x * 5);
console.log(mapResult);

// use filter for find out the odd number
const oddNumber = [2, 3, 4, 6, 7, 9, 66, 12, 34, 54, 44, 13, 99];
const filterResult = oddNumber.filter((x) => x % 2 !== 0);
console.log(filterResult);
