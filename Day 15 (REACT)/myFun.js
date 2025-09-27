// Create Function Component  with parameters
//      	 a) Factorial ==  pass number as parameter 
//                   b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 

import React, { Component } from 'react';

class UPPERCASETEXTCOMPONENT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  // Handle input change and convert text to uppercase
  handleInputChange = (event) => {
    this.setState({ text: event.target.value.toUpperCase() });
  }

  // Example button action: show alert with uppercase text
  handleAlert = () => {
    alert(this.state.text.toUpperCase());
  }

  // Example button action: clear text input
  handleClear = () => {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>UPPERCASE TEXT INPUT WITH TWO BUTTONS</h2>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          placeholder="TYPE SOMETHING"
          style={{ padding: '8px', fontSize: '16px', width: '250px' }}
        />
        <div style={{ marginTop: '15px' }}>
          <button
            onClick={this.handleAlert}
            style={{ padding: '10px 20px', marginRight: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            ALERT
          </button>
          <button
            onClick={this.handleClear}
            style={{ padding: '10px 20px', textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            CLEAR
          </button>
        </div>
      </div>
    );
  }
}

export default UPPERCASETEXTCOMPONENT;


// USAGE EXAMPLE
// import React from 'react';
// import ReactDOM from 'react-dom';
// import UPPERCASETEXTCOMPONENT from './UPPERCASETEXTCOMPONENT';

// ReactDOM.render(<UPPERCASETEXTCOMPONENT />, document.getElementById('root'));