import {ADD_USER} from './mutations/add-user'
export const defaults = {
    addUser:{
        __typename:'addUser',
        firstName:'',
        lastName:'',
        company:'',
        image:''
    }
}

export const resolvers = {
    Mutation:{
        addUser: (_, { firstName,lastName,company,image }, { cache }) => {
            const previous = cache.query({query: ADD_USER})
            const data = {
                ...previous,
                firstName,
                lastName,
                company,
                image,
                __typename:'addUser'
            }
            cache.writeData({data})
            return data
        }
    }
}