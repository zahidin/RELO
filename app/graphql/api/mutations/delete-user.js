import gql from "graphql-tag";

export const DELETE_USER = gql`
    mutation deleteUser($id:Int!){
        deleteUser(id:$id){
            success    
        }
  }
`