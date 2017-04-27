import React, { Component } from 'react';
import {Text,View, Slider} from 'react-native';
import styles from '../css/./style.js';

export default class SimpleSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  static defaultProps = {
    value: 0,
  };

  render() {
    return (
      <View>
        <Text style={styles.sliderText} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

