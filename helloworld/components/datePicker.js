import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

export default class MyDatePicker extends Component {

	constructor(props){
		super(props);
		this.state = {
			date : '1990-01-01'
		}
	}
	render (){
		return (
			<DatePicker
		    style={{width: 200}}
		    date={this.state.date}
		    mode="date"
		    placeholder="pick a date"
		    format="YYYY-MM-DD"
		    minDate="2016-05-01"
		    maxDate="2016-06-01"
		    confirmBtnText="Confirm"
		    cancelBtnText="Cancel"
		    customStyles={{
		      dateIcon: {
		        position: 'absolute',
		        left: 20,
		        top: 4,
		        marginLeft: 0
		      },
		      dateInput: {
		      	marginLeft: 36,
		      	left : 30
			    }
		    }}  
		    onDateChange={(date) => {this.setState({date: date})}}
		  />
		)
	}
}
