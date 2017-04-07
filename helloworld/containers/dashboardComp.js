import React, { Component } from 'react';
import {StyleSheet,Text,View, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

class DashboardComp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Components
        </Text>
        <TouchableHighlight style={styles.button} onPress={() => Actions.listView()} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            List View
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => Actions.mapView()} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Map View
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            CameraRoll
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Geolocation
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
  button : {
    borderWidth: 1,
    borderColor: 'transparent'
  }
});

export default DashboardComp;
