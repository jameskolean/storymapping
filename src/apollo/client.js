import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri: "https://jameskolean-hasura-test.herokuapp.com/v1/graphql",
  fetch,
})
