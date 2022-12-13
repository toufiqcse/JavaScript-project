const numbers = [23, 44, 22, 5, 13, 45, 232, 78, 555];

const numberNew = [23, ...numbers, 66];
numbers.push(55);
console.log(numbers);
console.log(numberNew);
