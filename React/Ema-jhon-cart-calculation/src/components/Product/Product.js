import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
const Product = (props) => {
  const { addToCartHandler, product } = props;
  const { name, price, img, seller, ratings } = product;
  const setStyle = {
    marginLeft: "15px",
  };
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart-body">
        <h6 className="mt-3">{name}</h6>
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings} star</p>

        <button onClick={() => addToCartHandler(product)} className=" cart-btn">
          Cart
          <FontAwesomeIcon style={setStyle} icon={faCartPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
