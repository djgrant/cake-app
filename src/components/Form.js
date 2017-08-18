import React from "react";
import { Link } from "react-router-dom";
import { compose, withState, withHandlers } from "recompose";
import "./Form.css";

const enhance = compose(
  withState("title", "setTitle", ""),
  withState("description", "setDescription", ""),
  withHandlers({
    handleTitleChange: props => e => {
      props.setTitle(e.target.value);
    },
    handleDescriptionChange: props => e => {
      props.setDescription(e.target.value);
    },
    handleSubmit: props => e => {
      e.preventDefault();
      if (!props.title.length || !props.description.length) {
        return;
      }
      props.onSubmit(props);
    }
  })
);

const Form = ({ handleTitleChange, handleDescriptionChange, handleSubmit }) => (
  <form className="Form" onSubmit={handleSubmit}>
    <div className="Form-header expanded">
      <Link to="/" className="floated-left text-big">
        ×
      </Link>
      <button type="submit" className="button-link floated-right">
        Save
      </button>
    </div>
    <div className="row">
      <label>Title</label>
      <input
        type="text"
        required
        placeholder="Title"
        onChange={handleTitleChange}
      />
    </div>
    <div className="row">
      <label>Description</label>
      <input
        type="text"
        required
        placeholder="Description"
        onChange={handleDescriptionChange}
      />
    </div>
  </form>
);

export default enhance(Form);
