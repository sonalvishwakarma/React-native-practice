import React, { Component } from 'react';
import {StyleSheet,Text,View, Image,TouchableHighlight,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Profile from './profile.js';
import homeImage from '../img/./homeImage.jpg';

class Dashboard extends Component {

  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {

    if(AsyncStorage.getItem('loggedUser')){
      Actions.dashboard()
    }
    else{
      Actions.home()
    }
  }

  logout = () => {
    AsyncStorage.removeItem('loggedUser')
    if(AsyncStorage.getItem('loggedUser') !== ''){
      alert('Successfully logout')
      Actions.home()
    }
  }

  render() {
    return (
      <Image source={homeImage} style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => Actions.profile()} >
          <Text style={styles.welcome}>
            Profile
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.logout} >
          <Text style={styles.welcome}>
            Logout
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Dashboard;
