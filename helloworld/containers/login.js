import React, { Component } from 'react';
import {View, Image,AsyncStorage, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import HandleLogin from './handleLogin.js';
import homeImage from '../img/./baseImage.jpg';
import ToolBarA from '../components/./toolBar.js';
import styles from '../css/./style.js';

var userApi = 'https://api.myjson.com/bins/o4zz3';
var users = [];

export default  class Login extends Component {

  constructor(props) {
    super(props);
    this.getUser();
    this.state = {
      email: '',
      password : ''
    };
  }

  handleEmail = (text) => {
    this.setState({email : text})
  }

  handlePassword = (text) => {
    this.setState({password : text})
  }

  getUser = () => {
    fetch(userApi)
    .then( (response) => {
      return response.json()
    })   
    .then( (json) => {
      users = json
    });
  }

  login = () => {

    if(this.state.email !== '' && this.state.password !== '' )
    {
      for(var val of users) {

        if(this.state.email === val.EmailID && this.state.password === val.Password)
        {
          AsyncStorage.setItem('loggedUser', JSON.stringify(val));
          this.setState({'loggedUser' : val})

          Alert.alert(
            'Welcome',
            'Successfully logged in'
          )
          Actions.dashboard()
        }
      } 
    }
    else if(this.state.email === '' && this.state.password === ''){
      Alert.alert("Oops! You are not providing credentials, please enter email and password")
    }
    else {
      Alert.alert("Oops! You are not providing wrong credentials, please enter correct email and password")
    }
  }

  render(){
    return (
      <Image source={homeImage} style={styles.loginContainer} >
        <View>
          <ToolBarA/>
        </View>
        <HandleLogin
          handleEmail = {this.handleEmail}
          handlePassword = {this.handlePassword}
          login = {this.login}
        />
      </Image>
    );
  }
}
