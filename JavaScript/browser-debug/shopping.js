// @ts-nocheck
const addItem = () => {
  const nameField = document.getElementById("produc-name");
  const name = nameField.value;
  // handle the empty field
  if (!name) {
    return;
  }
  //display uI
  displayProduct(name);
  // add to local storage
  addProductToCart(name);

  nameField.value = "";
};

//display product
const displayProduct = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

// check the cart into thr local storage, if not found the cart then create a cart object
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

// add product to cart
const addProductToCart = (name) => {
  const cart = getCart(name);
  //countting the product when increasing the same product
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }

  //   console.log(cart);
  const cartStingfy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStingfy);
};

// load data from the local storage
const showingLocalStorageCart = () => {
  const cart = getCart();
  for (const productName in cart) {
    displayProduct(productName);
  }
};

// placeOrder
const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};
showingLocalStorageCart();
// console.log('Hello Dev tool');
