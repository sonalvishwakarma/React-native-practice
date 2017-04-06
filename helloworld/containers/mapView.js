import React, { Component } from 'react';
import {View} from 'react-native';
import HandleListView from './handleMapView.js';

class MapViewC extends Component {
	constructor(){
		super();
	}

	render(){
		return (
		  <View>
		    <HandleMapView/>
		  </View>     
		)
	}
}

export default MapViewC;