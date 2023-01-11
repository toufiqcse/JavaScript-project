// @ts-nocheck
import LoadCountries from "./components/Country/RestCountries";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadCountries></LoadCountries>
      <Footer></Footer>
    </div>
  );
}
export default App;
