import React, { Component } from 'react';
import {View, Text} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import styles from '../css/./style.js';

export default class TabView extends Component {

	render() {
    return <ScrollableTabView
      style={{marginTop: 50, }}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='Profile' >Profile</Text>
      <Text tabLabel='Display'>Display</Text>
      <Text tabLabel='Settings'>Settings</Text>
    </ScrollableTabView>;
  }
}