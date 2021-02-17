import React, { Component } from 'react'
// import SearchBar from '../Search/SearchBar.js'
// import PokeList from '../Search/PokeList.js'
import request from 'superagent'
// import PokeList from '../Search/PokeList';


export default class SearchPage extends Component {
    //Declare state
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: '',
        filter: ''
    }

    //Fetch the data on load to display pokemon
    componentDidMount = async () => {
        //Declare data API
        const pokeData = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?');

        //Set the state
        this.setState({ pokemon: pokeData.body.results });
    }

    //click handler
    handleClick = async () => {
        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}`);
        //setState
        this.setState({
            pokemon: pokeData.body.results

        });
    }
    //Change handler
    handleChange = async (e) => {
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
                        {this.state.pokemon.map(poke =>
                            <div key={poke.pokemon}>
                                <img alt='pokemon' src={poke.url_image} />
                                {poke.pokemon}
                                {poke.type_1}
                            </div>)}
                    </div>
                </main>
            </div >
        )
    }
}