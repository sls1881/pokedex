import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <select value={this.props.currentValue} onChange={this.props.handleChange}> {
                this.props.options.map(option => <option key={option} value={option.value}>{option.name}</option>)
            }
            </select>
        )
    }
}