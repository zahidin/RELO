import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import React from 'react'
import {Text} from 'native-base'
import { HttpLink } from 'apollo-link-http'
import { API_URL_GRAPHQL } from './config'
import { setContext } from 'apollo-link-context'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link';
import ApolloLinkTimeout from 'apollo-link-timeout'
import { onError } from "apollo-link-error";
import {defaults,resolvers} from './graphql/client/resolvers'
import {typeDefs} from './graphql/client/types'
import { AsyncStorage,Alert} from 'react-native'
import {persistCache} from 'apollo-cache-persist'
import {fetch} from 'apollo-env'
import Modal from "react-native-modal"
import {ModalConfirmationAction} from './commons/Modal'
import {Navigation} from 'react-native-navigation'
import { View } from 'native-base';

const authLink = setContext((_, { headers }) => {
    header = {
        headers:{
            ...headers,
        }
    }
    return header
})
const stateLink = withClientState({
    cache,
    resolvers,
    defaults,
    typeDefs,
})
const cache = new InMemoryCache()
persistCache({
    cache,
    storage:AsyncStorage,
})
const httpLink = new HttpLink({ uri: `${API_URL_GRAPHQL}` })
const errorLink = onError(({operation,response,graphQLErrors,networkError}) => {
    if(graphQLErrors){
        graphQLErrors.map(({message,locations,path}) => {
            if(message.length !== 0){
                const myTimeout = setTimeout(() => {
                    ModalConfirmationAction({
                        type:'alert',
                        message
                    })
                    clearTimeout(myTimeout)
                },100)
            }
        })
    }
    if (networkError) Alert.alert('',`[Network error]: ${networkError}`);
})
// const timeoutLink =  new ApolloLinkTimeout(30000)

export const client = new ApolloClient({
    queryDeduplication:false,   
    link : ApolloLink.from([errorLink, authLink, httpLink,stateLink]),
    cache
})