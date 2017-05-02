import React, { Component } from 'react';
import {View, ProgressBarAndroid} from 'react-native';
import styles from '../css/./style.js';

export default class MovingBar extends Component{ 

  constructor(props){
    super(props);
    this.state = {
      progress: 0.01
    };
  }

  componentDidMount = () => {
    this.loadInterval = setInterval(() => {
        var progressC = (this.state.progress + 0.01) % 1 ;
        this.setState({progress: progressC})
      },100
    );
  }
  
  componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  render () {
    return (
      <View style={styles.width300}>
        <ProgressBarAndroid progress={this.state.progress} {...this.props} />
      </View>  
    )
  }
};
