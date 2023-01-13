// @ts-nocheck
import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="" />
      <div className="nav-menu">
        <a href="/home">Home</a>
        <a href="/Orders">Orders</a>
        <a href="/Shop">Shop</a>
        <a href="/About Us">About</a>
      </div>
    </div>
  );
};

export default Header;
