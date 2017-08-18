import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";
import withData from "../hocs/withData";
import cakeResolver from "../resolvers/cakeResolver";
import Form from "./Form";

const enhance = compose(
  withRouter,
  withData(cakeResolver),
  withProps(props => ({
    values: props.cakes.data
      ? props.cakes.data.find(cake => cake.id === props.match.params.id)
      : {},
    onSubmit: values => {
      props.cakes.edit({
        id: props.match.params.id,
        data: values
      });
      props.history.replace("/");
    }
  }))
);

export default enhance(Form);
