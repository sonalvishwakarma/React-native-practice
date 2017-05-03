import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';
import App from './containers/app.js';
import styles from './css/./style.js';

export default class helloworld extends Component {
  render() {
    return (
      <View style={styles.indexContainer}>
      </View>
    );
  }
}

AppRegistry.registerComponent('helloworld', () => App);
