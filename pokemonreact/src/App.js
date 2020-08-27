import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    const pokeSpecies = 151;
    const pokeGeneration = 1;

  }

  render () {
    return (
      <div class="appContainerDoNotTouch">
        <div>
          <h1>PokeReact</h1>
        </div>
      </div> // END DIV CLASS "appContainerDoNotTouch".
    )
  }
}

export default App;
