import React, { Component } from 'react';
import {Text,View,Image,TouchableHighlight, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
import homeImage from '../img/./homeImage.jpg';
import MovingBar from '../components/./progressBar.js';
import styles from '../css/./style.js';

export default class Home extends Component {

  render() {
    return (
      <Image source={homeImage} style={styles.container}>
        <View>
          <StatusBar
            backgroundColor = "#ff6347"
            barStyle = "light-content"
            hidden = {false}
          />
        <Text style={styles.welcome}>
          Welcome the React-native App
        </Text>
        <View>
          <MovingBar styleAttr="Horizontal" indeterminate={false} color="#ff6347" />
        </View>

        <TouchableHighlight style={styles.button} onPress={() => Actions.dashboard()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Dashboard
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={() => Actions.dashboardComp()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Dashboard-Components
          </Text>
        </TouchableHighlight>

        </View>  
      </Image> 
    );
  }
}

