import React, { Component } from 'react';
import {Text,View,ToolbarAndroid} from 'react-native';
import homeIcon3 from '../img/./simplehouse.png';
import { Actions } from 'react-native-router-flux';
import styles from '../css/./style.js';

export default class ToolBarA extends Component {
  
  onIconClicked = () => {
    Actions.dashboard();
  }

  render() {
    return (
      <View>
        <View>
          <ToolbarAndroid
            navIcon={homeIcon3}
            onIconClicked={this.onIconClicked}
            style={styles.toolbar} />
          <Text></Text>
        </View>
      </View>  
    );
  }
}
