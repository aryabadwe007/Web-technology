
// 3) write class Component 
//     with render method display 
// 	1 textField and 2 Buttons
// 			upper case , small case 
// 	when you click the button display output 
// 	in console in UPPERCASE / lowercase 
//     (use event handling )


import React, { Component } from 'react';

class TextFieldWithButtons extends Component {
  // Initialize state with an empty text value
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  // Handle text input change
  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  }

  // Handle first button click
  handleButton1Click = () => {
    alert(`Button 1 clicked! Text: ${this.state.text}`);
  }

  // Handle second button click
  handleButton2Click = () => {
    alert(`Button 2 clicked! Text: ${this.state.text}`);
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          placeholder="Enter some text"
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={this.handleButton1Click} style={{ padding: '10px 20px' }}>
            Button 1
          </button>
          <button onClick={this.handleButton2Click} style={{ padding: '10px 20px' }}>
            Button 2
          </button>
        </div>
      </div>
    );
  }
}

// Usage example: import and render in your main app file
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TextFieldWithButtons from './TextFieldWithButtons';
// ReactDOM.render(<TextFieldWithButtons />, document.getElementById('root'));

export default TextFieldWithButtons;