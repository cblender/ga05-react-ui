import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            url: this.props.url,
            pokeInfo: ''
        };
    }

    fetchPokemon = (pokemon) => {
        let url = pokemon.url
        fetch(url)
        .then(response => response.json())
        .then((pokeData) => {
            console.log("FIRED! fetchPokemon for Pokemon Component")
            console.log(pokeData)
        })
    }

    handlePokedex = (url) => {
        console.log("FIRED! HANDLEPOKEDEX FOR "+this.state.name)
    }

    render() {

        return(
            <div className="pokeContainerDoNotTouch" onClick={this.handlePokedex}>
 
                <div className="container">
                    <h3>{this.props.name}</h3>
                    <a href="{this.props.url}">{this.props.name}</a>
                </div>

                <div className="pokedex" style={{display:'none', color:'white', background:'black'}} >
                    <p>Pokedex Placeholder Text</p>
                    
                </div>

            </div>
        )
    }
}

export default Pokemon;