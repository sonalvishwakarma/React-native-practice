import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,View,TouchableHighlight} from 'react-native';

export default HandleLogin = (props) => {
  return (
    <View>
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
    color: 'black',

  },
  submit: {
    backgroundColor: 'grey',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  }
});