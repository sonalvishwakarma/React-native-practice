import React, { Component } from 'react';
import {StyleSheet,Text,View,ToolbarAndroid} from 'react-native';
import homeIcon3 from '../img/./simplehouse.png';
import { Actions } from 'react-native-router-flux';

class ToolBarA extends Component {

  //constructor(props){
  //uper(props);
    //this.state = {
    //  actionText: 'ToolbarAndroid Example',
    //};
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

var toolbarActions = [
  {title: 'profile'},
  {title: 'display'},
  {title: 'setting'}
];

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'black',
    height: 60,
    marginTop : 49,
  },
});
export default ToolBarA;
