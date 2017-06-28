import React, { Component } from 'react';
import {Text,TextInput,View,TouchableHighlight} from 'react-native';
import styles from '../css/./style.js';

export default HandleSignUp = (props) => {

  return (
    <View style={styles.signUpform}>       
      <TextInput underlineColorAndroid='transparent'
        style = {styles.signUpInput}
        placeholder = 'First Name'
        autoCapitalize = 'none'
        onChangeText = {props.handleFirstName}
      />
      <TextInput underlineColorAndroid='transparent'
        style = {styles.signUpInput}
        placeholder = 'Last Name'
        autoCapitalize = 'none'
        onChangeText = {props.handleLastName}
      />
      <TextInput underlineColorAndroid='transparent'
        style = {styles.signUpInput}
        placeholder = 'Email'
        autoCapitalize = 'none'
        onChangeText = {props.handleEmail}
      />
      <TextInput underlineColorAndroid='transparent' secureTextEntry={true}
        style = {styles.signUpInput}
        placeholder = 'Password'
        autoCapitalize = 'none'
        onChangeText = {props.handlePassword}
      />
      <TextInput underlineColorAndroid='transparent' secureTextEntry={true}
        style = {styles.signUpInput}
        placeholder = 'Confirm Password'
        autoCapitalize = 'none'
        onChangeText = {props.handleConfirmPassword}
      />

      <TouchableHighlight
        style = {styles.signUpSubmit}
        onPress = { () => props.signUp(props.fname, props.lname, props.email, props.password, props.confirmPassword)}>
        <Text>
          Submit
        </Text>
      </TouchableHighlight>
    </View>  
  )
}
