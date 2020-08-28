import React, { Component } from 'react';
import './Pokemon.css';
import Pokedex from './Pokedex';

class Pokemon extends Component {
    
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.state = {
            name: this.props.name,
            url: this.props.url,
            pokeInfo: '',
            showPokedex: false
        };

        // console.log(this.state)
    }

    componentDidMount = () => {
        // console.log("FIRED! componentDidMount for "+this.state.name)

        let url = this.state.url

        fetch(url)
        .then(response => response.json())
        .then((pokeData) => {
            let pokeInfo = this.state.pokeInfo
            pokeInfo = pokeData
            this.setState({pokeInfo})
        })
    }    

    handlePokedex = () => {
        console.log("FIRED! handlePokedex for "+this.state.pokeInfo.name)
        console.log(this.state.pokeInfo, this.state.showPokedex)
        // console.log(this.state.pokeInfo.sprites.other.official-artwork.front_default)
        if (!this.state.showPokedex) {
            let bool = true
            this.setState({showPokedex: bool})
        }
        else {
            let bool = false
            this.setState({showPokedex: bool})
        }
    }

    render = () => {
        let pokedex
        let show = this.state.showPokedex

        if (show) {
            pokedex = 
                <div className="pokedex">
                    <h1>{this.state.pokeInfo.name}</h1>
                </div>
        }
        else {
            pokedex = ''
        }

        return(
            <div className="pokeContainerDoNotTouch" onClick={this.handlePokedex}>
 
                <div className="container">
                    <h3>{this.props.name}</h3>
                    <a href="{this.props.url}">{this.props.name}</a>
                </div>

                <div className="pokedex" style={{display:'none', color:'white', background:'black'}} >
                    <p>Pokedex Placeholder Text</p>   
                </div>

                <div className="pokedexContainer">
                    {pokedex}
                </div>

            </div>
        )
    }
}

export default Pokemon;