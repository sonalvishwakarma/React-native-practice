import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,View,TouchableHighlight} from 'react-native';
import ToolBarA from '../components/./toolBar.js';

export default HandleLogin = (props) => {
  return (
    <View style={styles.loginform}>
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
      <TouchableHighlight
        style = {styles.submit}
        onPress = { () => props.login(props.email, props.password)}>
        <Text>
          Submit
        </Text>
      </TouchableHighlight> 
    </View>
  )
}

const styles = StyleSheet.create({
  loginform : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 50,
  },
  input: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'royalblue',
    borderWidth: 1,
    color: 'black',
  },
  submit: {
    backgroundColor: 'royalblue',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  }
});