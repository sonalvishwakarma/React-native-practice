import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,Image,AsyncStorage, View, TouchableHighlight, 
Modal, Button, ScrollView} from 'react-native';
import MyDatePicker from '../components/./datePicker.js';
import PickerDD from '../components/./pickerDropdown.js';
import ProgressBarB from '../components/./progressBarAB.js';

var editLoggedProfile;
var userApi = 'https://api.myjson.com/bins/o4zz3';
var userss = [];
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
          userss.push(value)
          this.setState({users : userss})
          console.log(this.state.users,'users')
        }
      })
    });
  }

  updateProfile = () => {
    AsyncStorage.setItem('loggedUser', JSON.stringify(editLoggedProfile) );
    this.setState({'loggedUser' : editLoggedProfile})
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
            value={this.state.fname}
            onChange={this.handleFirstName}
          />

          <Text>Last Name</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            value={this.state.lname}
            onChange={this.handleLastName}
          />

          <Text>Email</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            editable = {false}
            value={this.state.email}
            onChange={this.handleEmail}
          />

          <Text>Password</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            editable = {false}
            value={this.state.password}
            onChange={this.handlePassword}
          />

          <Text>Date of Birth</Text>
          <MyDatePicker/>

          <Text>Contact No</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            keyboardType = 'numeric'
            maxLength={10}
            value={this.state.contactNo}
            onChange={this.handleContactNumber}
          />

          <Text>Address</Text>
          <TextInput underlineColorAndroid='transparent'
            style = {styles.input}
            autoCapitalize = 'none'
            numberOfLines={2}
            value={this.state.address}
            onChange={this.handleAddress}
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
