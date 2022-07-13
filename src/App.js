import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Title from "./components/ExampleComponents/TitleClassComp";
import ClickTracker from "./components/ExampleComponents/ClickTracker";
import ItemListContainer from "./components/ItemListContainer";
import Promises from "./components/ExampleComponents/Promises";
import MapExample from "./components/ExampleComponents/Map";
import Item from "./components/Item";
import PokeAPIExample from "./components/ExampleComponents/PokeAPIExample";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      {/* <PokeAPIExample /> */}
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
