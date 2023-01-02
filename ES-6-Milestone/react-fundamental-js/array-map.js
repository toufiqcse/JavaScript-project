const products = [
  {
    name: "laptop",
    description: "Brnd New Item",
    price: 385523,
    color: "gray",
    brand: "Lenevo",
  },
  {
    name: "phone",
    description: "Samsung new Brand",
    price: 536553,
    color: "blue",
    brand: "samsung",
  },
  {
    name: "camera",
    description: "Brnd New Item",
    price: 345895,
    color: "black",
    brand: "canon",
  },
  {
    name: "watch",
    description: "Brnd New Item",
    price: 5464,
    color: "green",
    brand: "casio",
  },
];
// map loop through kore and return o kore

const brands = products.map((newProduct) => newProduct.brand);
console.log(brands);

// loop through korbo but return korbe na tai ForEach use korbo
products.forEach((newProduct) => console.log(newProduct.color));

// filter die condtion fullfill korle tobei kaj hobe
const cheap = products.filter((product) => product.price <= 10000);
console.log(cheap);

// unipue name
const specificName = products.filter((product) => product.name.includes("n"));
console.log(specificName);

// find holo jodi match kore tahole first value dekhabe

const special = products.find((product) => product.name.includes("a"));
console.log(special);
