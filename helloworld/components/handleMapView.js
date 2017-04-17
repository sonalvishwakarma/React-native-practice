import React, { Component } from 'react';
import {StyleSheet,View,Text,MapView} from 'react-native';

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

const styles = StyleSheet.create ({
	listContainer: {
	  paddingTop:50
	},
	map: {
	  height : 400,
	  marginTop : 80 ,	
	  position: 'absolute',
    top: 0,
    left: 0, 
    flex : 1
	}
})
