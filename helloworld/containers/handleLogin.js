import React, { Component } from 'react';
import {Text,TextInput,View,TouchableHighlight} from 'react-native';
import styles from '../css/./style.js';

export default HandleLogin = (props) => {
  return (
    <View style={styles.loginform}>
      <TextInput underlineColorAndroid='transparent'
        style = {styles.loginInput}
        placeholder = 'Email'
        autoCapitalize = 'none'
        onChangeText = {props.handleEmail}
      />
      <TextInput underlineColorAndroid='transparent' secureTextEntry={true}
        style = {styles.loginInput}
        placeholder = 'Password'
        autoCapitalize = 'none'
        onChangeText = {props.handlePassword}
      />
      <TouchableHighlight
        style = {styles.loginSubmit}
        onPress = { () => props.login(props.email, props.password)}>
        <Text>
          Submit
        </Text>
      </TouchableHighlight> 
    </View>
  )
}
