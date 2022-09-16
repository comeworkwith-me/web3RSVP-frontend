import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/comeworkwith-me/30daysofweb3",
  cache: new InMemoryCache(),
});

export default client;