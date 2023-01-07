// const products = [
//   { name: "laptop", price: 43000 },
//   { name: "shirt", price: 500 },
//   { name: "watch", price: 45000 },
//   { name: "phone", price: 2300 },
// ];

// let totalPrice = 0;

// for (const product of products) {
//   totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

const cart = [
  { name: "laptop", price: 43000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 4 },
  { name: "watch", price: 45000, quantity: 3 },
  { name: "phone", price: 2300, quantity: 2 },
];
let cartTotal = 0;
for (const product of cart) {
  const productTotal = product.price * product.quantity;
  cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
