import React, { Component } from 'react';
import { Image,Text,View,ViewPagerAndroid,Button} from 'react-native';
import styles from '../css/./style.js';

var PAGES = 5;
var Images = [
  'https://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
  'https://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
  'https://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
  'https://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
  'https://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

export default class ViewPagerAndroidExample extends Component {
  
  constructor(props){
  super(props);
    this.state = {
      page: 0,
      animationsAreEnabled: true,
      scrollEnabled: true,
      progress: {
        position: 0,
      }
    };  
  }

  move = (delta) => {
    var page = this.state.page + delta;
    this.go(page);
  };

  go = (page) => {
    if (this.state.animationsAreEnabled) {
      this.viewPager.setPage(page);
    } else {
      this.viewPager.setPageWithoutAnimation(page);
    }
    this.setState({page});
  };

  render() {
    var pages = [];
    for (var i = 0; i < PAGES; i++) {
      var pageStyle = {
        alignItems: 'center',
        padding: 20,
      };
      pages.push(
        <View key={i} style={pageStyle} collapsable={false}>
          <Image
            style={styles.image}
            source={{uri: Images[i]}}
          />
        </View>
      );
    }
    var { page, animationsAreEnabled } = this.state;
    return (
      <View style={styles.container}>
      
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled={this.state.scrollEnabled}
          pageMargin={10}
          ref={viewPager => { this.viewPager = viewPager; }}>
          {pages}
        </ViewPagerAndroid>

        <View style={styles.buttons}>
          <Button title="Start" enabled={page > 0} onPress={() => this.go(0)}/>
          <Button title="Prev" enabled={page > 0} onPress={() => this.move(-1)}/>
          <Text style={styles.buttonText}>Page {page + 1} / {PAGES}</Text>
          <Button title="Next" enabled={page < PAGES - 1} onPress={() => this.move(1)}/>
          <Button title="Last" enabled={page < PAGES - 1} onPress={() => this.go(PAGES - 1)}/>
        </View>
      </View>
    );
  }
}
