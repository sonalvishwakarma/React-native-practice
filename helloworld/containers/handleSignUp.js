import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,View,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';

export default HandleSignUp = (props) => {

  return (
    <View>       
      <TextInput underlineColorAndroid='transparent'
        style = {styles.input}
        placeholder = 'First Name'
        autoCapitalize = 'none'
        onChangeText = {props.handleFirstName}
      />
      <TextInput underlineColorAndroid='transparent'
        style = {styles.input}
        placeholder = 'Last Name'
        autoCapitalize = 'none'
        onChangeText = {props.handleLastName}
      />
      <TextInput underlineColorAndroid='transparent'
        style = {styles.input}
        placeholder = 'Email'
        autoCapitalize = 'none'
        onChangeText = {props.handleEmail}
      />
      <TextInput underlineColorAndroid='transparent' secureTextEntry={true}
        style = {styles.input}
        placeholder = 'Password'
        autoCapitalize = 'none'
        onChangeText = {props.handlePassword}
      />
      <TextInput underlineColorAndroid='transparent' secureTextEntry={true}
        style = {styles.input}
        placeholder = 'Confirm Password'
        autoCapitalize = 'none'
        onChangeText = {props.handleConfirmPassword}
      />

      <TouchableHighlight
        style = {styles.submit}
        onPress = { () => props.signUp(props.fname, props.lname, props.email, props.password, props.confirmPassword)}>
        <Text>
          Submit
        </Text>
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
    color:'black'
  },
  submit: {
    backgroundColor: 'grey',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  }
});