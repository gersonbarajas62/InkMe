import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
var moment = require('moment');

class ReactCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
   }
   this.handleChange = this.handleChange.bind(this)
  }
  handleChange= date => this.setState({ date })

  render() {
    return (
      <div>
       <DatePicker 
        placeholderText="Click to select a date" 
        onChange={this.handleChange}
        selected={this.state.date}
        includeDates={[new Date(2019, 4, 8), new Date(2019, 4, 9)]}
        dateFormat="MMMM d, yyyy"
        >
        <div style={{color: 'green'}}>
          <center>InkMe.co</center>
        </div>
      </DatePicker>

         
      </div>
    );
  }
}

export default ReactCalendar;


/*
  <Calendar
          
          placeholderText="Choose date for appointment"
        />
        />
*/
