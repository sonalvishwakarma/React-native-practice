import React, { Component } from 'react';
import {View, Picker,Item} from 'react-native';
import styles from '../css/./style.js';

export default class PickerDD extends Component {

	constructor(props){
		super(props);
		this.state = {
			city : '',
			selected  :'key0'
		};
	}

 	onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };

	render (){
		return (
			<View>
			  <Picker style={styles.pickerDropDown}
			  	selectedValue={this.state.selected}
			  	onValueChange = {this.onValueChange.bind(this, 'selected')} 
			  	mode="dropdown">	
			  	<Picker.Item label="--Select city--" value ="key0"/>
			  	<Picker.Item label="Mumbai" value="key1" />
			  	<Picker.Item label="Bangalore" value="key2" />
			  	<Picker.Item label="Delhi" value="key3" />
			  </Picker>
			</View>
		)
	}
}