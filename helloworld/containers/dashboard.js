import React, { Component } from 'react';
import {StyleSheet,Text,View, Image,TouchableHighlight,AsyncStorage, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Profile from './profile.js';
import homeImage from '../img/./baseImage.jpg';
import MyActivityIndicator from '../components/./activityIndicator.js';
import SimpleSlider from '../components/./simpleSlider.js';
import GeoLocationInfo from '../components/./geoLocation.js';

class Dashboard extends Component {

  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      console.log(value, 'getLoggeduser')
    });
  }

  logout = () => {
    if(AsyncStorage.removeItem('loggedUser')){
      Alert.alert(
        'Bye bye',         
        'Successfully logout')
      Actions.home()
    }
  }

  render() {
    return (
      <Image source={homeImage} style={styles.container}>
        <View>
          
        </View>

        <MyActivityIndicator/>

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
