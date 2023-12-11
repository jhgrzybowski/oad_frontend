import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "http://10.9.0.1:8083/graphql",
    cache: new InMemoryCache(),
  });

  export default apolloClient;
  