import React, { Component } from 'react';
import {Text, View, NetInfo} from 'react-native';
import styles from '../css/./style.js';

export default class InterNetInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      isConnected: []
    }
  }

  componentDidMount(){
    NetInfo.isConnected.addEventListener(
      'change',
      this.handleConnectionInfoChange
    )
    NetInfo.fetch().done( (isConnected) => {
      this.setState({isConnected}); 
      }
    );
  }

  componentWillUnmount(){
    NetInfo.removeEventListener(
      'change',
      this.handleConnectionInfoChange
    )
  }

  handleConnectionInfoChange = (isConnected) => {
    this.setState({isConnected})
  }

  render(){
    return (
      <View style={styles.netContainer}>
        <Text>Net Information</Text>
        <Text>Net Status -  {(this.state.isConnected )? 'online' : 'offline'}</Text>
        <Text>Connectivity type - {this.state.isConnected}</Text>
      </View>
    );
  }
} 
 
