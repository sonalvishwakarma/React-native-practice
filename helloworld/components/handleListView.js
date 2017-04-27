import React, { Component } from 'react';
import {View,ListView,ScrollView,WebView,Text} from 'react-native';
import styles from '../css/./style.js';

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
