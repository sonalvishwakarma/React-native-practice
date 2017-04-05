import React, { Component } from 'react';
import {StyleSheet,Text,Image} from 'react-native';
import HandleLogin from '../components/HandleLogin.js';
import { Actions } from 'react-native-router-flux';
import homeImage from '../components/homeImage.jpg';
  
var userApi = 'https://api.myjson.com/bins/o4zz3';
var users = [];

class login extends Component {

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
      for (var val of users) {

        if(this.state.email === val.EmailID && this.state.password === val.Password)
        {
          alert("Successfully logged in");
          Actions.Dashboard()
        }
      } 
    }
    else if(this.state.email === '' && this.state.password === '' ){
      alert("Oops! You are not providing crendentials, please enter email and password");
    }
  }

  render(){
    return (
      <Image source={homeImage} style={styles.container}>
        <HandleLogin
          handleEmail = {this.handleEmail}
          handlePassword = {this.handlePassword}
          login = {this.login}
        />
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
