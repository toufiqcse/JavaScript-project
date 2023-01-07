const employes = {
  ide: "VS Code",
  designation: "Web Developer",
  machine: "mac OS",
  language: ["HTML", "JavaScript", "CSS"],
  specification: {
    height: 55,
    weight: "44kg",
    address: "Dhaka",
    drink: "Water",
  },
};
// convert JS obj to JSON
const employeeJson = JSON.stringify(employes);
console.log(employeeJson);
// convert JSon into JS object

const employeeObject = JSON.parse(employeeJson);
console.log(employeeObject);

// 2 .fetch
// fetch("url").then((res) => res.json());
//   .then((data) => console.log(data));

// take keys from object
const keys = Object.keys(employes);
console.log(keys);

//
// @ts-ignore
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
const newProduct = { name: "Rabeya", adresss: "koitahar", status: "single" };
// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);
// remove watch name means create new array without watch object
const remaining = products.filter((watch) => watch.name !== "watch");
console.log(remaining);
