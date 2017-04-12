import React, { Component } from 'react';
import {StyleSheet,Text,View, Slider} from 'react-native';

export default class SimpleSlider extends Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    marginTop : 10
  },
});
