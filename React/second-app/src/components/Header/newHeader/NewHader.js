import React from "react";
import "../Header.css";
const NewHader = (props) => {
  //destructure methods
  const { name } = props.header;
  return (
    <div className="menu">
      <a href="/home">{name}</a>
    </div>
  );
};
export default NewHader;
