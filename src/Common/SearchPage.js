import React, { Component } from 'react'
// import SearchBar from '../Search/SearchBar.js'
import PokeList from '../Search/PokeList.js'
// import Dropdown from '../Search/Dropdown.js'
// import pokes from './Data.js'
import pokes from '../Common/Data.js'

export default class SearchPage extends Component {
    //     //Declare state
    //     state = {
    //         pokemon: pokes,
    //         sortOrder: 'Ascend',
    //         sortBy: 'pokemon',
    //         query: ''
    //     }

    //     //clickHandler
    //     clickHandler = (e) => {
    //         //setState
    //         this.setState({
    //             sortOrder: e.target.value
    //         })
    //     }

    //     //clickHandler
    //     clickHandler = (e) => {
    //         //setState
    //         this.setState({
    //             sortBy: e.target.value
    //         })
    //     }

    //     //clickHandler
    //     handleChange = (e) => {
    //         //setState
    //         this.setState({
    //             query: e.target.value
    //         })
    //     }

    render() {

        //         //Sort based on asc and desc, if statement
        //         if (this.state.sortOrder === 'Ascend') {
        //             this.state.pokemon.sort((a, b) => a.pokemon.localeCompare(b.pokemon))

        //         } else { this.state.pokemon.sort((a, b) => b.pokemon.localeCompare(a.pokemon)) };

        //         //filter based on character name
        // const filterPoke = this.state.pokemon.filter(poke => poke.poke.includes(this.state.query))

        return (
            <div>
                {/* / <aside className='searchBar'>
                    Search Character:
                    <SearchBar currentValue={this.state.query}
                        handleChange={this.handleChange} />
                    <Dropdown currentValue={this.state.sortOrder}
                        handleClick={this.handleClick}
                        options={['Ascend', 'Descend']}
                    /> */}
                {/* Displays category together based on options below*/}
                {/* <Dropdown currentValue={this.state.sortBy}
                        handleClick={this.handleClick}
                        options={['pokemon', 'attack', 'type_1', 'defense']} />
                </aside> */}
                <main className='pokeDisplay'>
                    <PokeList pokes={pokes} />
                </main>
            </div>
        )
    }
}
