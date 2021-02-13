import React, { Component } from 'react'
import SearchBar from '../Search/SearchBar.js'
import PokeList from '../Search/PokeList.js'
import Sort from '../Search/Sort.js'
// import pokes from './Data.js'
import pokes from '../Common/Data.js'

export default class SearchPage extends Component {
    //Declare state
    state = {
        pokemon: pokes,
        sortOrder: 'Ascend',
        sortBy: 'pokemon',
        filter: ''
    }

    //clickSortHandler
    handleSortOrderChange = (e) => {
        //setState
        this.setState({
            sortOrder: e.target.value
        })
    }

    //clickHandler
    handleSortByChange = (e) => {
        //setState
        this.setState({
            sortBy: e.target.value
        })
    }

    //clickHandler
    handleFilterChange = (e) => {
        //setState
        this.setState({
            filter: e.target.value
        })
    }

    render() {
        if (this.state.sortBy) {

            if (typeof (pokes[0][this.state.sortBy]) === 'number') {
                if (this.state.sortOrder === 'Ascend') {
                    //Sort based on asc and desc, if statement
                    this.state.pokemon.sort((a, b) => a[this.state.sortBy] - (b[this.state.sortBy]))

                } else { this.state.pokemon.sort((a, b) => b[this.state.sortBy] - (a[this.state.sortBy])) };
            }

            if (this.state.sortBy) {

                if (typeof (pokes[0][this.state.sortBy]) !== 'number') {
                    //Sort based on asc and desc, if statement
                    if (this.state.sortOrder === 'Ascend') {
                        this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))

                    } else { this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])) };
                }
            }


            //filter based on character name
            const filterPoke = pokes.filter(poke => poke.pokemon.includes(this.state.filter))
            console.log(filterPoke);

            return (
                <div className='display-container'>
                    <aside className='search-bar'>
                        Search Character:
                    <SearchBar currentValue={this.state.filter}
                            handleChange={this.handleFilterChange} />
                        <Sort currentValue={this.state.sortOrder}
                            handleChange={this.handleSortOrderChange}
                            options={[{ value: 'ascend', name: 'Ascend' }, { value: 'descend', name: 'Descend' }]}
                        />
                        <Sort currentValue={this.state.sortBy}
                            handleChange={this.handleSortByChange}
                            options={[{ value: 'pokemon', name: 'Pokemon' }, { value: 'attack', name: 'Attack' }, { value: 'type_1', name: 'Type' }, { value: 'defense', name: 'Defense' }]} />
                    </aside>
                    <main className='poke-display'>
                        <PokeList pokes={filterPoke} />
                    </main>
                </div>
            )
        }
    }
}