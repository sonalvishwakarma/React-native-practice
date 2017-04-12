import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,Image,AsyncStorage, View, TouchableHighlight, 
Modal, Button, ScrollView} from 'react-native';
import MyDatePicker from '../components/./datePicker.js';
import PickerDD from '../components/./pickerDropdown.js';
import ProgressBarB from '../components/./progressBarAB.js';

var editLoggedProfile;
var userApi = 'https://api.myjson.com/bins/o4zz3';
var users = [];

class EditProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editUser : '',
      fname : '',
      lname : '',
      email: '',
      password : '',
      contactNo : '',
      address : ''
    }
  }
      
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      editLoggedProfile = JSON.parse(value);
      this.setState({editUser : editLoggedProfile})
      console.log(editLoggedProfile, 'editLoggedProfile')
    });

    this.getUser();
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

  handleContactNumber = (text) => {
    this.setState({contactNo : text})
  }

  handleAddress = (text) => {
    this.setState({address : text})
  }

  getUser = () => {
    fetch(userApi)
    .then( (response) => {
      return response.json()
    })   
    .then( (json) => {
      json.find(function (value) {
        if(value.UserID === editLoggedProfile.UserID){
          users = value
          console.log(users)
        }
      })
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20,textAlign: 'center',color: 'firebrick'}}>Edit Profile</Text>

        <ScrollView>
          <Text>First Name</Text>
          <TextInput underlineColorAndroid='transparent' 
            style = {styles.input} 
            autoCapitalize = 'none'
          />

          <Text>Last Name</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
          />

          <Text>Email</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
          />

          <Text>Password</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
          />
          <Text>Date of Birth</Text>
          <MyDatePicker/>

          <Text>Contact No</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
          />

          <Text>Address</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
          />

          <Text>City</Text>
          <PickerDD/>
        </ScrollView> 
        
        <TouchableHighlight style={styles.submit}>
          <Text>Save</Text>     
        </TouchableHighlight>
      </View>  
    );         
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:20,
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  },
  text : {
    marginTop : 20
  },
  submit: {
    backgroundColor: 'silver',
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
  },
});

export default EditProfile;
