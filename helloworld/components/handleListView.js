import React, { Component } from 'react';
import {StyleSheet,View,ListView,ScrollView,WebView,Text} from 'react-native';

export default HandleListView  = (props) => {
	return (
	  <View style={styles.listContainer}>
	    <WebView style={styles.img} 
	      source={{uri : 'https://www.w3schools.com/images/w3schools_green.jpg'}}
	    />  
	    <ScrollView>
		    <ListView 
		    	dataSource = {props.dataSource}
	        renderRow = {
	        	(data) => (
	        	  <Text style={styles.listItem}>
	        	    {data.name}
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
	  paddingTop:20,
	  marginTop: 20,
    height: 500,
	},
	listItem: {
	  fontSize: 20,
	  fontWeight: 'bold',
	  color : 'darkolivegreen',
	},
	img : {
		height : 200,
		width : 250
	}
})
