import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (<li key={this.props.id}>
            <h3>Name: {this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>Horns: {this.props.horns}</p>
            <img alt={this.props.title} src={this.props.image} />
        </li>);
    }
}