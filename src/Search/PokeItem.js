import React, { Component } from 'react'

//Step 3: This component should take in props to render the poke data in an ul in PokeList
export default class PokeItem extends Component {
    render() {
        const {
            pokeProp: {
                _id,
                url_image,
                pokemon,
                attack,
                defense,
                type_1
            }
        } = this.props;

        return (<li key={url_image}>
            <img alt='pokemon' src={url_image} />
            <h3>Pokemon name: {pokemon}</h3>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Type: {type_1}</p>
        </li>);
    }
}

//Question: Why don't I need to import my data to use the data keys in my props.