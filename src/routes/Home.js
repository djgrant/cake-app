import React from "react";
import { compose, withHandlers, withState } from "recompose";
import Cakes from "../components/Cakes";
import Create from "../components/Create";

const enhance = compose(
  withState("search", "setSearch"),
  withHandlers({
    handleSearch: props => e => {
      props.setSearch(e.target.value);
    }
  })
);

const App = ({ search, handleSearch }) => (
  <div>
    <div className="header">
      <h1>
        <span role="img" aria-label="cake">
          🎂
        </span>
      </h1>
      <h2>Cake App</h2>
      <div className="card">
        <input type="search" placeholder="Search..." onChange={handleSearch} />
      </div>
    </div>
    <div className="main">
      <Cakes search={search} />
    </div>
    <Create />
  </div>
);

export default enhance(App);
