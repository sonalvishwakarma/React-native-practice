import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import HandleLogin from './HandleLogin.js';
import { Actions } from 'react-native-router-flux';

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
      <View style={styles.container}>
        <HandleLogin
          handleEmail = {this.handleEmail}
          handlePassword = {this.handlePassword}
          login = {this.login}
        />

       <Text style={styles.welcome}  onPress={() => Actions.dashboard()} >
          Click here
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
});

export default login;
