import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./index.css";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";

const client = new ApolloClient({ uri: "http://localhost:4000" });

// should support list, add and delete items

ReactDOM.render(
  <ApolloProvider client={client}>
    <CreateItem />
    <Items />
  </ApolloProvider>,
  document.getElementById("root")
);
