import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextOutput from './TextOutput.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
  }
  
  inputHandler(e) {
    this.setState({
      input: e.target.value, 
    });
  }
  
  render() {
    return <div id="frame">
      <textarea onChange={this.inputHandler.bind(this)} id="text-input"></textarea>
      <div id="white-space"></div>
      <TextOutput input={this.state.input}/>
      </div>
  } 
}

export default App;
