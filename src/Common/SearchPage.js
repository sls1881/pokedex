import React, { Component } from 'react'
import request from 'superagent'
import '../App.css';
import Spinner from './Spinner.js'


export default class SearchPage extends Component {
    //Declare state
    state = {
        pokemon: [],
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

        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}`);

        this.setState({
            loading: false,
            pokemon: pokeData.body.results
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

    render() {

        return (
            <div className='display-container' >
                <aside>
                    <label>
                        Search
                    <input onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleClick}>Search</button>

                </aside>
                <main>
                    <div>
                        {this.state.loading ? <Spinner /> :
                            this.state.pokemon.map(poke =>
                                <div key={poke.pokemon}>
                                    <img alt='pokemon' src={poke.url_image} />
                                    <div>
                                        Name: {poke.pokemon}
                                    </div>
                                    <div>Attacks:{poke.attack}</div>
                                    <div>Defense: {poke.defense}</div>
                                </div>)}
                    </div>
                </main>
            </div >
        )
    }
}