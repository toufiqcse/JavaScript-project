import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Shoping = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h4>Shopping Mall</h4>
      {items.map((item) => (
        <Item item={item}></Item>
      ))}
    </div>
  );
};

export default Shoping;
