import { compose , withState , lifecycle, withHandlers} from 'recompose'
import ExampleUpdate from './index'
import { graphql } from 'react-apollo'
import {Keyboard} from 'react-native'
import {UPDATE_USER} from '../graphql/api/mutations/update-user'
import {ModalConfirmationAction} from '../commons/Modal'
import { Navigation } from 'react-native-navigation';
import {client} from '../apollo-client'
import {USERS} from '../graphql/api/queries/users'

const enhance = compose(

    graphql(UPDATE_USER,{
        name:'updateUser',
    }),
    // kurang di respon modal dan loading
    withHandlers({
        showModalAddUserSuccess:props => () => {
            Promise.resolve(
                ModalConfirmationAction({
                    type:'success',
                })
            ).then(()=> {
                setTimeout(()=> {
                    Navigation.dismissAllModals()
                }, 2000)
            })
        }
    }),

    withHandlers({
        handleSubmitUsers : props => (values) => {
            // alert('tunggu')
            // showLoading()
            props.updateUser({
                variables:{
                    id:Number.parseInt(props.users.id),
                    firstName:values.firstName,
                    lastName:values.lastName,
                    company:values.company,
                    image:values.image,
                }
                
            }).then(() =>{
                Keyboard.dismiss()
                // dismissLoading()
                // dismissLoading(props.componentId,() => {
                //     // ModalConfirmationAction({
                //     //     type:'success',
                //     // })
                // })
                client.query({query:USERS,fetchPolicy: 'network-only'})
                // props.users.refetch()
                alert('Sukses')
                Navigation.pop(props.componentId)
                // Navigation.pop(props.componentId)
            }).catch((res) => {
                // dismissLoading()
            })
            // console.warn(JSON.stringify(values))
        }
    }),
    
)

export default enhance(ExampleUpdate)