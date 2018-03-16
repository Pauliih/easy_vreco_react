import React, { Component } from 'react';
import './App.css';
//Components
import Navigator from './components/Navigator/';
import Content from './components/Content/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator></Navigator>
        <Content/>
      </div>
    );
  }
}

export default App;
