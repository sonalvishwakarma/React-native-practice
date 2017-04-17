import React, { Component } from 'react';
import {View} from 'react-native';
import HandleListView from './handleMapView.js';

class MapViewC extends Component {

	render(){
		return (
		  <View>
		    <HandleMapView/>
		  </View>     
		)
	}
}

export default MapViewC;