import React from 'react'
import {
    StyleSheet, View, TouchableWithoutFeedback, Dimensions, Platform,
} from 'react-native'

import {
    H3, Button, Text, Icon
} from 'native-base'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import {Navigation} from 'react-native-navigation'

const customTopBar = {
    visible:false,
}
const customBottomTabs = {
    visible: false, 
}
export const MODAL_CONFIRMATION = {
    screen: 'ModalConfirmation',
    component:{
        name:'ModalConfirmation',
        options:{
            screenBackgroundColor: 'transparent',
            modalPresentationStyle: 'overCurrentContext',
            topBar: {
                visible: false,
                animate: true,
                },
        },
    },
    
}

export const ModalConfirmationAction = ({type='',message='',title='',subtitle='',onProcess}) => {
    // alert,confirmation,success
    switch(type){
        case 'alert':
            Navigation.showModal({
                stack:{
                    children:[{
                        component:{
                            ...MODAL_CONFIRMATION.component,
                            passProps:{
                                subtitle: message,
                                centerSubtitle: true,
                                isAlert: true,
                                // onCancel: props.dismissModal,
                                onProcess: ()=> { 
                                    Navigation.dismissAllModals()
                                },
                                onDismiss: ()=> { 
                                    Navigation.dismissAllModals()
                                },
                            }   
                        },
                    }]
                }
            })
            return
        break
        case 'confirmation':
            Navigation.showModal({
                stack:{
                    children:[{
                        component:{
                            ...MODAL_CONFIRMATION.component,
                            passProps:{
                                title,
                                subtitle,
                                centerSubtitle: true,
                                onCancel: () => Navigation.dismissAllModals(),
                                onProcess,
                                onDismiss: ()=> { 
                                    Navigation.dismissAllModals()
                                },
                            }   
                        },
                    }]
                }
            })
            return
        break
        case 'success':
            Navigation.showModal({
                stack:{
                    children:[{
                        component:{
                            ...MODAL_CONFIRMATION.component,
                            passProps:{
                                successModal:true,
                                onProcess: ()=> { 
                                    Navigation.dismissAllModals()
                                },
                            }   
                        },
                    }]
                }
            })
        return
        break
    }
    
}
const ModalConfirmation = (props)=>{
    return(
        <TouchableWithoutFeedback onPress={props.onDismiss} style={{ flex: 1, }}>
            {props.successModal ? (
                <View style={[style.modalContent, { paddingBottom: 0 }]}>
                    <View style={style.modalSuccess}>
                        <Icon 
                            style={{ alignSelf: 'center', color: '#008E5F', fontSize: 70 }}
                            name='check-circle' 
                            type='FontAwesome' 
                        />
                        <H3 style={{
                            marginBottom: 15,
                            marginTop: 15,
                            color: '#008E5F',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            paddingHorizontal: 30,
                        }}
                        >Sukses</H3>
                    </View>
                </View>
               
            ):(
                <View style={[style.modalContent, { paddingBottom: 0 }]}>
                    <View
                        style={{
                            width: Platform.OS == 'android' ? '85%': Dimensions.get('window').width - 50,
                            // width: '85%',
                            // maxWidth: '85%',
                            height: 'auto',
                            backgroundColor: '#fff',
                            elevation: 5,
                            paddingHorizontal: 15,
                            paddingVertical: 15,
                            paddingBottom: 0,
                            borderRadius: 4,
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            overflow: 'hidden',
                            // flex: 1,
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                    >
                        {props.title && (
                            <Row size={1} style={{
                                padding: 10,
                                backgroundColor: '#fff',
                            }}>
                            <Col sm={1}>
                                <H3 style={{
                                textAlign: 'center'
                                }}>{props.title}</H3>
                            </Col>
                            </Row>
                        )}
                        <Text style={{ textAlign: props.centerSubtitle ? 'center':'left', paddingBottom: 20 }} adjustsFontSizeToFit>{props.subtitle}</Text>
                        <Row size={2} style={{
                            marginLeft: -22,
                            marginRight: -22,
                            backgroundColor: '#fff',
                            height: 45,
                            // width: '100%'
                            // paddingBottom: 2,
                            //marginBottom: -23,
                            // paddingBottom: props.subtitle && props.subtitle.length > 74 ? 54 : 40,
                        }}>
                            {props.isAlert ? (
                                <Col sm={2}>
                                    <Button full
                                        onPress={props.onProcess == undefined ? props.onDismiss:props.onProcess}
                                        style={{
                                            // flex: 1,
                                            // position: 'absolute',
                                            // bottom: -40,
                                            backgroundColor: '#2B79C9',
                                            borderBottomLeftRadius: 4,
                                            borderBottomRightRadius: 4,
                                            height: 45,
                                            width: '100%'
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{`OK`}</Text>
                                    </Button>
                                </Col>
                            ):(
                                <Row size={2} style={{ height: 45, backgroundColor: '#fff'}}>
                                    <Col sm={1}>
                                        <View style={{ flex: 1 }}>
                                            <Button full
                                                onPress={props.onCancel}
                                                style={{
                                                    flex: 1,
                                                    // position: 'absolute',
                                                    // bottom: -40,
                                                    backgroundColor: '#5a667c',
                                                    borderBottomLeftRadius: 4,
                                                    height: 45,
                                                    width: '100%',
                                                    zIndex: 2
                                                }}
                                            >
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{`Tidak`}</Text>
                                            </Button>
                                        </View>
                                    </Col>
                                    <Col sm={1}>
                                        <View style={{ flex: 1 }}>
                                            <Button full
                                                onPress={props.onProcess}
                                                style={{
                                                    flex: 1,
                                                    // position: 'absolute',
                                                    // bottom: -40,
                                                    backgroundColor: '#2B79C9',
                                                    borderBottomRightRadius: 4,
                                                    height: 45,
                                                    width: '100%',
                                                    zIndex: 2
                                                }}
                                            >
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{`Ya`}</Text> 
                                            </Button>
                                        </View>
                                    </Col>
                                </Row>
                            )}
                        </Row>

                    </View>

                </View>
            )}
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    titleCentering: {
        flex: 1
    },
    headerWrapper: {
        backgroundColor: 'white', 
    },
    //modal
        modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 3,
        },

        buyConfirmation: {
        width: '90%',
        zIndex: 1,
        padding: 20,
        backgroundColor: '#fff'
        },
        buySuccess: {
        width: '90%',
        zIndex: 1,
        padding: 20,
        backgroundColor: '#fff'

        },
        orderTableText: {
        fontWeight: 'bold'
        },
        modalContent: {
            // elevation: 5,
            // padding: 22,
            // paddingTop: 0,
            // paddingBottom: 0,
            // borderRadius: 4,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            //   borderColor: "rgba(0, 0, 0, 0.1)",
            width: '100%',
            maxWidth: '100%',
            // height: ,
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center'
        },
        modalSuccess: {
            backgroundColor: "white",
            elevation: 5,
            padding: 22,
            borderRadius: 4,
            width: 'auto',
            paddingHorizontal: 30,
            // width: '80%',
            // width: Dimensions.get('window').width,
            // flex: 1,
            // maxWidth: '100%',
            // justifyContent: 'center',
            alignSelf: 'center'
        },
        orderTable:{
            marginLeft: 10
        }
    //end
})

export default ModalConfirmation