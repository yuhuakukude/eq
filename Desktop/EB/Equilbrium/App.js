import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from './src/page/account/login'
import Action from './src/page/account/action'
import Home from './src/page/home'
import Detail from './src/page/home/detail'
import Accel from './src/page/test/accel'
import NewClient from './src/page/home/newClient'
import Questions from './src/page/test/questions'
import NavButton from './src/components/NavButton';
import ArrowLeft from './src/resource/icon/back.png';
import './src/global/GlobalRegister'


import {Text, View} from 'react-native'

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    title: 'Login'
  },
  Action: {
    screen: Action
  },
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  },
  Accel: {
    screen: Accel
  },
  NewClient: {
    screen: NewClient
  },
  Questions: {
    screen: Questions
  }
},{
  initialRouteName: 'Login',
  headerMode: 'screen',
  defaultNavigationOptions: ({navigation}) => {
    let {state, goBack} = navigation;
    // 用来判断是否隐藏或显示header
    let title = '';
    let onLeftPress;
    if (state.params) {
      if (state.params.name) {
        title = state.params.name   //是否显示标题
      }
      if (state.params.onLeftPress) {
        onLeftPress = state.params.onLeftPress;  //是否自定义左边按钮的响应事件
      }
    }
    return {
      title: title,
      headerStyle: {
        backgroundColor: COLOR.primaryColor,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerLeft: (
          <NavButton
              data={{
                type: 'image',
                uri: ArrowLeft,
                onPress: onLeftPress
                    ? onLeftPress
                    : () => {
                      goBack();
                    }
              }}/>
      ),
      headerBackTitle: null,
      headerRight: (
          <View style={{width: 48, height: 48}}/>
      ),
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: FONTSIZE.large,
        color: COLOR.primaryTextColor,
        fontWeight: 'normal'
      },
    }
  }
})

const AppContainer = createAppContainer(AppStackNavigator);

type Props = {};
export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}


