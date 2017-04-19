import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TouchableHighlight,Image,CameraRoll} from 'react-native';
import CameraRollView from './CameraRollView01.js';
import AssetScaledImageExampleView from './AssetScaledImageExample01.js';

export default class CameraRollExample extends Component {

  constructor(props){
    super(props);

    this.state = {
      groupTypes : 'SavedPhotos'
    };
  }

  loadAsset = (asset) => {
    if (this.props.navigator) {
      this.props.navigator.push({
        title: 'Camera Roll Image',
        component: AssetScaledImageExampleView,
        backButtonTitle: 'Back',
        passProps: { asset: asset },
      });
    }
  };

  _renderImage = (asset) => {
    const imageStyle = [styles.image, {width: imageSize, height: imageSize}];
    const {location} = asset.node;
    const locationStr = location ? JSON.stringify(location) : 'Unknown location';
    return (
      <TouchableOpacity key={asset} onPress={ this.loadAsset.bind( this, asset ) }>
        <View style={styles.row}>
          <Image
            source={asset.node.image}
            style={imageStyle}
          />
          <View style={styles.info}>
            <Text style={styles.url}>{asset.node.image.uri}</Text>
            <Text>{locationStr}</Text>
            <Text>{asset.node.group_name}</Text>
            <Text>{new Date(asset.node.timestamp).toString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _cameraRollView : ? CameraRollView;

  render() {
    return (
      <View style={styles.container}>
        <Text>Camera Roll Example</Text>
        <Text>{this.state.groupTypes}</Text>  
        <CameraRollView
          ref={(ref) => { this._cameraRollView = ref; }}
          batchsize = {20}
          groupTypes = {this.state.groupTypes}
          renderImage={this._renderImage}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:30,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginTop : 30,
    paddingTop: 30,
  },
  url: {
    fontSize: 9,
    marginBottom: 14,
  },
  image: {
    margin: 4,
  },
  info: {
    flex: 1,
  },
});