
import React, { Component } from 'react';
import './Pokedex.css';

class Pokedex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            url: this.props.url
        };
    }

    fetchPokemon (pokemon) {
        let url = pokemon.url
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData) {
          console.log(pokeData)
        })
    }

    render() {

        return(
            <div className="dexContainerDoNotTouch">
 
                <div className="container">
                    <h3>{this.props.name}</h3>
                    <a href="{this.props.url}">{this.props.name}</a>
                </div>
                <button>EXIT POKEDEX</button>

            </div>
        )
    }
}

export default Pokedex;