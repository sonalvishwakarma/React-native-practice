import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,View,TouchableHighlight,ScrollView,Button,ProgressBar} from 'react-native';
import MyDatePicker from '../components/./datePicker.js';
import PickerDD from '../components/./pickerDropdown.js';

export default HandleProfile = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20,textAlign: 'center',color: 'firebrick'}}>Edit Profile</Text>
       <ProgressBar styleAttr="Horizontal" color="red"/>

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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:10,
    marginTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  input: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1,
    color:'white'
  },
  submit: {
    backgroundColor: '#2e8b57',
    borderRadius: 5,
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
  }
});