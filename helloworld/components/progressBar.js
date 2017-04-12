{/*import React, { Component } from 'react';
import {StyleSheet, View, ProgressBarAndroid, ProgressBar} from 'react-native';
import {TimerMixin} from 'react-timer-mixin';

export default class MovingBar extends Component{ 
 mixins : [TimerMixin]

  constructor(props){
    super(props);
    this.state = {
      return {
        progress: 0
      }
    };
  }

  componentDidMount = () => {
    this.setInterval(
      () => {
        var progressC = (this.state.progress + 0.02) % 1;
        this.setState({progress: progressC})
      },50
    );
  }

  render () {
    return (
      <ProgressBar progress={this.state.progress} {...this.props} />
    )
  }
};

*/}