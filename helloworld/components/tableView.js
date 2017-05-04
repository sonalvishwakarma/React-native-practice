import React, { Component } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Table from 'react-native-simple-table';

var array = [
  { name : "Sonia", mobile : 9865324152, gender : "F" , age : 25},
  { name : "Rahul" , mobile : 9006398842 , gender : "M", age : 27},
  { name : "Atul" , mobile : 810526152 , gender : "M", age : 23},
  { name : "Amman" , mobile : 8852697524 , gender : "F", age : 28},
  { name : "Sonya" , mobile : 7458962142 , gender : "F", age : 30}
]

const columns = [

  {
    title: 'Name',
    dataIndex: 'name',
    width: 120
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    width: 115
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Gender',
    dataIndex: 'gender'
  },
];

export default class SimpleTableView extends Component {

	constructor(props){
		super(props);

		this.state = {
		 	dataSource: array                                                                                                                              
		};
	}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>react-native-simple-table</Text>
        <Table height={320} columnWidth={60} columns={columns} dataSource={this.state.dataSource} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});

