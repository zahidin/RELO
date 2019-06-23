import React from 'react'
import {View,TouchableHighlight} from'react-native'
import { Container, Body,Text, List, ListItem, Left, Thumbnail, Header, Title, Right, Button, Icon } from "native-base";
import Loader from '../commons/Loader'
import {FlatList,Alert} from 'react-native'
import Timeout from '../commons/Timeout';

const Users = (props) => {
    const result = props.users && props.users.users || []
    if(!result) return <Loader/>
    if(typeof result === undefined || result.length == 0)
        return( <Loader /> )
    return(
        <FlatList
            data={result}
            renderItem={({item,index}) => (
                <List key={item.id}>
                    <ListItem thumbnail iconRight onPress={() =>props.handleDetailUser(item)}>
                        <Left>
                            <Thumbnail source={{uri:item.image}} />
                        </Left>
                        <Body>
                            <Text>{item.firstName} {item.lastName}</Text>
                            <Text note>{item.company}</Text>
                        </Body>
                        <Right style={{flexDirection:'row'}}>
                            <TouchableHighlight underlayColor='#eee' style={{marginRight:5}} onPress={() => props.handleRemove(item.id)}>
                                <Icon name='ios-close-circle' type='Ionicons' style={{ color: '#D32E2F' }} />
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='#eee' onPress={() => props.handleUpdateUser(item)}>
                                <Icon name='account-edit' type="MaterialCommunityIcons" style={{ color: '#ffc107' }} />
                            </TouchableHighlight>
                        </Right>
                    </ListItem>
                </List>
            )}
            keyExtractor={(item,index) => index.toString()}
        />
    )
}
export default Example = (props) => {
    return(
        <Container>
            <Users {...props} handleRemove={(id) => props.handleRemoveUser(id)} handleDetailUser={(value) => props.handleDetailUser(value)} />
        </Container>
    )
}