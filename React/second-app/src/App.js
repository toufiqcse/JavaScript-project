// @ts-nocheck
import Counter from "./components/Counter";
import ExternalUsers from "./components/ExternalUsers";
import AllPlayers from "./components/PlayerDetails";
import LoadCountries from "./components/Country/RestCountries";
import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* <Counter></Counter> */}
      {/* <ExternalUsers></ExternalUsers> */}
      {/* <AllPlayers></AllPlayers> */}
      <LoadCountries></LoadCountries>
    </div>
  );
}
export default App;
