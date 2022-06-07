import './App.css';
import { Router } from './app/Router';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props app', props);
  }
  render() {
    return (
      <div className="App">

        <Router />

      </div>
    );
  }
}


export default App;
