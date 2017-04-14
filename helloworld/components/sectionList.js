import React, { Component } from 'react';
import {StyleSheet, Animated,SectionList,Text,View,} from 'react-native';

class Section extends Component {

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  button : {
    borderWidth: 1,
    borderColor: 'transparent'
  }
});

export default Section;
