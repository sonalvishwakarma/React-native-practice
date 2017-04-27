import React, { Component } from 'react';
import {Text,View,ToolbarAndroid} from 'react-native';
import homeIcon3 from '../img/./simplehouse.png';
import { Actions } from 'react-native-router-flux';
import styles from '../css/./style.js';

export default class ToolBarA extends Component {

  //constructor(props){
  //super(props);
  //  this.state = {
  //    actionText: 'ToolbarAndroid Example',
  //  };
  //}

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

  onIconClicked = () =>{
    Actions.dashboard();
  }

  //_onActionSelected = (position) => {
  //  this.setState({
  //    actionText: 'Selected ' + toolbarActions[position].title,
  //  });
  //};
}

//var toolbarActions = [
//  {title: 'profile'},
//  {title: 'display'},
//  {title: 'setting'}
//];