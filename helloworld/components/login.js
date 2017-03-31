import React, { Component } from 'react';
import {StyleSheet,Text,Image} from 'react-native';
import HandleLogin from './HandleLogin.js';
import { Actions } from 'react-native-router-flux';
import img1 from './images.jpg';

class login extends Component {

  constructor(props) {
    super(props);
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

  login = () => {
    alert('email: ' + this.state.email + ' password: ' + this.state.password)
  }

  render(){
    return (
      <Image source={img1} style={styles.container}>
        <HandleLogin
          handleEmail = {this.handleEmail}
          handlePassword = {this.handlePassword}
          login = {this.login}
        />

       <Text style={styles.welcome}  onPress={() => Actions.dashboard()} >
          Click here
        </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  }
});

export default login;
