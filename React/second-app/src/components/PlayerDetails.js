import React, { useEffect, useState } from "react";

function AllPlayers() {
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPlayer(data));
  }, []);
  return (
    <div>
      <h1>players</h1>
      {players.map((player) => (
        <GetPlayers name={player.name}></GetPlayers>
      ))}
    </div>
  );
}
//component
function GetPlayers(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
    </div>
  );
}
export default AllPlayers;

// https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}
