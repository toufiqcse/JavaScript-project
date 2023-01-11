import React from "react";
import NewHader from "./newHeader/NewHader";
const Header = () => {
  const headerName = [
    { name: "Home" },
    { name: "country" },
    { name: "Gallery" },
    { name: "about" },
    { name: "contact" },
    { name: "news" },
  ];

  return (
    <div className="header">
      {headerName.map((header) => (
        <NewHader header={header}></NewHader>
      ))}
    </div>
  );
};

export default Header;
