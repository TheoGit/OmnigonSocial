/**
 * Created by admin on 12/7/17.
 */
import React, { Component } from 'react';
import {
    AlertIOS,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

import api from '../constants/api';
import * as utils from '../utils';
import PostDetail from './PostDetail';

import Button from '../components/UI/Button';
import ConfigSection from '../components/UI/ConfigSection';
import * as globalConst from '../constants/globals';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenMarginLeft = (screenWidth * 0.43);


export default class SocialPostList extends Component {
    constructor(props){
        super(props);

        this.state = {
            socialPost: [],
            showProgress:  false,
            noPostsMsg: 'There are no Social Posts today',
            nItems: this.props.navigation.state.params.nItems,
            interval: this.props.navigation.state.params.interval,
            theURL: api.socialPostURL,
            };

        this.renderSocialPosts = this.renderSocialPosts.bind(this);
    }
        
    componentDidMount() {
        console.log("componentDidMount socialPostList");
        this.timer = setInterval(() => {
            this.getSocialPosts();
          }, this.state.interval);        
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    getSocialPosts() {
        return fetch(`${api.socialPostURL}?limit=${this.state.numberN}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json, application/x-www-form-urlencoded',
                'creditials' : 'same-origin'
            }
        })
        .then((response) => response.json()) 
        .then((response) => {
                console.log(response);
                this.setState({dataSource: this.setState({socialPost: response})});
         })
            .catch((error) => {
                //this.setState({showProgress: false})
                AlertIOS.alert("Social Post", 'Error: ' + error);
                console.log(error);
        } )
        .done();
    }

    renderSocialPosts() {
        return this.state.socialPost.map(post =>
            <PostDetail key={post.entity_id} post={post} />
        );
    }

    render() {
        return(
            <ScrollView>
                {this.renderSocialPosts()}
            </ScrollView>
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
  