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
        currentPage: 1,
        totalPokemon: 0,
    }

    //Fetch the data on load to display pokemon
    componentDidMount = async () => {
        await this.fetchPokemon();

    }

    fetchPokemon = async () => {

        this.setState({ loading: true });

        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=100`);

        this.setState({
            loading: false,
            pokemonData: pokeData.body.results,
            totalPokemon: pokeData.body.count
        });
    }

    //click handler for sort and search
    handleClick = async () => {
        await this.setState({ currentPage: 1 });

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

    //Click handler for next button
    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        })
        await this.fetchPokemon();
        console.log('I work');
    }

    //Click handler for previous button
    handlePrevClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        })
        await this.fetchPokemon();
    }

    render() {
        const {
            pokemonData,
            loading,
        } = this.state;

        const lastPage = Math.ceil(this.state.totalPokemon / 100);

        return (
            <div className='display-container' >
                <aside className='search-display'>
                    <Sort currentValue={this.state.sortOrder}
                        handleChange={this.handleSortOrderChange}
                        options={[{ value: 'Ascend', name: 'Ascend' }, { value: 'Descend', name: 'Descend' }]}
                    />
                    <Sort currentValue={this.state.sortBy}
                        handleChange={this.handleSortByChange}
                        options={[{ value: 'pokemon', name: 'Pokemon' }, { value: 'attack', name: 'Attack' }, { value: 'type_1', name: 'Type' }, { value: 'defense', name: 'Defense' }]} />

                        Search Character:
                    <SearchBar currentValue={this.state.filter}
                        handleClick={this.handleClick}
                        handleChange={this.handleChange} />
                </aside>
                <main className='all-poke'>
                    {loading
                        ? <Spinner />
                        : <PokeList pokemonData={pokemonData} />
                    }
                </main>
                <section className='pag'>
                    <button onClick={this.handlePrevClick} disabled={this.state.currentPage === 1}>Previous Page</button>
                    <span className='page-num'> Page {this.state.currentPage} </span>
                    <button onClick={this.handleNextClick} disabled={this.state.currentPage === lastPage}>Next Page</button>
                </section>
            </div >
        )
    }
}