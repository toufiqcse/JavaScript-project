// @ts-nocheck
import logo from "./logo.svg";
import "./App.css";
//
// const person = {
//   name: "Toufiq",
//   age: 24,
//   skill: {
//     language: ["python", "JavaScript", "PHP"],
//   },
// };
// const setStyle = {
//   color: "green",
//   backgroundColor: "lightGray",
//   padding: "10px",
//   borderRadius: "10px",
// };

// const Style = {
//   color: "blue",
//   backgroundColor: "lightGray",
//   padding: "10px",
//   borderRadius: "10px",
// };

const personName = [
  { name: "Toufiqul Isalm", age: "24yrs", contact: "017194342" },
  { name: "Mehedy Hasan", age: "24yrs", contact: "017194546" },
  { name: "Neela Akter", age: "24yrs", contact: "017197544" },
  { name: "Rabeya Akter", age: "24yrs", contact: "017198965" },
  { name: "Monira Akter Moni", age: "24yrs", contact: "017190865" },
  { name: "Shorna", age: "18yrs", contact: "017190847" },
];

function App() {
  return (
    <div className="App">
      <h1>Friends Biodata</h1>

      {personName.map((person) => (
        <Mybio
          name={person.name}
          age={person.age}
          contact={person.contact}
        ></Mybio>
      ))}

      {/* <Mybio
        name={personName[0]}
        age={personAge[1]}
        contact="01779764552"
      ></Mybio>
      <Mybio
        name={personName[1]}
        age={personAge[0]}
        contact="01779764552"
      ></Mybio>
      <Mybio
        name={personName[2]}
        age={personAge[2]}
        contact="01779764552"
      ></Mybio> */}
    </div>
  );
}

//create component for me
function Mybio(props) {
  return (
    <div className="gridDis">
      <div className="bio">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Mobile No: {props.contact}</p>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       {/* <Person2 name="Toufiq" gf="Rabeya"></Person2>
//       <Person2 name="Mehedy" gf="Mishkat"></Person2>
//       <Person2 name="Neela" gf="choyon"></Person2>
//       <h5>New component</h5>
//       <Friend name="Mehedy" skill="App Developer"></Friend>
//       <Friend name="Rabeya" skill="Digital marketer"></Friend> */}

//     </div>
//   );
// }

// component
// function Person2(props) {
//   // console.log(props);
//   return (
//     <div className="person">
//       <h1 style={setStyle}>{props.name}</h1>
//       <p>{props.gf}</p>
//     </div>
//   );
// }

// function Friend(props) {
//   return (
//     <div className="friend-list">
//       <h3 style={Style}>{props.name}</h3>
//       <p>{props.skill}</p>
//     </div>
//   );
// }
export default App;
