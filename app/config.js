import Loader from './commons/Loader'
import {Navigation} from 'react-native-navigation'
import { LOADING_SCREEN } from './commons/Loading';
import { GRAPHQL_URL } from 'react-native-dotenv'

export const API_URL_GRAPHQL = GRAPHQL_URL
export const THEME = {
    black: '#333',
    primary: '#2b70c9',
    primaryLight: '#98ee99',
    primaryDark: '#338a3e',
    textOnPrimary: '#FFFFFF',
  }

export const showLoading = (callbackOnUnMount) => {
    let myTimeout = setTimeout(() => {
        Navigation.showModal({
            stack:{
                children:[{
                    component:{
                        ...LOADING_SCREEN.component,
                        passProps:{
                            onUnMount: () => callbackOnUnMount ? (callbackOnUnMount()): (()=>{}),
                        }   
                    },
                }]
            }
        })
        clearTimeout(myTimeout)
    },100)
}

export const dismissLoading = (componentId,callBack) => {
    Navigation.dismissAllModals()
}
  
export const censorPhone =  (value, index=4, options) =>{
    let prefixIndex = 2
    let censored = value.substring(0, value.length - index).replace(/[0-9]/g, "x")
    if(options){
        if(!options.spaces){
            return censored.substring(0, 2)+censored.substring(2, censored.length) + value.substring(value.length - index, value.length);
        }
    }
    return censored.substring(0, 2) +" "+censored.substring(2, censored.length) + value.substring(value.length - index, value.length);
}
