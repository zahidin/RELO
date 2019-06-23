import { View } from "react-native";
import { Button, Text, Grid, Col} from 'native-base'
import React from 'react'

const Timeout = (props) =>{
    return(
        <View style={{ backgroundColor: '#D32E2F', height: 30, zIndex: 99, paddingLeft: 15, paddingRight: 15 }}>
            <Grid style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Col size={6}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 14
                        }}
                    >
                        Disconnected Connection...
                    </Text>
                </Col>
                {/* <Col size={1}>
                    <Spinner size='small' color='#fff' />
                </Col> */}
                <Col size={6}>
                    <Button onPress={()=>props.refetch()} 
                        style={{ alignSelf: 'flex-end', backgroundColor: 'inherit', elevation: 0 }}
                    >
                        <Text style={{ color: '#fff', fontSize: 14 }}>Try Again</Text>
                    </Button>
                    {/* <Spinner style={{ alignSelf: 'flex-end' }} size='small' color='#fff' /> */}
                </Col>
            </Grid>
        </View>
        // <Container>
        //     <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#fff'  }}>
        //         <View style={{ 
        //         alignSelf: 'center',
        //         }}>
        //             <Image style={{
        //                 width: 250,
        //                 height: 250,
        //                 resizeMode: 'contain',
        //                 marginBottom: 20,
        //                 alignSelf: 'center'
        //             }}
        //             source={require('../static/images/timeout.png')}
        //             />
        //             <View>
        //                 <Text style={{ textAlign: 'center', color: '#555' }}>Gagal Menyambungkan</Text>
        //             </View>
        //         </View>
        //     </View>
        //     <Button
        //         block
        //         style={{
        //         margin: 10,
        //         backgroundColor : '#2B79C9'
        //         }}
                // onPress={()=>props.refetch()}
        //     >
        //         <Text style={{ color : 'white' }}>Try Again</Text>
        //     </Button>
        // </Container>
    )
}
export default Timeout