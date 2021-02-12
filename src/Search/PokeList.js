import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        return (
            <ul className='pokeImages'>
                {this.props.pokes.map(poke => <PokeItem key={poke.id} listPoke={poke}
                />)
                }
            </ul>
        )
    }
}
