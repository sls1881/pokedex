import React, { Component } from 'react'
import SearchBar from '../Search/SearchBar.js'
import PokeList from '../Search/PokeList.js'
import Dropdown from '../Search/Dropdown.js'
// import pokes from '../Common/Data.js'

export default class SearchPage extends Component {
    //Declare state
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: 'character',
        query: ''
    }

    //clickHandler
    clickHandler = (e) => {
        //setState
        this.setState({
            sortOrder: e.target.value
        })
    }

    //clickHandler
    clickHandler = (e) => {
        //setState
        this.setState({
            sortBy: e.target.value
        })
    }

    //clickHandler
    handleClick = (e) => {
        //setState
        this.setState({
            query: e.target.value
        })
    }

    render() {
        //filter based on character name
        const filterPoke = this.state.pokemon.filter(poke => poke.poke.includes(this.state.query))

        //Sort based on asc and desc
        this.state.pokemon.sort((a, b) => a.character.localeCompare(b.character)) || this.state.pokemon.sort((a, b) => b.character.localeCompare(a.character))


        return (
            <div>
                <aside className='searchBar'>
                    Search Character:
                    <SearchBar currentValue={this.state.query} />
                    <Dropdown currentValue={this.state.sortOrder}
                        handleClick={this.handleClick}
                        option={[asc / desc]}
                    />
                    <Dropdown currentValue={this.state.sortBy}
                        handleClick={this.handleClick}
                        option={[character]} />
                </aside>
                <main className='pokeDisplay'>
                    <PokeList pokes={filterPoke} />
                </main>
            </div>
        )
    }
}
