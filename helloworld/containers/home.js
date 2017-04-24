import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,AsyncStorage, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
import homeImage from '../img/./homeImage.jpg';
import MovingBar from '../components/./progressBar.js';

class Home extends Component {

  componentDidMount = () => {
  if(AsyncStorage.getItem('loggedUser')){
  Actions.dashboard()
    }
    else{
      Actions.home()
    }
  }

  render() {
    return (
      <Image source={homeImage}
        style={styles.container}>
         <StatusBar
            backgroundColor = "#ff6347"
            barStyle = "light-content"
            hidden = {false}
         />
        <Text style={styles.welcome} >
          Welcome the React-native App
        </Text>
        <View>
          <MovingBar styleAttr="Horizontal" indeterminate={false} color="#ff6347" />
        </View>
        <TouchableHighlight style={styles.button} onPress={() => Actions.login()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Login
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => Actions.signUp()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            SignUp
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => Actions.dashboardComp()}  underlayColor='midnightblue'>
          <Text style={styles.welcome}>
            Dashboard Components
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
    color: 'skyblue',
    backgroundColor:'transparent',
  },
  button : {
    borderWidth: 1,
    borderColor: 'transparent'
  }
});
export default Home;
