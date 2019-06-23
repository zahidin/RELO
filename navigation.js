import { Navigation } from "react-native-navigation";
import {registerScreens} from './app/router'
import {EXAMPLE} from './app/example/const'
import {EXAMPLE_ADD} from './app/example-add/const'
import {HOME} from './app/home/const'
import {THEME} from './app/config'

registerScreens()
const RTL = {
    push: { //rtl
        content: {
            x: {
                from: 1000,
                to: 0,
                duration: 700,
                // startDelay: 100,
                interpolation: 'decelerate'
            },
            alpha:{
                from: 0,
                to:1,
            }
        }
    },
    pop: { //rtl
        content: {
            x: {
                from: 0,
                to: 1000,
                duration: 400,
                // startDelay: 100,
                // interpolation: 'decelerate'
            },
            alpha:{
                from: 1,
                to:0,
            }
        }
    },
}
const starTapBaseApp = () => {
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setDefaultOptions({
            // animations: RTL,
            topBar: {
                animate: true,
            },
            bottomTabs: {
                animate: true
            },
            statusBar:{
                backgroundColor: '#f0f0f0',
                style: 'dark'
            },
        })
        Navigation.setRoot({
            root:{
                bottomTabs:{
                    options:{
                        bottomTab:{
                            bottomTabs: {
                                titleDisplayMode: 'alwaysShow',
                            },
                            bottomTab: {
                                iconColor: '#DEE6F0',
                                textColor: '#DEE6F0',
                                selectedIconColor: THEME.primary,
                                selectedTextColor: '#fff',
                            }
                        }
                    },
                    children:[
                        {
                            stack:{
                                options: {
                                    bottomTab: {
                                        iconColor: '#DEE6F0',
                                        textColor: '#DEE6F0',
                                        selectedIconColor: THEME.primary,
                                        selectedTextColor: THEME.primary,
                                    }
                                },
                                children:[
                                    {
                                        component:{
                                            ...HOME.component
                                        }
                                    }
                                ]
                            },
                        },
                        {
                            stack:{
                                options: {
                                    bottomTab: {
                                        iconColor: '#DEE6F0',
                                        textColor: '#DEE6F0',
                                        selectedIconColor: THEME.primary,
                                        selectedTextColor: THEME.primary,
                                    }
                                },
                                children:[
                                    {
                                        component:{
                                            ...EXAMPLE.component
                                        },
                                    },
                                ]
                            }
                        }
                    ]
                }
            }
        })
    })
}

starTapBaseApp()