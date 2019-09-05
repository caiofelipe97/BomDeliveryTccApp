import React, { Component } from 'react';
import { Content, Text, View, Button, Icon } from 'native-base';
import {StyleSheet, ProgressBarAndroid} from 'react-native';
import FoodCard from '../components/FoodCard';
import UniqueStepView from './StepViews/UniqueStepView';
import MultipleStepView from './StepViews/MultipleStepView';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  botButtons:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  botButtom: {
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  scrollView:{
    paddingBottom: -30
  }
})

export default class ItemPurchaseScreen extends Component {
    static navigationOptions =  ({ navigation }) => {
        const item = navigation.getParam('item', {});
        return {
            headerTitle: item.name,
            hasTab:true
       }
    }
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.renderStepView = this.renderStepView.bind(this);
        const item = navigation.getParam('item', {});
        this.state = {
          item: item,
          step: 1,
          steps: [],
          choices:[],
          subtotal: 0
        };
    }
    componentDidMount() {
      steps= [
        { 
          title:"Escolha um tamanho",
          options: [
            {
              name:"Pequeno",
              "value":10.00
            },
            {
              name:"Medio",
              "value":12.00
            },
            {
              name:"Grande",
              "value":14.00
            },
          ],
          type: "unique"
        },
        { 
          title:"Escolha o Sabor:",
          min:1,
          max:1,
          options: [
            {
              name:"Frango",
              description: "Frango, catupiry e batata palha"
            },
            {
              name:"Bacon",
              description: "Bacon, catupiry e batata palha"
            },
            {
              name:"Calabresa",
              description: "Calabresa, catupiry e batata palha"
            },
          ],
          type: "unique"
        },
        { 
          title:"Escolha os acompanhamentos",
          min:0,
          max:5,
          options: [
            {
              name:"Leite em po"
            },
            {
              name:"Farinha Lactea"
            },
            {
              name:"Banana"
            },
            {
              name:"Granola"
            }
          ],
          type:"multiple"
        },
        { 
          title:"Adicionais Extras:",
          min:0,
          max:6,
          options: [
            {
              name:"M&M",
              additional: 2.00
            },
            {
              name:"Nutella",
              additional: 3.50

            },
          ],
          type:"multiple"
        }
      ]
      let choices = [];
      steps.forEach(step =>{
        if(step.type == "unique"){
          choices.push(0)
        }else if(step.type == "multiple"){
          let choicesArray = [];
          for (i = 0; i < step.options.length; i++) { 
            choicesArray.push(0);
          }
          choices.push(choicesArray);
        }
      });
      let subtotal = steps[0].options[0].value;
      this.setState({steps,choices,subtotal});
    }

    handleUniqueChange(choice) {
      let { step, choices, subtotal } = this.state;
      if(steps[step-1].options[choice].value){
        console.log("Entrou aqui");
        subtotal -= steps[step-1].options[choices[step-1]].value;
        subtotal += steps[step-1].options[choice].value;
      } else if(steps[step-1].options[choice].additional){
        console.log("Nao, entrou aqui");
        subtotal -= steps[step-1].options[choices[step-1]].additional;
        subtotal += steps[step-1].options[choice].additional;
      }
      console.log("chegou aqui");
      choices[step-1] = choice;
      this.setState({choices, subtotal});
    }

    handleMultipleChange(choice, type) {
      let { step, choices, subtotal } = this.state;
      if(type == 'minus'){
        choices[step-1][choice] -= 1;
        if(steps[step-1].options[choice].value) {
          subtotal -= steps[step-1].options[choice].value;
        } else if(steps[step-1].options[choice].additional) {
          subtotal -= steps[step-1].options[choice].additional;
        }
      } else if(type=='plus') {
        choices[step-1][choice] += 1;
        if(steps[step-1].options[choice].value) {
          subtotal += steps[step-1].options[choice].value;
        } else if(steps[step-1].options[choice].additional) {
          subtotal += steps[step-1].options[choice].additional;
        }
      }
      this.setState({choices,subtotal});
    }

  renderStepView() {
      let { steps, step, choices, subtotal } = this.state;

      let viewProps = steps[step-1];
      let choiced = choices[step-1];
      if(steps.length > 0){
        if(step == 1){
          return <UniqueStepView viewProps={viewProps} choiced={choiced} handleUniqueChange={this.handleUniqueChange.bind(this)} isFirstView={true} subtotal={subtotal}/>
        } else if(viewProps.type == "unique") {
          return <UniqueStepView viewProps={viewProps} choiced={choiced} handleUniqueChange={this.handleUniqueChange.bind(this)} isFirstView={false} subtotal={subtotal}/>
        } else if(viewProps.type == "multiple") {
          return <MultipleStepView viewProps={viewProps} choiced={choiced} handleMultipleChange={this.handleMultipleChange.bind(this)} isFirstView={false} subtotal={subtotal}/>
        } else {
          return <View/>
        }
      } else {
        return <View/>
      }
  }
  render() {
    const { item,step, steps } = this.state;

    return (
      <Content  contentContainerStyle={styles.content}>
      <ScrollView  contentContainerStyle={styles.scrollView}>
        <FoodCard  food={item}   navigation={this.props.navigation} inactive={true}/>
        {this.renderStepView()}

        <Text>{step}</Text>
      </ScrollView>
        { steps.length >0 && 
        <View style={styles.bottom}  pointerEvents={'auto'}>
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={step/steps.length} color={"#008000"}/>
          <View style={step>1 ? styles.botButtons : styles.botButtom}>
            { step > 1 &&
            <Button iconLeft transparent onPress={() =>{this.setState({step: step-1})}}>
              <Text>ANTERIOR</Text>
              <Icon name="arrow-back"/>
            </Button>
            }
            <Button iconRight transparent onPress={() =>{this.setState({step: step+1})}}>
              <Text>PRÓXIMO</Text>
              <Icon name="arrow-forward"/>
            </Button>
          </View>
        </View>
        }
      </Content>
    );
  }
}