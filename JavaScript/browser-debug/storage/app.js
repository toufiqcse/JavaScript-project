// @ts-nocheck

const addProduct = () => {
  const productNameField = document.getElementById("product-name");
  const productName = productNameField.value;
  // console.log(productName);
  const productPriceField = document.getElementById("product-price");
  const productPrice = productPriceField.value;
  //   console.log(productName, productPrice);
  displayProductName(productName, productPrice);
};

// display product
const displayProductName = (name, price) => {
  const ul = document.getElementById("display-product-list");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};
