import React from "react";
import { Link } from "react-router-dom";
import { compose, withState, withHandlers } from "recompose";
import "./Form.css";

const defaultValues = {
  title: "",
  desc: "",
  image:
    "http://icons.iconarchive.com/icons/flat-icons.com/flat/256/Cake-icon.png"
};

const enhance = compose(
  withState("values", "setValues", props => props.values || defaultValues),
  withHandlers({
    handleTitleChange: props => e => {
      props.setValues({
        ...props.values,
        title: e.target.value
      });
    },
    handleDescChange: props => e => {
      props.setValues({
        ...props.values,
        desc: e.target.value
      });
    },
    handleSubmit: props => e => {
      e.preventDefault();
      if (!props.values.title.length || !props.values.desc.length) {
        return;
      }
      props.onSubmit(props.values);
    }
  })
);

const Form = ({
  values: { title, desc },
  handleTitleChange,
  handleDescChange,
  handleSubmit
}) => (
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
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
      />
    </div>
    <div className="row">
      <label>Description</label>
      <input
        type="text"
        required
        value={desc}
        placeholder="Description"
        onChange={handleDescChange}
      />
    </div>
  </form>
);

export default enhance(Form);
