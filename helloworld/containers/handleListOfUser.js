import React, { Component } from 'react';
import {View,ListView,ScrollView,TouchableHighlight,Text} from 'react-native';
import styles from '../css/./style.js';

export default HandleListOfUser  = (props) => {
	return (
	  <View style={styles.userListContainer}>
	    <ScrollView>
		    <ListView 
		    	dataSource = {props.dataSource}
	        enableEmptySections={true}
	        renderRow = {
	        	(data) => (
	        	  <View style={styles.userCard}>
								<Text style={styles.bigblue}>Name : -{data.FirstName} {data.LastName}</Text>  
								<Text style={styles.red}>Email : - {data.EmailID}</Text>
			        	  <TouchableHighlight style={styles.button} underlayColor='midnightblue' 
			        	     onPress= {() => props.removeUser(data)}>
					          <Text style={styles.listText}>
					            delete
					          </Text>
					        </TouchableHighlight>  
			        </View>    
	        	)
	 	      } 
	    	/>
	    </ScrollView>	
	  </View>     
	)
}

