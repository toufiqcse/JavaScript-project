import React from "react";

const Footer = (props) => {
  return (
    <div>
      <p className="text-center mt-4">
        Copyright@ All right reserved in {props.year}
      </p>
    </div>
  );
};
export default Footer;
