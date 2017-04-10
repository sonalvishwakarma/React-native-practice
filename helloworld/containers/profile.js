import React, { Component } from 'react';
import {StyleSheet,Text,Image,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import HandleProfile from './handleProfile.js';
import homeImage from '../img/./baseImage.jpg';

var loggedprofile;

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : ''
    }
  }
      
  componentDidMount = () => {
   AsyncStorage.getItem('loggedUser').then((value) => {
      loggedprofile = JSON.parse(value);
      this.setState({user : loggedprofile})
      console.log(loggedprofile, 'loggedprofile')
    });
  } 

  render(){
    return (
      <Image source={homeImage} style={styles.container}>
        <HandleProfile/>
        <Text>
          {this.state.user.FirstName}
        </Text>
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
    paddingTop:50,
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  }
});

export default Profile;
