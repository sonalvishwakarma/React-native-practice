
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import home from './home.js';
import login from './login.js';
import signUp from './signUp.js';
import dashboard from './dashboard.js';

class App extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="home" component={home} title="Home" initial/>
            <Scene key="login" component={login} title="Login" />
            <Scene key="signUp" component={signUp} title="SignUp" />
            <Scene key="dashboard" component={dashboard} title="Dashboard" />
          </Scene>
        </Router>
      );
    }
  }

export default App;
