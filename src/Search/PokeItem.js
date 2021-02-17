import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {

        return (
            <Link to={this.props.poke.pokemon}>
                <div key={this.props.poke.pokemon}>
                    <img alt='pokemon' src={this.props.poke.url_image} />
                    <h3>Name: {this.props.poke.pokemon}
                    </h3>
                    <p>Type: {this.props.poke.type_1}
                    </p>
                    <p>Attacks:{this.props.poke.attack}</p>
                    <p>Defense: {this.props.poke.defense}</p>
                </div>
            </Link>
        )
    }
}
