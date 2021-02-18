import React, { Component } from 'react'

export default class DetailItem extends Component {
    render() {

        return (
            <div className='detail-display'>
                <div key={this.props.detailData.pokemon}>
                    <h1>Welcome to {this.props.detailData.pokemon}'s detail page</h1>
                    <img alt='pokemon' src={this.props.detailData.url_image} />
                    <p>
                        {this.props.detailData.pokemon} is a {this.props.detailData.type_1} Pokemon. They are {this.props.detailData.height} feet tall and weighs {this.props.detailData.weight} lbs.</p>

                    <p>
                        They can run {this.props.detailData.speed} mph and have {this.props.detailData.hp} hit points. They have an attack score of {this.props.detailData.attack} and defense score of {this.props.detailData.defense}.
                    </p>

                    <p>
                        {this.props.detailData.pokemon} has two types of eggs: {this.props.detailData.egg_group_1} and {this.props.detailData.egg_group_2}.
                    </p>
                </div>
            </div>
        )
    }
}