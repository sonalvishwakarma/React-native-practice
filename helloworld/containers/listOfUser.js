import React, { Component } from 'react';
import {View,ListView} from 'react-native';
import HandleListOfUser from './handleListOfUser.js';
var userApi = 'https://api.myjson.com/bins/o4zz3';
var userlist = [];

var array = [
  { name : "Soniya"},
  { name : "Aarti"}
]
var array2 = [
  {
    "UserID": 1,
    "FirstName": "admin",
    "LastName": "a",
    "EmailID": "admin@gmail.com",
    "Password": "0101",
    "ContactNo": "",
    "Address1": "",
    "City": "",
    "zip": ""
  },
  {
    "UserID": 2,
    "FirstName": "sonal",
    "LastName": "vishwa",
    "EmailID": "sona.v@gmail.com",
    "Password": "12345",
    "ContactNo": "",
    "Address1": "",
    "City": "",
    "zip": ""
  }
]

class ListOfUser extends Component {
	constructor(props){
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged : (r1,  r2) => alert('row has changed')
		});

		this.state = {
		 	dataSource: ds.cloneWithRows(array2)                                                                                                                              
		};
		console.log(this.state.dataSource, 'ds')
	}

  componentDidMount ()  {
    this.getUser()
  }

	getUser = () => {
	  fetch(userApi)
	  .then( (response) => {
	    return response.json()
	  })   
	  .then( (json) => {
	  	userlist = json;
	  	console.log(userlist)
	  })
	};

	render(){
		return (
		  <View>
		    <HandleListOfUser dataSource={this.state.dataSource} /> 
		  </View>     
		)
	}
}

export default ListOfUser;