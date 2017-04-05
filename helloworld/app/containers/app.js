
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { Router, Scene } from 'react-native-router-flux';
import mainApp from '../components/mainApp.js';
import login from '../reducers/login.js';
import signUp from '../reducers/signUp.js';
import Dashboard from '../components/dashboard.js';
import Asyncstorage from '../components/AsyncStorage.js';

class App extends Component {
  render() {
    return (
      <Provider >
        <Router>
          <Scene key="root">
            <Scene key="mainApp" component={mainApp} title="Home" initial/>
            <Scene key="login" component={login} title="Login" />
            <Scene key="signUp" component={signUp} title="SignUp" />
            <Scene key="Dashboard" component={Dashboard} title="Dashboard" />
            <Scene key="Asyncstorage" component={Asyncstorage} title="AsyncStoragee" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
