import React from 'react';
import logo from './logo.svg';
import './App.css';
import Random from "./components/Random/Random";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Color Picker</h1>
        <Random />
      </div>
    );
  }
}

export default App;
