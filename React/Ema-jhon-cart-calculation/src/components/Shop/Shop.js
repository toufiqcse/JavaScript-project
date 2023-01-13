import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  //declare state for cart
  const [carts, setCarts] = useState([]);
  //data load from json file
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //data load from local storage function for cart
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);
  //
  const addToCartHandler = (selectedProducts) => {
    let newCart = [];
    const exists = carts.find((product) => product.id === selectedProducts.id);
    if (!exists) {
      selectedProducts.quantity = 1;
      newCart = [...carts, selectedProducts];
    } else {
      const rest = carts.filter(
        (product) => product.id !== selectedProducts.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCarts(newCart);
    //for local storage
    addToDb(selectedProducts.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart carts={carts}></Cart>
      </div>
    </div>
  );
};

export default Shop;
