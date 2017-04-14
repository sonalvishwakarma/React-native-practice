{/*import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import camera from '././camera.js';

export default class cameraRoll extends Component {
  constructor(){
    super()
    this.state = {
      imagePath: ''
    }
  }
  takePicture = () => {
    camera.capture()
    .then((data) => this.setState({imagePath: data.path}))
    .catch(err => console.error(err));
  }
  render() {
    return (
      <camera
        imagePath = {this.state.imagePath}
        takePicture = {this.takePicture}
      />
    );
  }
}*/}