import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,Image,AsyncStorage, View, TouchableHighlight, 
Modal, Button, ScrollView, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyDatePicker from '../components/./datePicker.js';
import PickerDD from '../components/./pickerDropdown.js';
import ProgressBarB from '../components/./progressBarAB.js';

var editLoggedProfile;
var userApi = 'https://api.myjson.com/bins/o4zz3';
var userInfo = [];
var allUsers = [];
var data;
class EditProfile extends Component {

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
      json.forEach( (value) => {
        if(value.UserID === editLoggedProfile.UserID){
          userInfo.push(value)
          this.setState({users : userInfo})
          console.log(this.state.users,'users')
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

      allUsers.forEach(function(val, index) {
        if(val.UserID === userId){
          var oldData =  allUsers.slice(index) 
          allUsers.pop(oldData);
        }
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
      console.log(data, 'data')

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
            AsyncStorage.setItem('loggedUser', JSON.stringify(data) );
            this.setState({'loggedUser' : data})
            Alert.alert(
              'Done',
              'Successfully updated your profile'
            )
          Actions.profile()
          console.log(json,'json')
        }.bind(this))
      }.bind(this));
    });

    }
    else{
      Alert.alert(
        'OOps!!',
        'Not able to save your changes'  
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.text}>Progress Bar </Text>
          <ProgressBarB  />
        </View>  
        <Text style={{fontSize: 20,textAlign: 'center',color: 'firebrick'}}>Edit Profile</Text>
        
        <ScrollView>
          <Text><Text style= {{color : 'firebrick'}}>*</Text>First Name</Text>
          <TextInput underlineColorAndroid='transparent' 
            style = {styles.input} 
            autoCapitalize = 'none' 
            value={this.state.fname}
            onChangeText={this.handleFirstName}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Last Name</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            value={this.state.lname}
            onChangeText={this.handleLastName}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Email</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            editable = {false}
            value={this.state.email}
            onChangeText={this.handleEmail}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Password</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            editable = {false}
            value={this.state.password}
            onChangeText={this.handlePassword}
          />

          <Text>Date of Birth</Text>
          <MyDatePicker/>

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Contact No</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            keyboardType = 'numeric'
            maxLength={10}
            value={this.state.contactNo}
            onChangeText={this.handleContactNumber}
          />

          <Text><Text style= {{color : 'firebrick'}}>*</Text>Address</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            numberOfLines={2}
            value={this.state.address}
            onChangeText={this.handleAddress}
          />

          <Text>City</Text>
          <PickerDD/>
        </ScrollView> 
        
        <TouchableHighlight style={styles.submit} onPress={this.updateProfile}>
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
  input: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1,
    color: 'black',
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
