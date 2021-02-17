import React, { Component } from 'react'

//Import data through Item
import PokeItem from './PokeItem.js'

//Step 4: Map through the data and render it based on the PokeItem return
export default class PokeList extends Component {
    render() {
        return (
            <ul className='pokeImages'>
                {this.props.pokemon.map(pokemon => <PokeItem key={pokemon._id}
                    pokeProp={pokemon}
                />)}
            </ul>
        )
    }
}
