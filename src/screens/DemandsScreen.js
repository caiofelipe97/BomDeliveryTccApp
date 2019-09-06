import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({

  titleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'#800080',
    margin: 10,
    marginLeft: 20,
    marginBottom:0
  }
})

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
        <ScrollView >
          <Text style={styles.titleStyle}>Últimos Pedidos </Text>
      </ScrollView>
      </Content>
    );
  }
}