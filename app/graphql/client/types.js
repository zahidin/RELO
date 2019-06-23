export const typeDefs = `
    type users {
        id:ID!
        firstName:String!
        lastName:String!
        company:String!
        image:String!
    }

    type Mutation {
        addPost( firstName:String! , lastName:String! , company:String! , image:String! ): users!
    }

    type query{
        users:[users!]
    }
`
