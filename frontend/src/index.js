import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import apolloClient from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import OadApp from "./pages/OadApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={apolloClient}>
    <OadApp />
  </ApolloProvider>
);
