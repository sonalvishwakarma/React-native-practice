import React, { Component } from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../css/./style.js';

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
  	this.loadInterval = setInterval(
      () => {
      this.setState({animating: false});
    }, 5000);
  }

  componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

	render (){
		return (
			<View style={styles.horizontal}>
			  <ActivityIndicator animating = {this.state.animating}
          color="#0000ff"
        />
			</View>
		)
	}
}

