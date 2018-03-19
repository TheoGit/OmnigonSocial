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

import CardSection from '../components/UI/CardSection';
import Button from '../components/UI/Button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Social Feed Mobile!
        </Text>
        <Text style={styles.instructions}>
          Written by Theo Wilson for Omnigon
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('ConfigScreen')}>
            Enter
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C14646', 
  },
  buttonContainer: {
    backgroundColor: 'transparent', 
    padding: 5,
    flexDirection: 'row',  //left to right
    borderColor: '#ddd',
    position: 'relative',
    width: '25%',
    height: 50,
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
