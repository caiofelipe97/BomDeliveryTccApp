import React from "react"
import { Icon } from "native-base"
import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation"

import MainScreen from "../screens/MainScreen"
import RestaurantScreen from "../screens/RestaurantScreen"
import InfoScreen from "../screens/InfoScreen";
import ItemPurchaseScreen from "../screens/ItemPurchaseScreen"
import ProfileScreen from "../screens/ProfileScreen"
import DemandsScreen from "../screens/DemandsScreen"
import CartScreen from "../screens/CartScreen"
import DeliveryScreen from "../screens/DeliveryScreen";

const ExploreStack = createStackNavigator(
    {
        Home: MainScreen,
        Restaurant: RestaurantScreen,
        Info:   InfoScreen,
        ItemPurchase: ItemPurchaseScreen,
        Cart:   CartScreen,
        Delivery: DeliveryScreen
    },
    {
        initialRouteKey: "Home",
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#800080',
            },
            headerTintColor: '#FFFF00',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }
    }
)
ExploreStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
}

const DemandsStack = createStackNavigator(
    {
        Demands: DemandsScreen
    },
    {
        initialRouteKey: "Demands",
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#800080',
            },
            headerTintColor: '#FFFF00',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }
    }
)

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen
    },
    {
        initialRouteKey: "Profile",
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#800080',
            },
            headerTintColor: '#FFFF00',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }
    }
)


export default createBottomTabNavigator(
    {
        Home: {
            screen: ExploreStack,
            navigationOptions: {
                tabBarLabel: "Inicio",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" style={{ color: tintColor }} size={24} />
                )
            }
        },
        Demands: {
            screen: DemandsStack,
            navigationOptions: {
                tabBarLabel: "Pedidos",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="paper" style={{ color: tintColor }} size={24} />
                )
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: "Perfil",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="person" style={{ color: tintColor }} size={24} />
                )
            }
        }
    },
    {
        initialRouteName: "Home",
        order: ["Home", "Demands", "Profile"],
        tabBarOptions: {
            activeTintColor: '#800080',
            inactiveTintColor: 'gray',
          },
    },
)


