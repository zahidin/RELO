import { compose , withState , lifecycle, withHandlers} from 'recompose'
import ExampleAdd from './index'
import { graphql } from 'react-apollo'
import {ADD_USER} from '../graphql/api/mutations/add-user'
import {ModalConfirmationAction} from '../commons/Modal'
import { Navigation } from 'react-native-navigation';
import {dismissLoading,showLoading} from '../config'
import {client} from '../apollo-client'
import {USERS} from '../graphql/api/queries/users'
import { RNToasty } from 'react-native-toasty'
import { Keyboard } from 'react-native';

const enhance = compose(
    withState('link','setLink','http://github.com/zahidin'),

    graphql(ADD_USER,{
        name:'addUser',
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
        handleSubmitUser : props => (values) => {
            // alert('tunggu')
            // showLoading()
            props.addUser({
                variables:{
                    firstName:values.firstName,
                    lastName:values.lastName,
                    company:values.company,
                    image:values.image,
                }
                
            }).then( async () =>{
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

export default enhance(ExampleAdd)