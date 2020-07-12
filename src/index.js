import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import StartPage from "./components/startPage/StartPage";

ReactDOM.render(
  <Router>
    <App className="App" />
  </Router>,

  document.getElementById("root")
);
