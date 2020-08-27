/*$$$$$$$           /$$                /$$ /$$$$$$$                                  /$$    
| $$__  $$         | $$               | $/| $$__  $$                                | $$    
| $$  \ $$ /$$$$$$ | $$   /$$  /$$$$$$|_/ | $$  \ $$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$  
| $$$$$$$//$$__  $$| $$  /$$/ /$$__  $$   | $$$$$$$/ /$$__  $$ |____  $$ /$$_____/|_  $$_/  
| $$____/| $$  \ $$| $$$$$$/ | $$$$$$$$   | $$__  $$| $$$$$$$$  /$$$$$$$| $$        | $$    
| $$     | $$  | $$| $$_  $$ | $$_____/   | $$  \ $$| $$_____/ /$$__  $$| $$        | $$ /$$
| $$     |  $$$$$$/| $$ \  $$|  $$$$$$$   | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$  |  $$$$/
|__/      \______/ |__/  \__/ \_______/   |__/  |__/ \_______/ \_______/ \_______/   \___*/
                                                                                            
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  pokeQuantity = 151
  pokeGeneration = 1
  pokeList = []

  fetchPokeList () {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(function(allpokemon){
      allpokemon.results.forEach(function(pokemon){
        let url = pokemon.url
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData) {
          this.pokeList.push(pokeData)
          console.log(pokeData)
        })
      })
    })
    console.log(this.pokeList)
  }

  fetchPokemon (pokemon) {
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData) {
      console.log(pokeData)
    })
  }

  render () {

    this.fetchPokeList();

    return (
      <div className="appContainerDoNotTouch">
        <div>
          <h1>PokeReact</h1>
        </div>
      </div> // END DIV CLASS "appContainerDoNotTouch".
    )
  }
}

export default App;
