import React from "react";

const User = (props) => {
  const { userCart } = props;

  console.log(userCart);
  return (
    <div className="usr">
      <h3 className="px-4 py-4">User Cart</h3>
      <div>
        <p>length:{userCart.length}</p>
      </div>
    </div>
  );
};

export default User;
