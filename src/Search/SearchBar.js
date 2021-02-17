import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input value={this.props.currentValue}
                    onChange={this.props.handleChange} />
                <button onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }
}
