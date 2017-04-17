import React, { Component } from 'react';
import {StyleSheet,View,ListView,ScrollView,WebView,Text} from 'react-native';

export default HandleListView  = (props) => {
	return (
	  <View style={styles.listContainer}>
	    <WebView style={styles.img} source={{uri : 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'}}
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
	  paddingTop:50,
	  marginTop: 50,
    height: 500,
	},
	listItem: {
	  fontSize: 30,
	  fontWeight: 'bold',
	  textAlign: 'center',
	},
	img : {
		height : 200,
		width : 250
	}
})
