import React, { Component } from 'react'

//Import data through Item
import PokeItem from './PokeItem.js'

//Step 4: Map through the data and render it based on the PokeItem return
export default class PokeList extends Component {
    render() {
        return (
            <ul className='pokeImages'>
                {/* In this component, map through the array of plural and return a single into the HTML elements from the Item component */}
                {this.props.pokes.map(pokemon => <PokeItem key={pokemon._id}
                    pokeProp={pokemon}
                />)}
            </ul>
        )
    }
}
