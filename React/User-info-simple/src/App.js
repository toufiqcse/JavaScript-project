// @ts-nocheck
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shoping from "./components/Shoping/Shoping";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App-main">
      <Header></Header>
      {/* <Shoping></Shoping> */}
      <Users></Users>
      <Footer></Footer>
    </div>
  );
}
export default App;
