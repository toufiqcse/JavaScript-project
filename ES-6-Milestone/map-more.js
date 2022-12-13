const friends = ["Mehedy", "neela", "Rabeya", "Azmina Akter", "Mahfuza Akter"];

const fLengths = friends.map((friend) => friend.length);
console.log(fLengths);

// return value from array of object

const products = [
  { name: "Sun glass", color: "green", price: 890 },
  { name: "Mobile Phone", color: "black", price: 6650 },
  { name: "Laptop", color: "Silver", price: 78000 },
];

const productNames = products.map((product) => product.name);
console.log(productNames);
