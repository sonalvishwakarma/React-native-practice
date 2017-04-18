import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './home.js';
import Login from './login.js';
import SignUp from './signUp.js';
import DashboardComp from './dashboardComp.js';
import Dashboard from './dashboard.js';
import Profile from './profile.js';
import ListViewC from '../components/./listView.js';
import MapViewC from '../components/./mapView.js';
import ViewPagerAndroidExample from '../components/./viewPager.js';
import Section from '../components/./sectionList.js';
import ToolBarA from '../components/./toolBar.js';
import InterNetInfo from '../components/./netInfo.js';
import GeoLocationInfo from '../components/./geoLocation.js';
import CameraRollExample from '../components/./cameraRoll.js';
import CameraRollPic from '../components/./camera.js';

class App extends Component {
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial/>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signUp" component={SignUp} title="SignUp" />
          <Scene key="dashboardComp" component={DashboardComp} title="Components" />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          <Scene key="profile" component={Profile} title="Profile" />
          <Scene key="listView" component={ListViewC} title="List View" />
          <Scene key="mapView" component={MapViewC} title="Map View" />
          <Scene key="pager" component={ViewPagerAndroidExample} title="View Pager" />
          <Scene key="section" component={Section} title="Section List" />
          <Scene key="toolbar" component={ToolBarA} title="ToolBar"/>
          <Scene key="netInfo" component={InterNetInfo} title="Net Info"/>
          <Scene key="geolocation" component={GeoLocationInfo} title="Geo Location"/>
          <Scene key="camera" component={CameraRollExample} title="Camera Roll"/>
          <Scene key="camera1" component={CameraRollPic} title="Camera Roll 1"/>
        </Scene>
      </Router>
    );
  }
}

export default App;
