import React, { Component } from 'react';
import {StyleSheet,View,ListView,ScrollView,WebView,Text} from 'react-native';

export default HandleListOfUser  = (props) => {
	return (
	  <View style={styles.listContainer}>
	    <ScrollView>
		    <ListView 
		    	dataSource = {props.dataSource}
	        renderRow = {
	        	(data) => (
	        	  <Text style={styles.listItem}>
	        	   {data.FirstName}
	        	  </Text>          
	        	)
	 	      } 
	    	/>
	    </ScrollView>	
	  </View>     
	)
}

const styles = StyleSheet.create ({
	listContainer: {
	  paddingTop:50,
	  marginTop: 50,
    height: 500,
	},
	listItem: {
	  fontSize: 20,
	  textAlign: 'center',
	},
	img : {
		height : 200,
		width : 250
	}
})
