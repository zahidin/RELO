import React, {Component} from 'react'
import {StyleSheet,SafeAreaView} from 'react-native'
import { Container,Content,Form as Forms, Item, Label, Input,Button,Text } from 'native-base';
import {Formik} from 'formik'
import * as Yup from 'yup';

class Form extends Component{
    render(){
        const {onSubmit} = this.props
        return(
            <Container>
                <Content contentContainerStyle={{marginHorizontal:10}}>
                    <Formik
                        initialValues={{
                            firstName:'',
                            lastName:'',
                            company:'',
                            image:'',
                        }}
                        onSubmit={values => onSubmit(values)}
                        validationSchema={
                            Yup.object().shape({
                                firstName:Yup.string().min(3).required('First Name is Required'),
                                lastName:Yup.string().min(3).required('Last Name is Required'),
                                company:Yup.string().min(3).required('Company is Required'),
                                image:Yup.string().min(3).required('Image is Required'),
                            })
                        }
                    >
                    {props => (
                        <Forms>
                            <Item floatingLabel style={styles.itemForm}>
                                <Label>First Name</Label>
                                <Input
                                    value={props.values.firstName}
                                    onChangeText={props.handleChange('firstName')}
                                    onBlur={() => props.setFieldTouched('firstName')}
                                />
                            </Item>
                                {props.errors.firstName && props.touched.firstName && (
                                        <Text style={styles.textError}>{props.errors.firstName}</Text>
                                )}
                            <Item floatingLabel style={styles.itemForm}>
                                <Label>Last Name</Label>
                                <Input
                                    value={props.values.lastName}
                                    onChangeText={props.handleChange('lastName')}
                                    onBlur={() => props.setFieldTouched('lastName')}
                                />
                            </Item>
                                {props.errors.lastName && props.touched.lastName && (
                                    <Text style={styles.textError}>{props.errors.lastName}</Text>
                                )}
                            <Item floatingLabel style={styles.itemForm}>
                                <Label>Company</Label>
                                <Input
                                    value={props.values.company}
                                    onChangeText={props.handleChange('company')}
                                    onBlur={() => props.setFieldTouched('company')}
                                />
                            </Item>
                                {props.errors.company && props.touched.company && (
                                    <Text style={styles.textError}>{props.errors.company}</Text>
                                )}
                            <Item floatingLabel style={styles.itemForm}>
                                <Label>Image Url</Label>
                                <Input
                                    value={props.values.image}
                                    onChangeText={props.handleChange('image')}
                                    onBlur={() => props.setFieldTouched('image')}
                                />
                            </Item>
                                {props.errors.image && props.touched.image && (
                                    <Text style={styles.textError}>{props.errors.image}</Text>
                                )}
                            <Button
                                onPress={props.handleSubmit}
                                block
                                disabled={!props.isValid}
                                style={{
                                    backgroundColor: props.isValid ? '#2B79C9' : '#a0a6aa',
                                    margin: 10,
                                    marginTop:15
                                }}
                                >
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </Button>
                        </Forms>
                    )}
                    </Formik>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    textError:{
        color:'red',
        fontSize:12,
        marginLeft:15
    },
    itemForm:{
        marginBottom:4
    }
})

export default Form