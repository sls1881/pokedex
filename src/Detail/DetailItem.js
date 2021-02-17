import React, { Component } from 'react'

export default class DetailItem extends Component {
    render() {

        return (
            <div>
                <h1>Welcome to {this.props.detailData.pokemon}'s detail page</h1>
                <div key={this.props.detailData.pokemon}>
                    <img alt='pokemon' src={this.props.detailData.url_image} />
                    <p>
                        {this.props.detailData.pokemon} is a {this.props.detailData.type_1} Pokemon. It is {this.props.detailData.height} feet tall and weighs {this.props.detailData.weight} lbs.</p>

                    <p>
                        It can run {this.props.detailData.speed} mph and has {this.props.detailData.hp} hit points. It has an attack score of {this.props.detailData.attack} and defense score of {this.props.detailData.defense}.
                    </p>

                    <p>
                        {this.props.detailData.pokemon} has two types of eggs: {this.props.detailData.egg_group_1} and {this.props.detailData.egg_group_2}.
                    </p>
                </div>
            </div>
        )
    }
}