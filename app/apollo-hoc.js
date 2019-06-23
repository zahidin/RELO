import React , {Component} from 'react'
import {Navigation} from 'react-native-navigation'
import { ApolloProvider } from 'react-apollo'
import {client} from './apollo-client' 

const apolloProviderHOC = (WrappedComponent) => {
    class Enhance extends Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
                <ApolloProvider client={client}>
                    <WrappedComponent {...this.props} />
                </ApolloProvider>
            )
        }
    }
    return Enhance
}

export const registerComponent = (name,component) => {
    Navigation.registerComponent(
        name,
        () => apolloProviderHOC(component)
    )
}