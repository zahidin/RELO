import gql from "graphql-tag";

export const USERS = gql`
    query users{
        users @client{
            firstName
            lastName
            company
            image
        }
  }
`