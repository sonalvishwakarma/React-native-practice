import React, { Component } from 'react';
import {StyleSheet,Text,View, Image,TouchableHighlight,AsyncStorage, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Profile from './profile.js';
import homeImage from '../img/./baseImage.jpg';
import MyActivityIndicator from '../components/./activityIndicator.js';
import SimpleSlider from '../components/./simpleSlider.js';
import GeoLocationInfo from '../components/./geoLocation.js';
import ToolBarA from '../components/./toolBar.js';
import styles from '../css/./style.js';

var logged;

export default class Dashboard extends Component {

  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {
    this.getLoggeduser()

      //if(logged !== null){
      //  Actions.dashboard()
      //}
      //else{
      //  Actions.home()
     // }
  }

  getLoggeduser= () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      logged = JSON.parse(value);
      console.log(value, 'getLoggeduserrr')
    });
  }

  logout = () => {
    AsyncStorage.removeItem('loggedUser')
      
      Alert.alert(
      'Bye bye',         
      'Successfully logout')
    Actions.home()
  }

  render() {
    return (
      <Image source={homeImage} style={styles.dashboardContainer}>
        <View>
          <ToolBarA/>
        </View>
        
        <MyActivityIndicator/>

        {
          (logged) ? 
          ( <TouchableHighlight style={styles.button} onPress={() => Actions.profile()} underlayColor='midnightblue'>
            <Text style={styles.dashText}>
              Profile
            </Text></TouchableHighlight>) : 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.login()}  underlayColor='midnightblue'>
            <Text style={styles.dashText}>
              Login
            </Text>
          </TouchableHighlight>)
        }

        {
          (logged) ? 
          (<TouchableHighlight style={styles.button} onPress={this.logout} underlayColor='midnightblue'>
            <Text style={styles.dashText}>
              Logout
            </Text></TouchableHighlight>) : 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.signUp()}  underlayColor='midnightblue'>
            <Text style={styles.dashText}>
              SignUp
            </Text>
          </TouchableHighlight>)
        }

        {
          (logged) ? 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.listofuser()} >
            <Text style={styles.dashText}>
              Users
            </Text>
          </TouchableHighlight>) : null
        }
      </Image>
    );
  }
}
