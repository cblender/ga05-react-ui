
import React, { Component } from 'react';
import './Pokedex.css';

class Pokedex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pokeInfo: this.props.pokeInfo
        };
    }

    render() {

        return(
            <div className="dexContainerDoNotTouch">
 
                <div className="container">
                    <h3>POKEDEX CONTAINER</h3>
                </div>
                <button>EXIT POKEDEX</button>

            </div>
        )
    }
}

export default Pokedex;