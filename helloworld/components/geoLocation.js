import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from '../css/./style.js';

export default class GeoLocationInfo extends Component {

  watchID: ?number = null;

  constructor(props){
  super(props);
    this.state = {
      initialPosition : 'unknown',
      lastPosition : 'unknown'
    }
  }

  componentDidMount =() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 0}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style= {styles.geoContainer}>
        <Text > Location Info </Text>
        <Text>
          <Text >Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text >Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
} 

