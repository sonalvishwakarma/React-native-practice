import React, { Component } from 'react';
import {StyleSheet,View,ListView,ScrollView,TouchableHighlight,Text, Button} from 'react-native';

export default HandleListOfUser  = (props) => {
	return (
	  <View style={styles.listContainer}>
	    <ScrollView>
		    <ListView 
		    	dataSource = {props.dataSource}
	        enableEmptySections={true}
	        renderRow = {
	        	(data) => (
	        	  <View style={styles.card}>
								<Text style={styles.bigblue}>Name : -{data.FirstName} {data.LastName}</Text>  
								<Text style={styles.red}>Email : - {data.EmailID}</Text>
			        	  <TouchableHighlight style={styles.button} underlayColor='midnightblue' 
			        	     onPress= {() => props.removeUser(data.UserID)}>
					          <Text style={styles.welcome}>
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

const styles = StyleSheet.create ({
	listContainer: {
	  paddingTop: 20,
	  marginTop: 20,
    height: 500,	
	},
	listItem: {
	  fontSize: 20,
	  textAlign: 'center',
	},
	  welcome: {
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
	card: {
	  backgroundColor: 'burlywood',
	  width: (800 / 2) - 50,
	  height: 100,
	  marginLeft: 10,
	  marginTop: 10,
  	marginBottom: 2
	},
	img : {
		height : 200,
		width : 250
	},
	bigblue: {
    color: 'blue',
  },
  red: {
    color: 'green',
  },
})
