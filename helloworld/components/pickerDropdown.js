import React, { Component } from 'react';
import {StyleSheet, View, Picker,Item} from 'react-native';

class PickerDD extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			city : '',
			selected  :'key0'
		};
	}

	//onValueChange = (ci) => {
  //  this.setState({
 	//   	city : ci
  //  });
	//}


 	onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };

	render (){
		return (
			<View>
			  <Picker style={styles.picker}
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

const styles = StyleSheet.create({
	picker : {
		width  : 300,
	},
})

export default PickerDD;