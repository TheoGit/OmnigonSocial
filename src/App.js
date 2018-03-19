/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Welcome from './screens/Welcome';
import Configuration from './screens/Configuration';
import SocialPostList from './screens/SocialPostList';

const RootStack = StackNavigator(
  {
    WelcomeScreen: { 
    screen: Welcome, 
		navigationOptions: {
				title: 'The Social Feed',
		}
  },
  ConfigScreen: { 
    screen: Configuration,
		navigationOptions: {
      title: 'The Social Feed',
    }
  },
  SocialListScreen: {
    screen: SocialPostList,
		navigationOptions: {
      title: 'The Social Feed',
    }
  },
  },
  {
  initialRouteName: 'WelcomeScreen',
});

import CardSection from './components/UI/CardSection';
import Button from './components/UI/Button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C14646', // '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000', // '#333333',
    marginBottom: 5,
  },
});
