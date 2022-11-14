// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i == 7) {
//     break;
//   }
//   i++;
// }
//for loop break when get the neagtive number
const numberArray = [6, 4, 5, 6, 7, 8, 9, 10, -22, -5];

for (let i = 0; i < numberArray.length; i++) {
  console.log(i);
  if (numberArray[i] < 0) {
    break;
  }
}

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
//   if (i > 4) {
//     break;
//   }
// }

const productsList = [
  { name: "Xioami -4", description: "new Arrival", price: 12000 },
  { name: "one+", description: "Comming Soon", price: 477500 },
  { name: "Xioami Note 8 ", description: "Brand", price: 764500 },
  { name: "Xioami  Prom S6", description: "new Arrival", price: 47586 },
  { name: "Techno Spark ", description: "new ", price: 34998 },
  { name: "Realme C25Y", description: "new Arrival", price: 14500 },
  { name: "Realme C30Y", description: "new Arrival", price: 14500 },
];

for (const product of productsList) {
  if (product.price < 20000) {
    continue;
  }
  console.log(product);
}

console.log("hiii");
for (const product of productsList) {
  if (product.price > 20000) {
    break;
  }
  console.log(product);
}
