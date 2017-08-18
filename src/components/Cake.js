import React from "react";
import { Link } from "react-router-dom";
import { withProps } from "recompose";
import Card from "./Card";
import Highlighted from "./Highlighted";
import "./Cake.css";

const enhance = withProps(props => ({
  handleRemove: props.unboundRemove.bind(null, { id: props.cake.id })
}));

const Cake = ({ search, cake, handleRemove }) => (
  <Card className="cake media">
    <img src={cake.image} alt={cake.title} className="media-figure" />
    <div className="media-body">
      <strong>
        <Highlighted search={search} highlightClassName="hl">
          {cake.title}
        </Highlighted>
      </strong>
      <p>
        <Highlighted search={search} highlightClassName="hl">
          {cake.desc}
        </Highlighted>
      </p>
      <small>
        <Link to={`/edit/${cake.id}`}>Edit</Link>&nbsp;
        <button className="button-link" onClick={handleRemove}>
          Remove
        </button>
      </small>
    </div>
  </Card>
);

export default enhance(Cake);
