import React, { Component } from 'react';
import {StyleSheet, View, ProgressBarAndroid} from 'react-native';

export default class MovingBar extends Component{ 

  constructor(props){
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount = () => {
    setInterval(
      () => {
        var progressC = (this.state.progress + 0.01) % 1;
        this.setState({progress: progressC})
      },100
    );
  }

  render () {
    return (
      <View style={styles.widthc}>
        <ProgressBarAndroid progress={this.state.progress} {...this.props} />
      </View>  
    )
  }
};

const styles = StyleSheet.create({
  widthc : {
    width : 300
  }
})

