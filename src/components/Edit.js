// WIP

import React from "react";
import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";
import withData from "../hocs/withData";
import cakeResolver from "../resolvers/cakeResolver";
import Form from "./Form";

const enhance = compose(
  withRouter,
  withData(cakeResolver),
  withProps(props => ({
    onSubmit: data => {
      props.cakes.edit({
        id: props.match.params.id,
        data: {
          title: data.title,
          desc: data.description,
          image:
            "http://icons.iconarchive.com/icons/flat-icons.com/flat/256/Cake-icon.png"
        }
      });
      props.history.replace("/");
    }
  }))
);

export default enhance(Form);
