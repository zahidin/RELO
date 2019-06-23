import React from 'react'
import { Container, Content, Text } from 'native-base';

export default About = (props) => {
    return(
        <Container>
            <Content contentContainerStyle={{flex:1,alignSelf:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:20}}>Created By : Zahidin</Text>
                <Text style={{textAlign:'center',fontSize:20,color:'#2B79C9'}} onPress={ () => props.goToMyGithub()}>Github</Text>
            </Content>
        </Container>
    )
}
