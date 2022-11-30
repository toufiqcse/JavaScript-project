const products = [
  "Dell hardcore i29 laptop",
  "iphone 1TB camera flashlight",
  "Yellow laptop 2TB camera",
  "LAPTOP superNova laptop",
  "HTC low price phone",
  "purple color phone with laptop",
  "laptop  color phone with Laptop",
  "pink color phone with Laptop",
  "laptop color phone with Laptop",
  "LaptOP color phone with Laptop",
];
const searcing = "laptop";
//index of product
const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searcing.toLowerCase()) != -1) {
    // output.push(product);
  }
}

//includes
for (const product of products) {
  if (product.toLowerCase().includes(searcing.toLowerCase())) {
    // output.push(product);
  }
}

//startsWith
for (const product of products) {
  if (product.toLowerCase().startsWith(searcing.toLowerCase())) {
    // output.push(product);
  }
}
//endsWith

for (const product of products) {
  if (product.toLowerCase().endsWith(searcing.toLowerCase())) {
    output.push(product);
  }
}

console.log(output);
