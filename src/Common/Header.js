import React from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <nav className='navContainer'>
                <img className='pokeBall' alt='Poke Ball' src={'https://s.clipartkey.com/mpngs/s/54-541985_pokeball-pokemon-png-clipart-image-transparent-pokeball.png'} />
                <NavLink exact activeClassName='navLink' to='/'>Home</NavLink>
                <NavLink exact activeClassName='navLink' to='/Search'>Search</NavLink>
            </nav>

        )
    }
}