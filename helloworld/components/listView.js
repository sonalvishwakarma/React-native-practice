import React, { Component } from 'react';
import {View,ListView} from 'react-native';
import HandleListView from './handleListView.js';

var array = [
  { name : "Sonia"},
  { name : "Aarti"},
  { name : "Anshuska"},
  { name : "Amman"},
  { name : "Sonya"}
]

export default class ListViewC extends Component {
	constructor(props){
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged : (r1,  r2) => alert('row has changed')
		});

		this.state = {
		 	dataSource: ds.cloneWithRows(array)                                                                                                                              
		};
	}

	render(){
		return (
		  <View>
		    <HandleListView dataSource={this.state.dataSource} /> 
		  </View>     
		)
	}
}