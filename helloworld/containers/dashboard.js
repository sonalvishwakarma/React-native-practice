import React, { Component } from 'react';
import {StyleSheet,Text,View, Image,TouchableHighlight,AsyncStorage, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Profile from './profile.js';
import homeImage from '../img/./baseImage.jpg';
import MyActivityIndicator from '../components/./activityIndicator.js';
import SimpleSlider from '../components/./simpleSlider.js';
import GeoLocationInfo from '../components/./geoLocation.js';
import ToolBarA from '../components/./toolBar.js';

var logged;

class Dashboard extends Component {

  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      logged = value;
      console.log(value, 'getLoggeduser')
    });
  }

  logout = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      logged = value;
      console.log(logged, 'logged')
      if(logged !== "" && logged !== null){
        var aa =  AsyncStorage.removeItem('loggedUser')
        Alert.alert(
        'Bye bye',         
        'Successfully logout')
        console.log(aa, 'rmLoggeduser')
        Actions.home()
      }
      else {
        Alert.alert(
        'Bye bye',         
        'Successfully logout')
        Actions.home()
      }
    });  
  }

  render() {
    return (
      <Image source={homeImage} style={styles.container}>
        <View>
          <ToolBarA/>
        </View>
        <MyActivityIndicator/>

        {
          (logged !== "" && logged !== null) ? 
          ( <TouchableHighlight style={styles.button} onPress={() => Actions.profile()} underlayColor='midnightblue'>
            <Text style={styles.welcome}>
              Profile
            </Text></TouchableHighlight>) : 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.login()}  underlayColor='midnightblue'>
            <Text style={styles.welcome}>
              Login
            </Text>
          </TouchableHighlight>)
        }

        {
          (logged !== "" && logged !== null) ? 
          (<TouchableHighlight style={styles.button} onPress={this.logout} underlayColor='midnightblue'>
            <Text style={styles.welcome}>
              Logout
            </Text></TouchableHighlight>) : 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.signUp()}  underlayColor='midnightblue'>
            <Text style={styles.welcome}>
              SignUp
            </Text>
          </TouchableHighlight>)
        }

        {
          (logged !== "" && logged !== null) ? 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.listofuser()} >
            <Text style={styles.welcome}>
              Users
            </Text>
          </TouchableHighlight>) : null
        }

        
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
