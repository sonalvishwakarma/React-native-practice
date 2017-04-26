import React, { Component } from 'react';
import {StyleSheet,Text,Image, DatePickerAndroid,View, Alert} from 'react-native';
import HandleSignUp from './handleSignUp.js';
import { Actions } from 'react-native-router-flux';
import homeImage from '../img/./baseImage.jpg';
import DatePicker from 'react-native-datepicker';
import ToolBarA from '../components/./toolBar.js';

var userApi = 'https://api.myjson.com/bins/o4zz3';
var users = [];

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.getUser();
    this.state = {
      fname : '',
      lname : '',
      email: '',
      password : '',
      confirmPassword : ''
    };
  }

  handleFirstName = (text) => {
    this.setState({fname : text})
  }

  handleLastName = (text) => {
    this.setState({lname : text})
  }

  handleEmail = (text) => {
    this.setState({email : text})
  }

  handlePassword = (text) => {
    this.setState({password : text})
  }

  handleConfirmPassword = (text) => {
    this.setState({confirmPassword : text})
  }

  getUser = () => {
    fetch(userApi)
    .then( (response) => {
      return response.json()
    })   
    .then( (json) => {
      users = json
      console.log(users)
    });
  }

  signUp = () => {

    if(this.state.fname !== '' && this.state.lname !== '' && this.state.email !== '' && this.state.password !== '' )
    {
      if(this.state.password === this.state.confirmPassword){

        users.push({
          "UserID":  users.length + 1,
          "FirstName": this.state.fname,
          "LastName": this.state.lname,
          "EmailID": this.state.email,
          "Password": this.state.password,
          "ContactNo": "",
          "Address1": "",
          "City": "",
          "zip": ""
        })

        fetch(userApi, {  
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(users)
        }).then(function(res)
        {
          return res.json()
          .then(function(json) {  
            console.log(json,'json')
          }.bind(this))
        }.bind(this));
        Actions.login()
        Alert.alert(
         'Welcome',
         'Successfully Sign in'
        )
      }
      else if(this.state.password !== this.state.confirmPassword) {
        Alert.alert("password and confirm password do not match.")
      }
    }

    else{
      Alert.alert(
        'OOps!!',
        'Please enter details'
      )
    }
    Actions.dashboard()
  }

  render(){
    return (
      <Image source={homeImage} style={styles.container}>
       <View>
          <ToolBarA/>
        </View>
        <HandleSignUp
          handleFirstName = {this.handleFirstName}
          handleLastName = {this.handleLastName}
          handleEmail = {this.handleEmail}
          handlePassword = {this.handlePassword}
          handleConfirmPassword = {this.handleConfirmPassword}
          signUp = {this.signUp}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SignUp;
