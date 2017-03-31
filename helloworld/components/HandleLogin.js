import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,View,TouchableHighlight} from 'react-native';

export default HandleLogin = (props) => {
   return (
      <View style = {styles.container}>
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
    backgroundColor: '#bb0000',
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
    borderWidth: 1
  },
  submit: {
    backgroundColor: 'grey',
    padding: 10
  }
});

