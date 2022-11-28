import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.js";
import Model from "./model/Model.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
// comment out the above line and uncomment below to see example usage of style transfer
root.render(<Model />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
