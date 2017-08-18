import React from "react";
import { compose, branch, mapProps, withProps } from "recompose";

const setLoading = prevState => ({
  ...prevState,
  loading: true
});

const setData = data => prevState => ({
  ...prevState,
  loading: false,
  data
});

const getMethods = function(resolver) {
  return Object.keys(resolver)
    .filter(key => typeof resolver[key] === "function")
    .reduce(
      (methods, methodKey) => ({
        ...methods,
        [methodKey]: query => {
          resolver[methodKey](query).then(data => {
            this.setState(setData(data));
          });
        }
      }),
      {}
    );
};

export default ({ key, ...resolver }, { mapData = d => d } = {}) =>
  compose(
    BaseComponent =>
      class extends React.Component {
        constructor(props) {
          super(props);
          this.state = { data: null, loading: false };
          this.methods = getMethods.bind(this)(resolver);
        }
        componentDidMount() {
          this.setState(setLoading);
          resolver.get().then(data => {
            this.setState(setData(data));
          });
        }
        render() {
          let props = {
            ...this.props,
            [key]: {
              ...this.state,
              ...this.methods
            }
          };
          return <BaseComponent {...props} />;
        }
      },
    branch(
      props => props[key].data,
      mapProps(props => ({
        ...props,
        [key]: {
          ...props[key],
          data: mapData(props[key].data, props)
        }
      }))
    )
  );
