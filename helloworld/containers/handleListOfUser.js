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
	        	  <Text style={styles.card}>
								<Text style={styles.bigblue}>{data.FirstName}</Text>,
								<Text style={styles.bigblue}>{data.LastName}</Text>  
								<Text style={styles.red}>{data.EmailID}</Text>
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
	card: {
	  backgroundColor: 'white',
	  width: (200 / 2) - 50,
	  height: 300,
	  marginLeft: 10,
	  marginTop: 10
	},
	img : {
		height : 200,
		width : 250
	},
	bigblue: {
    color: 'blue',
    fontWeight: 'bold',
  },
  red: {
    color: 'green',
  },
})
