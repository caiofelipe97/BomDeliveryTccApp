import React, { Component } from 'react';
import { Content, Text } from 'native-base';
export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Perfil',
  };
    constructor(props) {
        super(props);
        this.state = {
            color: props.color 
        };
    }
    componentDidMount() {
    }

  render() {
    return (
      <Content>
        <Text>Tela de perfil</Text>
      </Content>
    );
  }
}