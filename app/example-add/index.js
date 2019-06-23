import React from 'react'
import { Container } from 'native-base';
import Form from './components/form'

export default ExampleAdd = (props) => {
    return(
        <Container>
            <Form onSubmit={(values) => props.handleSubmitUser(values)} /> 
        </Container>
    )
}