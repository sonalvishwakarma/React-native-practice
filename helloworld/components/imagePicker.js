import React, {Component} from 'react';
import { Text,View,TouchableOpacity,Image,ToastAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from '../css/./style.js';

export default class RNImagePicker extends Component {

  constructor(props){
    super(props)
    this.state= {
      avatarSource: null,
      videoSource: null
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        ToastAndroid.showWithGravity('Canceled photo picker', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }
      else if (response.error) {
        alert('ImagePicker Error: ', response.error);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium'
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        ToastAndroid.showWithGravity('Canceled video picker', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }
      else if (response.error) {
        alert('ImagePicker Error: ', response.error);
      }
      else {
        this.setState({
          videoSource: response.uri
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.imageContainer}>
      
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>

          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        { this.state.videoSource &&
          <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
        }

      </View>
    );
  }
}