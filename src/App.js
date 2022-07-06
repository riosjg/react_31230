import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import WidgetCart from "../src/components/NavBar/WidgetCart";
import Title from "./components/TitleClassComp";
import ClickTracker from "./components/ClickTracker";

function App() {
  return (
    <>
      {/* <NavBar WidgetCart={WidgetCart}>
        <button>Botón 1</button>
      </NavBar> */}
      {/* <Title /> */}
      <ClickTracker />
    </>
  );
}

export default App;
