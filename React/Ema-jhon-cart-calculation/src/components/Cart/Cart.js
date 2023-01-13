import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { carts } = props;

  //get total price
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of carts) {
    quantity = quantity + product.quantity;
    totalPrice += product.price * product.quantity; //price
    shipping = shipping + product.shipping; //shipping
  }
  //get 10% tax rate
  const tax = (totalPrice * 0.1).toFixed(2);
  const taxTk = parseFloat(tax);
  //gran totalPrice
  const granTotal = totalPrice + shipping + taxTk;

  return (
    <div className="cart-content">
      <h5>Order Summary</h5>
      <div className="px-3 cart-content">
        <p>Selected Item:{quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>
          Tax: ${taxTk} <small className="text-muted">10% vat applicable</small>{" "}
        </p>
      </div>
      <h6 className="text-success ">Grant Total: ${granTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
