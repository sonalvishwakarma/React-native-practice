import React, { Component } from 'react';
import {Text,Image,AsyncStorage, View, Modal, Button, StatusBar, Switch} from 'react-native';
import { Actions } from 'react-native-router-flux';
import EditProfile from './editProfile.js';
import homeImage from '../img/./baseImage.jpg';
import ToolBarA from '../components/./toolBar.js';
import styles from '../css/./style.js';

var loggedprofile;

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {},
      modalVisible : false,
      switchOn : false
    }
  }
      
  componentDidMount = () => {
    AsyncStorage.getItem('loggedUser').then((value) => {
      loggedprofile = JSON.parse(value);
      this.setState({user : loggedprofile})
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
      <Image source={homeImage} style={styles.profileContainer}>
        <View>
          <ToolBarA/>
        </View>
        <StatusBar
          backgroundColor = "lightskyblue"
          barStyle = "light-content"
          hidden = {false}
        />
        <View style={styles.profileForm}>
          <Text>Edit profile</Text>
          <Switch
            onValueChange={(value) => this.setState({switchOn: value})}
            style={{marginBottom: 10}}
            tintColor = "#ff6347"
            thumbTintColor = "blue"
            onTintColor = "#008000"
            value={this.state.switchOn}>
          </Switch>

          <Text style={styles.profileIntext}>
            First Name : - 
            {this.state.user.FirstName}
          </Text>

          <Text style={styles.profileIntext}>
            Last Name : -
            {this.state.user.LastName}
          </Text>

          <Text style={styles.profileIntext}>
            EmailID : -
            {this.state.user.EmailID}
          </Text>
          {
            (this.state.switchOn) 
            ? (<Button onPress={this.openModal} color="#008000"
            title="Edit" style={styles.profileSubmit} ></Button>) 
            : null
          }
        </View>
        <View >
          <Modal 
            animationType = {"slide"}
            transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => {alert("Modal has been closed.")}}
            >
            <View style={styles.profileModal}>
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

