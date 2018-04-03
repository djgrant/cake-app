import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import New from "./routes/New";
import Edit from "./routes/Edit";
import "./styles/main.css";
import "./styles/utils.css";

render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={New} />
      <Route path="/edit/:id" component={Edit} />
    </div>
  </Router>,
  document.getElementById("root")
);
