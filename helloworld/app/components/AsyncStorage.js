import React, { Component } from 'react';
import {
   AsyncStorage
} from 'react-native'
import AsyncStorageExample from './AsyncStorageExample.js';

export default class Asyncstorage extends Component {
   constructor() {
      super();
      this.state = {
         'data': ''
      }
   }
   componentDidMount = () => {
      AsyncStorage.getItem('data').then((value) => {
         this.setState({'data': value});
      });
   }
   setData = (value) => {
      AsyncStorage.setItem('data', value);
      this.setState({'data': value});
   }
   render() {
      return (
         <AsyncStorageExample
            data = {this.state.data}
            setData = {this.setData}
         />
      );
   }
}