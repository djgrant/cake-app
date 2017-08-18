import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import New from "./New";
import Edit from "./Edit";

const Routes = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/new" component={New} />
    {/* <Route path="/edit/:id" component={Edit} /> */}
  </div>
);

export default Routes;
