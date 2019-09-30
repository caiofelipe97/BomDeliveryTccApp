import React, {useState, useEffect} from 'react';
import { StyleSheet, Dimensions } from "react-native";
import { Container, Content, Form, Item, Input, Button, Text, Label } from 'native-base';
import firebase from 'firebase';
require('firebase/firestore')

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#800080"
      },
    contentStyle:{
        flex: 1,
        justifyContent: 'center'
    },
    labelStyle:{
        color: '#FFFFFF'
    }
})

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={styles.contentStyle}>
        <Form>
            <Item floatingLabel>
                <Label style={styles.labelStyle}>Login</Label>
                <Input />
            </Item>
            <Item floatingLabel>
                <Label  style={styles.labelStyle}>Senha</Label>
                <Input />
            </Item>
        <Button full primary style={{ marginTop: 10 }}>
            <Text> Login </Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
}


export default LoginScreen