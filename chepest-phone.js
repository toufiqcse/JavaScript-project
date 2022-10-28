const phones = [
  { name: "samsumg s5", price: 30000, camera: 32 },
  { name: "walton d3", price: 4600, camera: 32 },
  { name: "One plus 2", price: 20000, camera: 32 },
  { name: "Techno spark", price: 5700, camera: 32 },
  { name: "itel vision 1", price: 6800, camera: 32 },
];
let cheapest = phones[0];
for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
