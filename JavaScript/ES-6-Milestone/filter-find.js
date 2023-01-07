const NumberNew = [3, 4, 5, 12, 2, 44, 54, 32, 20, 43, 1, 9];

const bigNumber = NumberNew.filter((number) => number > 20);
console.log(bigNumber);

const smallNumber = NumberNew.filter((number) => number < 30);
console.log(smallNumber);

//
const product = [
  { name: "Sun glass", color: "green", price: 890 },
  { name: "Mobile Phone", color: "black", price: 6650 },
  { name: "Laptop", color: "Silver", price: 78000 },
];
const cost = product.filter((c) => c.price < 20000);
console.log(cost);
