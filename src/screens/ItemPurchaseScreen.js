import React, {Component} from 'react';
import {Content, Text, View, Button, Icon, StyleProvider} from 'native-base';
import {StyleSheet, ProgressBarAndroid} from 'react-native';
import FoodCard from '../components/FoodCard';
import UniqueStepView from './StepViews/UniqueStepView';
import MultipleStepView from './StepViews/MultipleStepView';
import {ScrollView} from 'react-native-gesture-handler';
import LastStepView from './StepViews/LastStepView';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  botButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botButtom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  scrollView: {
    paddingBottom: -30,
  },
});

export default class ItemPurchaseScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const item = navigation.getParam('item', {});
    return {
      headerTitle: item.name,
      hasTab: true,
      headerLeft: (
        <Icon
          onPress={() => navigation.goBack()}
          name="close"
          style={{color: '#FFFF00', marginLeft: 20, fontSize: 24}}
        />
      ),
      tabBarVisible: false,
    };
  };
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.renderStepView = this.renderStepView.bind(this);
    const item = navigation.getParam('item', {});
    const restaurant = navigation.getParam('restaurant', {});
    const cart = navigation.getParam('cart', []);
    this.state = {
      item: item,
      step: 1,
      steps: [],
      choices: [],
      subtotal: 0,
      observations: '',
      cart: cart,
      productDetail: [],
      restaurant: restaurant,
    };
  }
  componentDidMount() {
    steps = [
      {
        title: 'Escolha um tamanho',
        options: [
          {
            name: 'Pequeno',
            value: 10.0,
          },
          {
            name: 'Medio',
            value: 12.0,
          },
          {
            name: 'Grande',
            value: 14.0,
          },
        ],
        type: 'unique',
      },
      {
        title: 'Escolha o Sabor:',
        min: 1,
        max: 1,
        options: [
          {
            name: 'Frango',
            description: 'Frango, catupiry e batata palha',
          },
          {
            name: 'Bacon',
            description: 'Bacon, catupiry e batata palha',
          },
          {
            name: 'Calabresa',
            description: 'Calabresa, catupiry e batata palha',
          },
        ],
        type: 'unique',
      },
      {
        title: 'Escolha os acompanhamentos',
        min: 0,
        max: 5,
        options: [
          {
            name: 'Leite em po',
          },
          {
            name: 'Farinha Lactea',
          },
          {
            name: 'Banana',
          },
          {
            name: 'Granola',
          },
        ],
        type: 'multiple',
      },
      {
        title: 'Adicionais Extras:',
        min: 0,
        max: 6,
        options: [
          {
            name: 'M&M',
            additional: 2.0,
          },
          {
            name: 'Nutella',
            additional: 3.5,
          },
        ],
        type: 'multiple',
      },
    ];
    steps.push({title: 'Detalhes do Produto', type: 'last'});
    let choices = [];
    steps.forEach(step => {
      if (step.type == 'unique') {
        choices.push(0);
      } else if (step.type == 'multiple') {
        let choicesArray = [];
        for (i = 0; i < step.options.length; i++) {
          choicesArray.push(0);
        }
        choices.push(choicesArray);
      }
    });
    let subtotal = steps[0].options[0].value;
    this.setState({steps, choices, subtotal});
  }

  handleUniqueChange(choice) {
    let {step, choices, subtotal} = this.state;
    if (steps[step - 1].options[choice].value) {
      subtotal -= steps[step - 1].options[choices[step - 1]].value;
      subtotal += steps[step - 1].options[choice].value;
    } else if (steps[step - 1].options[choice].additional) {
      subtotal -= steps[step - 1].options[choices[step - 1]].additional;
      subtotal += steps[step - 1].options[choice].additional;
    }
    choices[step - 1] = choice;
    this.setState({choices, subtotal});
  }

  handleMultipleChange(choice, type) {
    let {step, choices, subtotal} = this.state;
    if (type == 'minus') {
      choices[step - 1][choice] -= 1;
      if (steps[step - 1].options[choice].value) {
        subtotal -= steps[step - 1].options[choice].value;
      } else if (steps[step - 1].options[choice].additional) {
        subtotal -= steps[step - 1].options[choice].additional;
      }
    } else if (type == 'plus') {
      choices[step - 1][choice] += 1;
      if (steps[step - 1].options[choice].value) {
        subtotal += steps[step - 1].options[choice].value;
      } else if (steps[step - 1].options[choice].additional) {
        subtotal += steps[step - 1].options[choice].additional;
      }
    }
    this.setState({choices, subtotal});
  }
  buildMultipleItemsArray(options, choices) {
    let multipleItemsArray = [];
    for (var i = 0; i < choices.length; i++) {
      if (choices[i] > 0) {
        multipleItemsArray.push(options[i]);
      }
    }
    return multipleItemsArray;
  }
  buildProductDetail() {
    const {steps, choices} = this.state;
    let productDetail = [];
    steps.forEach((step, i) => {
      if (i == 0){
        productDetail.push({
          title: 'Tamanho',
          items: [step.options[choices[i]]],
        });
      } else if (step.type == 'unique') {
        productDetail.push({
          title: step.title,
          items: [step.options[choices[i]]],
        });
      } else if (step.type == 'multiple'){
        let multipleItemsArray = this.buildMultipleItemsArray(
          step.options,
          choices[i],
        );
        if (multipleItemsArray.length > 0){
          productDetail.push({title: step.title, items: multipleItemsArray});
        }
      }
    });
    return productDetail;
  }
  handleObservations(text) {
    this.setState({observations: text});
  }
  renderStepView() {
    let {
      item,
      steps,
      step,
      choices,
      subtotal,
      productDetail,
      observations,
    } = this.state;

    let viewProps = steps[step - 1];
    let choiced = choices[step - 1];
    if (steps.length > 0) {
      if (step == 1) {
        return (
          <UniqueStepView
            viewProps={viewProps}
            choiced={choiced}
            handleUniqueChange={this.handleUniqueChange.bind(this)}
            isFirstView={true}
            subtotal={subtotal}
          />;
        );
      } else if (viewProps.type == 'unique') {
        return (
          <UniqueStepView
            viewProps={viewProps}
            choiced={choiced}
            handleUniqueChange={this.handleUniqueChange.bind(this)}
            isFirstView={false}
            subtotal={subtotal}
          />;
        );
      } else if (viewProps.type == 'multiple') {
        return (
          <MultipleStepView
            viewProps={viewProps}
            choiced={choiced}
            handleMultipleChange={this.handleMultipleChange.bind(this)}
            isFirstView={false}
            subtotal={subtotal}
          />;
        );
      } else if (step == steps.length) {
        return (
          <LastStepView
            title={'Detalhes do produto'}
            productDetail={productDetail}
            subtotal={subtotal}
            observations={observations}
            handleObservations={this.handleObservations.bind(this)}
          />;
        );
      }
    } else {
      return <View />;
    }
  }
  render() {
    const {
      item,
      step,
      steps,
      cart,
      observations,
      productDetail,
      subtotal,
      restaurant,
    } = this.state;
    const {navigation} = this.props;

    return (
      <Content contentContainerStyle={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {step == 1 ||
            (step == steps.length && (
              <FoodCard
                food={item}
                navigation={this.props.navigation}
                inactive={true}
              />
            ))}
          {this.renderStepView()}
        </ScrollView>
        {steps.length > 0 && (
          <View style={styles.bottom} pointerEvents={'auto'}>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={step / steps.length}
              color={'#008000'}
            />
            <View style={step > 1 ? styles.botButtons : styles.botButtom}>
              {step > 1 && (
                <Button
                  iconLeft
                  transparent
                  onPress={() => {
                    this.setState({step: step - 1});
                  }}>
                  <Icon name="arrow-back" />
                  <Text>ANTERIOR</Text>
                </Button>
              )}
              {step < steps.length && (
                <Button
                  iconRight
                  transparent
                  onPress={() => {
                    let productDetail = this.buildProductDetail();
                    this.setState({step: step + 1, productDetail});
                  }}>
                  <Text>PRÓXIMO</Text>
                  <Icon name="arrow-forward" />
                </Button>
              )}
              {step == steps.length && (
                <Button
                  iconRight
                  transparent
                  onPress={() => {
                    let product = {
                      name: item.name,
                      productDetail: productDetail,
                      observations: observations,
                      subtotal: subtotal,
                      amount: 1,
                    };
                    let newCart = [...cart, product];
                    pageUUID = Math.random() * 10000;
                    console.log(newCart);
                    navigation.navigate({
                      routeName: 'Cart',
                      params: {
                        cart: newCart,
                        restaurant: restaurant,
                      },
                      key: pageUUID,
                    });
                  }}>
                  <Text>CONCLUIR</Text>
                </Button>
              )}

          </View>
          </View>
        )}
      </Content>
    );
  }
}
