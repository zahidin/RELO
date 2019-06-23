import {compose,withHandlers,lifecycle, withState, branch, renderComponent} from 'recompose'
import Example from './index'
import {Alert} from 'react-native'
import React from 'react'
import { graphql } from 'react-apollo'
import Loader from '../commons/Loader'
import { USERS } from '../graphql/api/queries/users';
import { DELETE_USER } from '../graphql/api/mutations/delete-user'
import {Navigation} from 'react-native-navigation'
import Nodata from '../commons/Nodata'
import {EXAMPLE_ADD} from '../example-add/const'
import {MODAL} from './modal'
import { client } from '../apollo-client';
import { EXAMPLE_UPDATE } from '../example-update/const';
// import Timeout from '../commons/Timeout'

const Loading  = (props) => (
    <Loader />
)

const EmptyData = (props) => (
    <Nodata/>
)

// const CheckEmptyData = branch(({users}) => users.users && users.users.length == 0, renderComponent(EmptyData),renderComponent(Example))
// const CheckTimeout = branch(({users}) => users.error && !users.loading, renderComponent( props => <View><Example/><Timeout refetch={() => props.users.refetch()}/></View> ),CheckEmptyData )
// const CheckUsers = branch(({users}) => users.loading && !users.users , renderComponent(Loading),CheckTimeout)
const enhance = compose(
    withState('interactions','setInteractions',false),

    graphql(USERS,{
        name:'users',
        options:props => ({
            fetchPolicy:'cache-and-network',
        }),
        skip:props => !props.interactions
    }),

    graphql(DELETE_USER,{
        name:'deleteUser',
    }),
    withHandlers({
        handleDetailUser: props => (items) => {
            Navigation.showModal({
                stack: {
                    children: [{
                      component: {
                        ...MODAL.component,
                        passProps:{
                            ...items
                        }
                      },
                    }]
                  }
            })
        },

        handleRemoveUser: props => (id) => {
            props.deleteUser({
                variables:{
                    id:Number.parseInt(id)
                }
            }).then(() => {
                Alert.alert('SUKSES','')
                props.users.refetch()
            }).catch((err) => {
                Alert.alert('Error',err)
            })
        },
        
        handleUpdateUser:props => (users) => {
            Navigation.push(props.componentId,{
                component:{
                    ...EXAMPLE_UPDATE.component,
                    passProps:{
                        users
                    }
                 }
            })
        }
    }),

    lifecycle({
        componentDidMount(){
            this.navigationEventListener = Navigation.events().bindComponent(this);
        },

        navigationButtonPressed({ buttonId }) {
            if(buttonId == 'buttonAdd'){
                Navigation.push(this.props.componentId,{
                    component:{
                       ...EXAMPLE_ADD.component,
                       passProps:{
                           users:this.props.users
                       }
                    }
                 })
            }
            // console.warn(JSON.stringify(buttonId))
        },

        componentWillMount(){
            Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
                if(selectedTabIndex == 1){
                        this.props.setInteractions(true)          
                }
            });
        },
    }),
    // branch(({interactions}) => interactions,
    //     compose(
    //         graphql(USERS,{
    //             name:'users',
    //             options:props => ({
    //                 errorPolicy: 'ignore',
    //                 fetchPolicy:'cache-and-network',
    //             }),
    //         }),
    //         CheckUsers
    //     ),
    //     renderComponent(Loading)
    // ),
)

export default enhance(Example)