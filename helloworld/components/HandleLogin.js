import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,Image,TouchableHighlight} from 'react-native';
import img1 from './images.jpg';

export default HandleLogin = (props) => {
   return (
      <Image source={img1} style={styles.container}>
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
      </Image>
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
    borderWidth: 1
  },
  submit: {
    backgroundColor: 'grey',
    padding: 10
  }
});

