import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import homeImage from './homeImage.jpg';

class mainApp extends Component {
  render() {
    return (
      <Image source={homeImage}
        style={styles.container}>
        <Text style={styles.welcome} >
          Welcome the React-native App
        </Text>
        <TouchableHighlight style={styles.button} onPress={() => Actions.login()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Login
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => Actions.signUp()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            SignUp
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => Actions.Dashboard()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Dashborad
          </Text>
        </TouchableHighlight>
      </Image> 
    );
  }
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
    color: 'skyblue',
    backgroundColor:'transparent',
  },
  button : {
    borderWidth: 1,
    borderColor: 'transparent'
  }
});
export default mainApp;
