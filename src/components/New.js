import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";
import withData from "../hocs/withData";
import cakeResolver from "../resolvers/cakeResolver";
import Form from "./Form";

const enhance = compose(
  withRouter,
  withData(cakeResolver),
  withProps(props => ({
    onSubmit: values => {
      props.cakes.add({ data: values });
      props.history.replace("/");
    }
  }))
);

export default enhance(Form);
