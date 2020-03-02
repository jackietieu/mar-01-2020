import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import Box from "@material-ui/core/Box";

const client = new ApolloClient({ uri: "http://localhost:4000" });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Box style={{ padding: "24px" }}>
      <CreateItem />
      <Items />
    </Box>
  </ApolloProvider>,
  document.getElementById("root")
);
