import React from 'react'
import { Container } from 'native-base';
import Form from './components/form'

export default ExampleUpdate = (props) => {
    return(
        <Container>
            <Form onSubmit={(values) => props.handleSubmitUsers(values)} users={props.users}/> 
        </Container>
    )
}