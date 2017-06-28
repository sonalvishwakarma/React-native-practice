import React, { Component } from 'react';
import {View,MapView} from 'react-native';
import styles from '../css/./style.js';

export default HandleMapView  = (props) => {

	return (
	  <View style={styles.listContainer}>
	     <MapView 
        style={styles.map}
        showsUserLocation ={false}
        followUserLocation = {false}
        zoomEnabled= {true}	
	    />
	  </View>     
	)
}
