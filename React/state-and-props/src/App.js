// @ts-nocheck
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Phone from "./components/Phone/Phone";
import Watch from "./components/Watch/Watch";

function App() {
  const year = new Date();
  const getYear = year.getFullYear();

  return (
    <div className="App">
      <Header></Header>
      <Phone name={"I-Phone"} price={"12873"}></Phone>
      <Watch></Watch>
      <Footer year={getYear}></Footer>
    </div>
  );
}
export default App;
