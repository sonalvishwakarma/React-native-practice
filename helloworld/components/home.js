import React, { Component } from 'react';
import {StyleSheet,Text,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import homeImage from './homeImage.jpg';

class home extends Component {
  render() {
    return (
      <Image source={homeImage}
        style={styles.container}>
        <Text style={styles.welcome} onPress={() => Actions.login()} >
          Welcome the React-native App
        </Text>
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
    color: '#ffffff',
  },
});
export default home;
