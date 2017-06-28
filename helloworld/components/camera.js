import React, { Component } from 'react';
import {View,TouchableHighlight,Image,Text} from 'react-native';
import Camera from 'react-native-camera';
import styles from '../css/./style.js';

export default class CameraRollPic extends Component {

  constructor(props){
    super(props)
    this.state = {
      imagePath: null
    }
  }

  takePicture() {
    this.camera.capture()
    .then((data) => {
      this.setState({ imagePath: data.path })
    })
    .catch(err => alert(err));
  }

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.disk}>
      <TouchableHighlight
        style={styles.capture}
        onPress={this.takePicture.bind(this)}
        underlayColor="rgba(255, 255, 255, 0.5)"
      >
      <View />
      </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (
      <View>
        <Image
          source={{ uri: this.state.imagePath }}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ imagePath: null })}>
          Cancel
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cameraContainer}>
        {this.state.imagePath ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}
