// Dependencias
import React, { Component } from 'react';
//Components
import Navigator from './components/Navigator/';
import Content from './components/Content/';
// Assets
import './App.css';


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
