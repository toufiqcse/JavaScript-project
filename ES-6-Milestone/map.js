const numbers = [2, 4, 6, 8, 10];
const output2 = [];
const doubleIt = (number) => number * 2;
for (const number of numbers) {
  const result = doubleIt(number);
  output2.push(result);
}
console.log(output2);

// map
// 1. loop throw for each element
//2. for each element call the provided function
// 3. result for each element will be stored in an array
//arrow functions

const output = numbers.map(doubleIt);
console.log(output);
// square
const square = numbers.map((x) => x * x);
console.log(square);
