import React, { Component } from 'react';
import { Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,Button} from 'react-native';

//import type { ViewPagerScrollState } from 'ViewPagerAndroid';

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

  // onPageSelected = (e) => {
  //  this.setState({page: e.nativeEvent.position});
  //};

  //onPageScroll = (e) => {
  // this.setState({progress: e.nativeEvent});
  //};

  //onPageScrollStateChanged = (state : ViewPagerScrollState) => {
  //  this.setState({scrollState: state});
  //};

  // onPageScroll={this.onPageScroll} /onPageSelected={this.onPageSelected}/ onPageScrollStateChanged={this.onPageScrollStateChanged}

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

var styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    width: 0,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 200,
    padding: 20,
  },
  viewPager: {
    flex: 1,
  },
});