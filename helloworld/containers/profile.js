import React, { Component } from 'react';
import {StyleSheet,Text,Image,AsyncStorage, View, TouchableHighlight, 
Modal, Button, StatusBar, Switch} from 'react-native';
import { Actions } from 'react-native-router-flux';
import EditProfile from './editProfile.js';
import homeImage from '../img/./baseImage.jpg';
import MyActivityIndicator from '../components/./activityIndicator.js';
import ProgressBarB from '../components/./progressBarAB.js';

var loggedprofile;

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : '',
      modalVisible : false,
      switchOnTrue : true,
      switchOnFalse : false
    }
  }
      
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      loggedprofile = JSON.parse(value);
      this.setState({user : loggedprofile})
      console.log(loggedprofile, 'loggedprofile')
    });
  } 

  openModal = () => {
    this.setState({modalVisible: true});
  }
  closeModal = () => {
    this.setState({modalVisible: false});
  }

  render(){
    return (
      <Image source={homeImage} style={styles.container}>
        <StatusBar
          backgroundColor = "lightskyblue"
          barStyle = "light-content"
          hidden = {false}
        />
        <View> 
          <Text>Edit profile</Text>
          <Switch
            onValueChange={(value) => this.setState({switchOnFalse: value})}
            style={{marginBottom: 10}}
            value={this.state.switchOnFalse}>
          </Switch>
        </View>

        <View>
          <Text style={styles.text}>
            First Name : - 
            {this.state.user.FirstName}
          </Text>

          <Text style={styles.text}>
            Last Name : -
            {this.state.user.LastName}
          </Text>

          <Text style={styles.text}>
            EmailID : -
            {this.state.user.EmailID}
          </Text>

          <Text style={styles.text}>
            Password : -
            {this.state.user.Password}
          </Text>

          {(this.state.switchOnFalse) ? ( <TouchableHighlight  onPress = {this.openModal}
            style = {styles.submit}>
            <Text>
              Edit Profile
            </Text>
          </TouchableHighlight> ) : null}
         
        </View>
        <View >
          <Modal 
            animationType = {"slide"}
            transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => {alert("Modal has been closed.")}}
            >

            <View style={styles.modal}>
              <Text style={styles.text}>Progress Bar 2</Text>
              <ProgressBarB />

              <EditProfile />
              <Button
                onPress={this.closeModal}
                title="close" color="firebrick">
              </Button>
            </View>  
          </Modal>
        </View>
      </Image>
    );         
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
  },
  text : {
    marginTop : 20
  },
  submit: {
    backgroundColor: 'silver',
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
  },
  close : {
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 5,
  },
  modal: {
    justifyContent: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff'
  }
});

export default Profile;
