import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

export const LOADING_SCREEN = {
  screen: 'LoadingScreen',
  component:{
    name:'LoadingScreen',
    options:{
        modalPresentationStyle:'none',
        screenBackgroundColor: 'transparent',
        modalPresentationStyle: 'overCurrentContext',
        topBar: {
            visible: false,
            animate: true,
        },
    },
    },
}
export default class Loading extends Component{
  componentDidMount = () => {
    // alert('loading')
  };
  
  render(){
      return(
        <View style={styles.modalBackground}>
          {/* <View style={styles.activityIndicatorWrapper}> */}
          {/* <RotationHoleLoader color={`#2B79C9`} /> */}
            <ActivityIndicator
              size="large"
              color='#2B79C9'
              animating={true} />
          {/* </View> */}
        </View>
      )
  }
  componentWillUnmount = () => {
    if(this.props.onUnMount){
      this.props.onUnMount()
    }
  }
  
}
const styles = StyleSheet.create({
  // modalBackground: {
  //   flex: 1,
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   justifyContent: 'space-around',
  //   backgroundColor: '#FFFF'
  // },
  // activityIndicatorWrapper: {
  //   backgroundColor: '#FFFFFF',
  //   height: 100,
  //   width: 100,
  //   borderRadius: 10,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-around'
  // }

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff8a',
    padding: 20,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
