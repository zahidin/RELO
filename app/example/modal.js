import React , {Component} from 'react'
import { View , StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Text, Thumbnail, Button} from 'native-base'
import { Navigation } from 'react-native-navigation';

export const MODAL = {
    screen: 'ModalDetailUser',
    component:{
        name:'ModalDetailUser',
        options:{
            layout: { backgroundColor: 'rgba(0,0,0,0.7)' },
            modalPresentationStyle: 'overCurrentContext',
            topBar: {
                visible: false,
                drawBehind: true,
            },
        },
    },
}

export const Modal  = (props) => {
    return(
        <TouchableWithoutFeedback onPress={() => Navigation.dismissAllModals()}>
            <View style={styles.container}>
                    <View style={styles.content}>
                        <Thumbnail source={{uri:props.image}}/>
                        <Text style={{marginTop:10}}>{props.firstName} {props.lastName}</Text>
                        <Text>{props.company}</Text>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container:{
        position:'relative',
        bottom:'15%',
        left:'10%',
        top:'35%',
        width:'80%',
        backgroundColor:'#fff',
        height:200
    },
    content:{
        paddingTop:40,
        alignItems:'center',
        justifyContent:'center',
    }
})