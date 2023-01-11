import React, { useEffect, useState } from "react";

//
const setColor = {
  color: "lightGreen",
  backgroundColor: "gray",
  border: "3px solid blue",
  margin: "10px",
  borderRadius: "10px",
};
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="users">
      <h1>All User List</h1>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

//components
function User(props) {
  return (
    <div style={setColor}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}
export default ExternalUsers;
