const products = [
  { name: "Xioami -4", description: "new Arrival", price: 34000 },
  { name: "one+", description: "Comming Soon", price: 477500 },
  { name: "Xioami Note 8 ", description: "Brand", price: 764500 },
  { name: "Xioami  Prom S6", description: "new Arrival", price: 47586 },
  { name: "Techno Spark ", description: "new ", price: 34998 },
  { name: "Realme C25Y", description: "new Arrival", price: 14500 },
];

function searchProduct(products, searchText) {
  const searchResult = [];
  for (const product of products) {
    if (product.name.includes(searchText)) {
      searchResult.push(product);
    }
  }
  return searchResult;
}
const matched = searchProduct(products, "Realme ");
console.log(matched);
