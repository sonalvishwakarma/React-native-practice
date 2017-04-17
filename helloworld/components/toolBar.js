import React, { Component } from 'react';
import {StyleSheet,Text,View,ToolbarAndroid} from 'react-native';
import image2 from '../img/./images2.png';
import homeIcon3 from '../img/./homeIcon3.png';
import { Actions } from 'react-native-router-flux';

class ToolBarA extends Component {

  constructor(props){
  super(props);
    this.state = {
      actionText: 'ToolbarAndroid Example',
    };
  }

  render() {
    return (
      <View>
        <View>
          <ToolbarAndroid
            actions={toolbarActions}
            navIcon={homeIcon3}
            onActionSelected={this._onActionSelected}
            onIconClicked={this.onIconClicked}
            style={styles.toolbar} />
          <Text>{this.state.actionText}</Text>
        </View>
      </View>  
    );
  }

  onIconClicked = () =>{
    this.setState({actionText: 'Icon clicked'})
    Actions.home();
  }

  _onActionSelected = (position) => {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  };
}

var toolbarActions = [
  {title: 'profile'},
  {title: 'display'},
  {title: 'setting'}
];

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
    marginTop : 50,
    backgroundColor:'transparent',
  },
});
export default ToolBarA;
