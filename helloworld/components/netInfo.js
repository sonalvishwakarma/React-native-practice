import React, { Component } from 'react';
import {Text, View, StyleSheet, NetInfo} from 'react-native';

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
        console.log('Online with', isConnected) 
      }
    );
  }

  componentWillUnmount(){
    NetInfo.removeEventListener(
      'change',
      this.handleConnectionInfoChange
    )
    console.log("Offline")
  }

  handleConnectionInfoChange = (isConnected) => {
    console.log(isConnected,'isConnected')
    this.setState({isConnected})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Net Information</Text>
        <Text>Net Status -  {(this.state.isConnected )? 'online' : 'offline'}</Text>
        <Text>Connectivity type -  {this.state.isConnected}</Text>
      </View>
    );
  }
} 

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:30,
    marginTop: 30,
  }
}); 
