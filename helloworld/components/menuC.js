import React, { Component } from 'react';
import {View, Text} from 'react-native';
import SideMenu from 'react-native-side-menu';
import styles from '../css/./style.js';

export default class Menu extends Component {

	render(){
    return (
      <View style={styles.menu}>
      	<Text>Home</Text>
        <Text>About</Text>
        <Text>Contacts</Text>
      </View>
    );
	}
}
