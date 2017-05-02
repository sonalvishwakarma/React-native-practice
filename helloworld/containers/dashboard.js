import React, { Component } from 'react';
import {Text,View,Image,TouchableHighlight,AsyncStorage, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import homeImage from '../img/./baseImage.jpg';
import MyActivityIndicator from '../components/./activityIndicator.js';
import ToolBarA from '../components/./toolBar.js';
import styles from '../css/./style.js';

export default class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      logged : null || '' 
    }
  }
  
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      var intialValue = value;
      this.setState({
        logged : intialValue
      })
    });
  }

  logout = () => {
    AsyncStorage.removeItem('loggedUser').then((value) => {
      var currentValue = JSON.parse(value);
      this.setState({
        logged  : currentValue
      })
    })  
    Alert.alert(
      'Bye bye',         
      'Successfully logout')
    Actions.dashboard()
  }

  render() {
    return (
      <Image source={homeImage} style={styles.dashboardContainer}>
        <View>
          <ToolBarA/>
        </View>
        <MyActivityIndicator/>
        {
          (this.state.logged) ? 
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
          (this.state.logged ) ? 
          (<TouchableHighlight style={styles.button} onPress={() => Actions.listofuser()} >
            <Text style={styles.dashText}>
              Users
            </Text>
          </TouchableHighlight>) : null
        }

        {
          (this.state.logged ) ? 
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
      </Image>
    );
  }
}
