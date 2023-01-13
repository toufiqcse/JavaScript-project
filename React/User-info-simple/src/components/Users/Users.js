import React, { useEffect, useState } from "react";

import Person from "../Person/Person";
import User from "../User/User";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]); //for users

  ///for user cart
  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addToStores = (users) => {
    const newUser = [...userCart, users];
    setUserCart(newUser);
  };
  return (
    <div className="users">
      <div className="user">
        {users.map((user) => (
          <Person key={user.id} user={user} addToStores={addToStores}></Person>
        ))}
      </div>
      <div className="user-content">
        <User userCart={userCart}></User>
      </div>
    </div>
  );
};

export default Users;
