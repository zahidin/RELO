import gql from "graphql-tag";

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!,$company: String!,$image:String!) {
    changeTrades(firstName: $firstName, lastName: $lastName,company:$company,image:$image){
        success
    }
  }
`