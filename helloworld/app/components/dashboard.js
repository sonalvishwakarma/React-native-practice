import React, { Component } from 'react';
import {StyleSheet,Text,View, TouchableHighlight,Actions} from 'react-native';

class Dashboard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        </Text>
        <TouchableHighlight style={styles.button} onPress={() => Actions.Asyncstorage()} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            AsyncStorage
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Picker
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            CameraRoll
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Geoloction
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            NetInfo
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            ToastAndroid
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Switch
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            StatusBar
          </Text>
        </TouchableHighlight> 
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            ProgressBarAndroid
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Dashboard;
