import React from "react";
import { compose } from "recompose";
import withData from "../hocs/withData";
import Cake from "./Cake";
import cakeResolver from "../resolvers/cakeResolver";

const enhance = compose(
  withData(cakeResolver, {
    mapData: (data, props) =>
      data.filter(cake => {
        let regex = new RegExp(props.search, "gi");
        return cake.title.match(regex) || cake.desc.match(regex);
      })
  })
);

const Cakes = ({ cakes, search }) => (
  <div>
    {cakes.loading && "Loading..."}
    {cakes.data && cakes.data.length ? (
      cakes.data.map(cake => (
        <Cake
          key={cake.id}
          cake={cake}
          search={search}
          unboundRemove={cakes.remove}
        />
      ))
    ) : (
      <div>No results</div>
    )}
  </div>
);

export default enhance(Cakes);
