import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './home.js';
import Login from './login.js';
import SignUp from './signUp.js';
import Dashboard from './dashboard.js';
import ListViewC from './listView.js';
import MapViewC from './mapView.js';

class App extends Component {
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial/>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signUp" component={SignUp} title="SignUp" />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          <Scene key="listView" component={ListViewC} title="List View" />
          <Scene key="mapView" component={MapViewC} title="Map View" />
        </Scene>
      </Router>
    );
  }
}

export default App;
