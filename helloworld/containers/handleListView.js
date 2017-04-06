import React, { Component } from 'react';
import {StyleSheet,View,ListView,Text} from 'react-native';

export default HandleListView  = (props) => {

	return (
	  <View style={styles.listContainer}>
	    <ListView 
	    	dataSource = {props.dataSource}
        renderRow = {
        	(data) => (
        	  <Text style={styles.listItem}>
        	    Name : {data.name}
        	  </Text>          
        	)
 	      } 
	    />
	  </View>     
	)
}

const styles = StyleSheet.create ({
	listContainer: {
	  paddingTop:50
	},
	listItem: {
	  fontSize: 30,
	  fontWeight: 'bold',
	  textAlign: 'center',
	}
})
