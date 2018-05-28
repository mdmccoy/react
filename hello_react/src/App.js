import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <TemperatureContainer />
      </div>
    );
  }
}

export default App;
