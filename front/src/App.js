import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './component/MainComponent.jsx';
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent/>
      </div>
    );
  }
}

export default App;
