import React, { Component } from 'react';
import { ProgressBarAndroid ,Button, View} from 'react-native';

export default class ProgressBarB extends Component {

  constructor(props){
    super(props)    
    this.state = {
      start: props.start || 0,
      distance: props.distance,
    };
  }

  //componentDidMount(){
  //   setTimeout(()=>{
  //     this.updateProgress()
  //   }, 10)
  // }

  updateProgress = () => {
    var start = this.state.start + 0.125
    this.setState({ start });
    if(start < this.state.distance){
      requestAnimationFrame(() => this.updateProgress());
    }    
  }

  componentWillUnmount(){
    clearTimeout(this.updateProgress)
  }

  render () {
    return (
      <View>
        <Button title="click" onPress={this.updateProgress}/>
        <ProgressBarAndroid 
          indeterminate={false} 
          styleAttr="Horizontal"
          color="firebrick"
          progress={this.state.start}
          style={{height: 10, width: 250}} 
        />
      </View>      
    )
  }
} 
