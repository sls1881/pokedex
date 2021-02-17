import React, { Component } from 'react'
import request from 'superagent'
import '../App.css';
import Spinner from './Spinner.js'
import Sort from '../Search/Sort.js'
import SearchBar from '../Search/SearchBar.js'
import PokeList from '../Search/PokeList.js'


export default class SearchPage extends Component {
    //Declare state
    state = {
        pokemonData: [],
        sortOrder: '',
        sortBy: '',
        filter: '',
        loading: false,
    }

    //Fetch the data on load to display pokemon
    componentDidMount = async () => {
        await this.fetchPokemon();

    }

    fetchPokemon = async () => {

        this.setState({ loading: true });

        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`);

        this.setState({
            loading: false,
            pokemonData: pokeData.body.results
        });
    }

    //click handler
    handleClick = async () => {
        await this.fetchPokemon();
    }

    //Change handler
    handleChange = (e) => {
        //setState
        this.setState({
            filter: e.target.value
        })
    }

    handleSortOrderChange = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }

    handleSortByChange = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }

    render() {
        const {
            pokemonData,
            loading,
        } = this.state;

        return (
            <div className='display-container' >
                <aside>
                    Search Character:
                    <SearchBar currentValue={this.state.filter}
                        handleClick={this.handleClick}
                        handleChange={this.handleChange} />
                    <Sort currentValue={this.state.sortOrder}
                        handleChange={this.handleSortOrderChange}
                        options={[{ value: 'Ascend', name: 'Ascend' }, { value: 'Descend', name: 'Descend' }]}
                    />
                    <Sort currentValue={this.state.sortBy}
                        handleChange={this.handleSortByChange}
                        options={[{ value: 'pokemon', name: 'Pokemon' }, { value: 'attack', name: 'Attack' }, { value: 'type_1', name: 'Type' }, { value: 'defense', name: 'Defense' }]} />

                </aside>
                <main>
                    {loading
                        ? <Spinner />
                        : <PokeList pokemonData={pokemonData} />
                    }
                </main>
            </div >
        )
    }
}