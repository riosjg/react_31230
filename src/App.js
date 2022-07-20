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
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UnmountExample from "./components/ExampleComponents/UnmountExample";
import Intercambilidad from "./components/ExampleComponents/Intercambiabilidad";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
