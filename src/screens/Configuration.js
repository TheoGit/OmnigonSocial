/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AlertIOS,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Button from '../components/UI/Button';
import ConfigSection from '../components/UI/ConfigSection';
import * as globalConst from '../constants/globals';
import api from '../constants/api';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenMarginLeft = (screenWidth * 0.45);

export default class Configuration extends Component {
  constructor(props){
    super(props);

    this.state = {
        numberN: '10',
        intervalLength: '1',
        theURL: api.socialPostURL,
    };

    this.onChangedInterval = this.onChangedInterval.bind(this);
    this.onChangedNumberN = this.onChangedNumberN.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkForNumericOnly = this.checkForNumericOnly.bind(this);
  }

  checkForNumericOnly(userInput) {
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < userInput.length; i++) {
        if(numbers.indexOf(userInput[i]) > -1 ) {
            newText = newText + userInput[i];
        }
        else {
            return false;
        }
    }
    return true;
  }
   
  //update the state, will do audit on submit 
  onChangedNumberN (text) {
    this.setState({ numberN: text });
  }

  onChangedInterval (text) {
    this.setState({ intervalLength: text });
  }

  onSubmit() {
    if(!this.checkForNumericOnly(this.state.numberN)) {
      AlertIOS.alert(globalConst.appTitle, "please enter numbers only for 'N Items'");
      this.setState({numberN: this.state.numberN.replace(/[^0-9]/g, '')});      
      this.refs.NumberN.focus();
      return false;
    }

    if(!this.checkForNumericOnly(this.state.intervalLength)) {
      AlertIOS.alert(globalConst.appTitle, "please enter numbers only for 'Interval");
      this.setState({Interval: this.state.Interval.replace(/[^0-9]/g, '')});      
      this.refs.Interval.focus();
      return false;
    }

    //set interval to milliseconds
    let intervalTime = this.state.intervalLength * 1000;

    this.props.navigation.navigate('SocialListScreen', {nItems: this.state.numberN, interval: intervalTime})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Configurations</Text>
        <ConfigSection>
          <Text>N Items:</Text>
          <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            onChangeText={(text)=> this.onChangedNumberN(text)}
            value={this.state.numberN}
            maxLength={3}
            ref='NumberN'
          />        
          <Text>(from 0 to 100)</Text>
        </ConfigSection>
        <ConfigSection>
          <Text>Interval (mins):</Text>
          <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            onChangeText={(text)=> this.onChangedInterval(text)}
            value={this.state.intervalLength}
            maxLength={2}
            ref='Interval'
          />        
          <Text>(from 1 to 60)</Text>
        </ConfigSection>
        <ConfigSection>
          <Text>URL:</Text>
          <TextInput 
            style={styles.textURLInput}
            value={this.state.theURL}
            ref='apiURL'
          />        
        </ConfigSection>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.onSubmit()}>
            View List
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#C14646',
  },
  buttonContainer: {
    backgroundColor: 'transparent', 
    padding: 5,
    flexDirection: 'row',  //left to right
    borderColor: '#ddd',
    position: 'relative',
    width: '25%',
    marginLeft: screenMarginLeft,
    marginTop: 20,
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
    color: '#000000',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 15,
    width: 35,
  },
  textURLInput: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 12,
    width: 315,
  }
});
