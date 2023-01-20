import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                <NavLink className='navbar-navlink' to="/">
                    Home
                </NavLink>
                <NavLink className='navbar-navlink' to="/Projects">
                    Projects
                </NavLink>
                <NavLink className='navbar-navlink' to="/AboutMe">
                    About me
                </NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;