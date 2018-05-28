import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer.js'
import {Provider} from 'react-redux';
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TemperatureContainer />
      </Provider>
    );
  }}

export default App;

