import React, { Component } from 'react';
import {Text,View, TouchableHighlight,Image, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import homeImage from '../img/./homeImage.jpg';
import ToolBarA from '../components/./toolBar.js';
import styles from '../css/./style.js';

export default class DashboardComp extends Component {

  componentDidMount (){
    ToastAndroid.showWithGravity('Components list with example', ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  render(){
    return (
      <Image source={homeImage} style={styles.dashCompContainer}>
        <View>
          <ToolBarA/>
        </View>
        <Text style={styles.dashCompText}>
          Components
        </Text>
        <TouchableHighlight style={styles.compButton} onPress= {() => Actions.listView()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            List View
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.compButton} onPress= {() => Actions.mapView()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            Map View
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.compButton} onPress = {() => Actions.pager()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            View Pager
          </Text>
        </TouchableHighlight>
      
        <TouchableHighlight style={styles.compButton} onPress = {() => Actions.toolbar()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            ToolBar
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.compButton} onPress = {() => Actions.geolocation()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            Geo Location
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.compButton} onPress = {() => Actions.netInfo()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            NetInfo
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.compButton} onPress = {() => Actions.camera()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            CameraRoll
          </Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.compButton} onPress = {() => Actions.imgPicker()} underlayColor='midnightblue'>
          <Text style={styles.compText}>
            Image Picker
          </Text>
        </TouchableHighlight>
      </Image>
    );
  }
}
