/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './Home';
import Vitals from './Vitals';
import Dosing from './Dosing';
import { createStackNavigator } from 'react-navigation';

type Props = {};
export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Vitals: {
    screen: Vitals,
    navigationOptions: {
      title: `Vitals`
    }
  },
  Dosing: {
    screen: Dosing,
    navigationOptions: {
      title: `Dosing`
    }
  },
  headerMode: 'screen',
  initialRouteName: 'Home'
});
