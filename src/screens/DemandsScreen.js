import React, { Component } from 'react';
import { Content, Text,Container, Tabs, Tab, ScrollableTab } from 'native-base';
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
  static navigationOptions =  () => {
  return {
      headerTitle: 'Pedidos',
      hasTab:true,
      headerStyle: {
        backgroundColor: '#800080',
      },
  }  
}
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
      <Container >
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#FFFF00' }} renderTabBar={()=> <ScrollableTab style={{borderWidth: 0, backgroundColor:'#800080'}}  />}>
          <Tab heading="Anteriores" tabStyle={{backgroundColor: '#800080',width:'50%'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080',width:'50%'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}>
          <Content>
          <Text>bbbb</Text>

      </Content>
          </Tab>
          <Tab heading="Em andamento" tabStyle={{backgroundColor: '#800080',width:'50%'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080',width:'50%'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}>
          <Content>
          <Text>aaaa</Text>
      </Content>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}