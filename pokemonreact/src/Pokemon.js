import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
    
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
            <div className="pokeContainerDoNotTouch">

            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.url}</p>
                <div className="container">

                </div>
            </div>

            </div>
        )
    }
}

export default Pokemon;