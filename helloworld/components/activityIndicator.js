import React, { Component } from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class MyActivityIndicator extends Component {

	constructor(props){
		super(props);

		this.state = {
			animating : true,
		};
	}

	componentDidMount = () => {
     this.closeActivityIndicator();
  }

  closeActivityIndicator = () => {
    setTimeout(() => {
       this.setState({animating: false});
    }, 5000);
  }

	render (){
		return (
			<View style={styles.horizontal}>
			  <ActivityIndicator animating = {this.state.animating}
          size="large"
          color="#0000ff"
        />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})
