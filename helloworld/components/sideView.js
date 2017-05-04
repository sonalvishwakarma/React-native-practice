import React, { Component } from 'react';
import {View, Text,Image, Button} from 'react-native';
import Menu from './menuC.js';
import SideMenu from 'react-native-side-menu';
import styles from '../css/./style.js';

export default class SideViewExample extends Component {

	constructor(props){
		super(props)
		this.state = {
			isOpen: false,
		}
	}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

	render(){

    return (
      <SideMenu
        menu={Menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuWelcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.menuInstructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
        </View>
        <Button style={styles.menuButton} onPress={() => this.toggle()} title="click">
          <Image
            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 32, height: 32, }} />
        </Button>
      </SideMenu>
    );
	}
}