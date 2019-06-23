import { View, Image, StyleSheet, Platform, RefreshControl } from "react-native";
import { Container, Content, Text} from 'native-base'
import React from 'react'

export default NoHistory = (props) => {
    return(
      <Container>
        <Content>
          <View style={{ 
            alignSelf: 'center',
          }}>
              <Image
                  style={{
                    alignSelf: 'center',
                    width: 250,
                    height: 250,
                    resizeMode: 'contain',
                    marginTop: 50
                  }}
                  source={require('../assets/not-found.png')}
              />
              <Text style={{ textAlign: 'center', padding: 30, color: '#555' }}>
                No data.
              </Text>
          </View>
        </Content>
      </Container>
    )
  
  }
  const style = StyleSheet.create({
    tHead: {
      padding:10, 
      backgroundColor: '#f7f7f7',
    },
    titleCentering: {
      flex: 1
    },
  })