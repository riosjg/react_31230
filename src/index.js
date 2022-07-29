import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcc-UQzKkaiieXOhm9fQTFuroBmSCqb78",
  authDomain: "tienda-coderhouse-48b3a.firebaseapp.com",
  projectId: "tienda-coderhouse-48b3a",
  storageBucket: "tienda-coderhouse-48b3a.appspot.com",
  messagingSenderId: "344104748992",
  appId: "1:344104748992:web:1cabd167aeb6948275aa25",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
