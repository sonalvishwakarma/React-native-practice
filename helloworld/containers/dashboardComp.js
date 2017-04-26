import React, { Component } from 'react';
import {StyleSheet,Text,View, TouchableHighlight,Image, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import homeImage from '../img/./homeImage.jpg';

class DashboardComp extends Component {

  componentDidMount (){
    ToastAndroid.showWithGravity('Components list with example', ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  render(){
    return (
      <Image source={homeImage} style={styles.container}>
        <Text style={styles.welcome}>
          Components
        </Text>
        <TouchableHighlight style={styles.button} onPress= {() => Actions.listView()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            List View
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress= {() => Actions.mapView()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            Map View
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress = {() => Actions.pager()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            View Pager
          </Text>
        </TouchableHighlight>
      
        <TouchableHighlight style={styles.button} onPress = {() => Actions.toolbar()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            ToolBar
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress = {() => Actions.geolocation()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            Geo Location
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress = {() => Actions.netInfo()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            NetInfo
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress = {() => Actions.camera()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            CameraRoll
          </Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.button} onPress = {() => Actions.imgPicker()} underlayColor='midnightblue'>
          <Text style={styles.text}>
            Image Picker
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
    marginTop : 10
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  text: {
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
