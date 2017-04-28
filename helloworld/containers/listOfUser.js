import React, { Component } from 'react';
import {View,ListView,Alert, Image, StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HandleListOfUser from './handleListOfUser.js';
import homeImage from '../img/./baseImage.jpg';
import ToolBarA from '../components/./toolBar.js';
import styles from '../css/./style.js';

var userApi = 'https://api.myjson.com/bins/o4zz3';
var userlist = [];

export default class ListOfUser extends Component {

	constructor(props){
		super(props);
		this.getUser()
	}

  getUser = () => {
    fetch(userApi)
    .then( (response) => {
      return response.json()
    })   
    .then( (json) => {
      userlist = json;
      this.setState({
        dataSource: ds.cloneWithRows(userlist)    
      })
    })

    const ds = new ListView.DataSource({
      rowHasChanged : (r1,  r2) => alert('row has changed')
    });

    this.state = {
      dataSource: ds.cloneWithRows(userlist)                                                                                                                              
    };
  }

	removeUser = (data) => {

    userlist.forEach(function(usr, index){

      if(usr.UserID == data.UserID){
       	var rmUser = userlist.slice(index);
       	userlist.pop(rmUser);
       	fetch(userApi, {  
        	method: 'PUT',
        	headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json',
        	},
        body: JSON.stringify(userlist)
      }).then(function(){
        	Alert.alert(
            'Done',
            'Successfully deleted user'
          )
          Actions.profile()
          Actions.listofuser()
        });
      }
    });
  }

	render(){
		return (
      <Image source={homeImage} style={styles.listOUserContainer}>
      	<View>
          <ToolBarA/>
        </View>
        <StatusBar
          backgroundColor = "burlywood"
          barStyle = "light-content"
          hidden = {false}
        />
		    <HandleListOfUser dataSource={this.state.dataSource} removeUser={this.removeUser}/> 
		  </Image>     
		)
	}
}

