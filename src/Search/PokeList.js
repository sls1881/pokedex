import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render() {
        return (
            <div className='style-poke'>
                {this.props.pokemonData.map(poke => <PokeItem poke={poke} />)}
            </div>
        )
    }
}
