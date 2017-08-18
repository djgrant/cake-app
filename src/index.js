import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import "./utils.css";

render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
