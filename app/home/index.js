import React from 'react'
import {Container,Content,Text,Button} from 'native-base'

export default Home = (props) => {
    return(
       <Container>
            <Content contentContainerStyle={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text style={{fontFamily:'Helvetica',fontSize:17}}>Welcome to RELO (React Native Apollo)</Text>
                <Text style={{fontSize:16,paddingTop:3}}>With React Native Navigation v2</Text>
                <Button primary style={{alignSelf:'center', marginTop:20,backgroundColor:'#2b70c9'}} onPress={() => props.goToScreen('About')}>
                  <Text>About Me</Text>
                </Button>
            </Content>
        </Container>
    )
}