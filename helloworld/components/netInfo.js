import React, { Component } from 'react';
import {Text, View, StyleSheet, NetInfo} from 'react-native';

export default class InterNetInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      connectionInfo: []
    }
  }

  componentDidMount(){
    NetInfo.isConnected.addEventListener(
      'change',
      this.handleConnectionInfoChange
    )
    NetInfo.fetch().done(
      (connectionInfo) => { this.setState({connectionInfo}); }
    );
  }

  componentWillUnmount(){
    NetInfo.removeEventListener(
      'change',
      this.handleConnectionInfoChange
    )
  }

  handleConnectionInfoChange = (connectionInfo) => {
    console.log(connectionInfo,'connectionInfo')
    this.setState({connectionInfo})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>NETINFO</Text>
        <Text>output {(this.state.connectionInfo )? 'online' : 'offline'}</Text>
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
