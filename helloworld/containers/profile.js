import React, { Component } from 'react';
import {StyleSheet,Text,Image,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import HandleProfile from './handleProfile.js';
import homeImage from '../img/./homeImage.jpg';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : ''
    }
  }
      
   componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      console.log(value, 'valueppp')
    });

    if(AsyncStorage.getItem('loggedUser')){
      Actions.dashboard()
    }
    else{
      Actions.home()
    }
  }

  render(){
    return (
      <Image source={homeImage} style={styles.container}>
        <HandleProfile/>
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
    color: 'grey',
  }
});

export default Profile;
