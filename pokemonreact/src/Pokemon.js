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
        
        // THE GREAT POKEMON INFORMATION TRAWLER
        let type1 = this.state.pokeInfo.types
        let imgsrc = this.state.pokeInfo.sprites.other.dream_world.front_default
        let statXP = this.state.pokeInfo.base_experience
        let statHP = this.state.pokeInfo.stats[0].base_stat
        let statATK = this.state.pokeInfo.stats[1].base_stat
        let statDEF = this.state.pokeInfo.stats[2].base_stat
        let statSPD = this.state.pokeInfo.stats[5].base_stat
        let statWeight = this.state.pokeInfo.weight

        this.setState({img: imgsrc})
        this.setState({XP: statXP})
        this.setState({HP: statHP})
        this.setState({ATK: statATK})
        this.setState({DEF: statDEF})
        this.setState({SPD: statSPD})
        this.setState({WEI: statWeight})

    }

    render = () => {
        let pokedex
        let show = this.state.showPokedex

        if (show) {
            pokedex = 
                <div className="pokedex">
                    <h1>{this.state.pokeInfo.name}</h1>
                    <img src={this.state.img}></img>
                    <h3>{this.state.pokeInfo.types[0].type.name}</h3>
                    <div>
                        <h4>    Base XP: {this.state.XP} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                HP: {this.state.HP} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Atack: {this.state.ATK} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Defense: {this.state.DEF} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Speed: {this.state.SPD} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Weight: {this.state.WEI}</h4>
                    </div>
                </div>
                
        }
        else {
            pokedex = <div style={{display:'none'}}></div>
        }

        return(
            <div className="pokeContainerDoNotTouch" onClick={this.handlePokedex}>
 
                <div className="container">
                    <h3>{this.props.name}</h3>
                    <a href="{this.props.url}">{this.props.name}</a>
                </div>

                <div className="pokedexContainer">
                    {pokedex}
                </div>

            </div>
        )
    }
}

export default Pokemon;