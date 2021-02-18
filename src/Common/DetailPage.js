import React, { Component } from 'react'
import request from 'superagent'
import Spinner from './Spinner.js'
import DetailItem from '../Detail/DetailItem.js'

export default class DetailPage extends Component {
    state = {
        detailData: {},
    }

    componentDidMount = async () => {

        this.setState({ loading: true });

        const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            detailData: pokeData.body.results[0]
        });

    }

    render() {
        const {
            detailData,
            loading,
        } = this.state

        return (
            <div>
                {loading
                    ? <Spinner />
                    : < DetailItem detailData={detailData} />
                }
            </div >
        )
    }
}
