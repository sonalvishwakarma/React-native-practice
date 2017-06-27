import React, { Component } from 'react';
import {Text,TextInput,AsyncStorage, View, TouchableHighlight, Modal, ScrollView, Alert} from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import MyDatePicker from '../components/./datePicker.js';
import PickerDD from '../components/./pickerDropdown.js';
import ProgressBarB from '../components/./progressBarAB.js';
import styles from '../css/./style.js';

var editLoggedProfile;
var userApi = 'https://api.myjson.com/bins/o4zz3';
var userInfo = [];
var allUsers = [];
var data;

export default class EditProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user : {},
      fname : '',
      lname : '',
      email: '',
      password : '',
      contactNo : '',
      address : '',
      users : []
    }
  }
      
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      editLoggedProfile = JSON.parse(value);
      this.setState({user : editLoggedProfile})
      this.setState({fname : editLoggedProfile.FirstName})
      this.setState({lname : editLoggedProfile.LastName})
      this.setState({email : editLoggedProfile.EmailID})
      this.setState({password : editLoggedProfile.Password})
      this.setState({contactNo : editLoggedProfile.ContactNo})
      this.setState({address : editLoggedProfile.Address1})
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
      json.forEach( (value) => {
        if(value.UserID === editLoggedProfile.UserID){
          userInfo.push(value)
          this.setState({users : userInfo})
        }
      })
    });
  };


  updateProfile = () => {

    if(this.state.fname !== '' && this.state.lname !== '' && this.state.contactNo !== '' && this.state.address !== '' )
    {
      fetch(userApi)
      .then( (response) => {
        return response.json()
      })   
      .then( (json) => {
        allUsers = json;
        userId = editLoggedProfile.UserID;
        console.log(userId,'userId')

        allUsers.forEach(function(val) {
          var evens = _.remove(allUsers, function(n) {
            return n.UserID === userId;
          });
        })

        data = {
          "UserID" : editLoggedProfile.UserID,
          "FirstName": this.state.fname,
          "LastName": this.state.lname,
          "EmailID": this.state.email,
          "Password": this.state.password,
          "ContactNo": this.state.contactNo || '',
          "Address1": this.state.address || '',
          "City": '',
          "zip": '',
        }
        allUsers.push(data)

        fetch(userApi, {  
          method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(allUsers)
          }).then(function(res)
          {
            return res.json()
            .then(function(json) {  
              AsyncStorage.setItem('loggedUser', JSON.stringify(data))
              Alert.alert(
                'Done',
                'Successfully updated your profile'
              )
            Actions.profile()
          })
        });
      });
    }
    else{
      Alert.alert(
        'OOps!!',
        'Not able to save your changes, Please fill all the required fields'  
      )
    }
  }

  render(){
    return (
      <View style={styles.editProfileContainer}>
        <View>
        <Text style={styles.editProfileText}>Progress Bar </Text>
          <ProgressBarB  />
        </View>  
        <Text style={{fontSize: 20,textAlign: 'center',color: 'firebrick'}}>Edit Profile</Text>
        
        <ScrollView>
          <Text><Text style= {{color : 'firebrick'}}>*</Text>First Name</Text>
          <TextInput underlineColorAndroid='transparent' 
            style = {styles.editProfileInput} 
            autoCapitalize = 'none' 
            value={this.state.fname}
            onChangeText={this.handleFirstName}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Last Name</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.editProfileInput}
            autoCapitalize = 'none'
            value={this.state.lname}
            onChangeText={this.handleLastName}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Email</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.editProfileInput}
            autoCapitalize = 'none'
            editable = {false}
            value={this.state.email}
            onChangeText={this.handleEmail}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Password</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.editProfileInput}
            autoCapitalize = 'none'
            editable = {false}
            value={this.state.password}
            onChangeText={this.handlePassword}
          />

          <Text>Date of Birth</Text>
          <MyDatePicker/>

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Contact No</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.editProfileInput}
            autoCapitalize = 'none'
            keyboardType = 'numeric'
            maxLength={10}
            value={this.state.contactNo}
            onChangeText={this.handleContactNumber}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Address</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.editProfileInput}
            autoCapitalize = 'none'
            numberOfLines={2}
            value={this.state.address}
            onChangeText={this.handleAddress}
          />

          <Text>City</Text>
          <PickerDD/>
        </ScrollView> 
        
        <TouchableHighlight style={styles.editProfileSubmit} onPress={this.updateProfile}>
          <Text>Save</Text>     
        </TouchableHighlight>
      </View>  
    );         
  }
}
