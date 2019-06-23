import gql from "graphql-tag";

export const UPDATE_USER = gql`
mutation updateUser($id:Int!, $firstName: String!, $lastName: String!,$company: String!,$image:String!) {
    updateUser(id:$id, firstName: $firstName, lastName: $lastName,company:$company,image:$image){
        success
    }
  }
`