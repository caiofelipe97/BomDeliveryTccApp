import React from 'react';
import {
Container,
  Content,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Input,
  Label,
  View,
  Button,
  Text,
  H1
} from 'native-base';
import {StyleSheet, ImageBackground} from 'react-native';
import backgroundImage from '../img/LoginBackground.jpg';

const styles = StyleSheet.create({
  contentStyle:{
    flex:1,
    backgroundColor:'#6F1BB3'
  },
  viewStyle:{
    flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal: 20
  },
  titleStyle:{
    color: '#FFCA73',
    fontWeight: 'bold',
    alignSelf: "center"
  },
  buttonStyle:{
    backgroundColor:"#FFCA73", 
    fontWeight: "bold", 
    color: "white",
    marginTop: 20,
    justifyContent: 'center'
  },
  textLoginStyle:{
    alignSelf: "center"

  }
});

const LoginScreen = ({navigation}) => {

  return (
    <Content contentContainerStyle={styles.contentStyle}>
      <View style={styles.viewStyle}>
              <H1 style ={styles.titleStyle}>Bom Delivery</H1>

                <Form style={{alignSelf: 'stretch'}}> 
                    <Item floatingLabel>
                        <Label style={{ color: "white" }}>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                         <Label style={{ color: "white" }}>Password</Label>
                        <Input />
                    </Item>
                    <Button style={styles.buttonStyle}
                              onPress={()=>{
                                navigation.navigate({
                                routeName: 'Received',
                                params: {
                                },
                              });
                              }}>
                          <Text style={{fontWeight:'bold'}}>Login</Text>
                    </Button>
                </Form>
          </View>
    </Content>
  );
};

export default LoginScreen;
