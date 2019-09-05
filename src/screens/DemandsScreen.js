import React, { Component } from 'react';
import { Content, Text } from 'native-base';

export default class DemandsScreen extends Component {
  static navigationOptions = {
    title: 'Pedidos',
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
        <Text>Tela de Pedidos</Text>
      </Content>
    );
  }
}