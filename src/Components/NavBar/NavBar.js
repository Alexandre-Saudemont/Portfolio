import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <div className='container-navbar'>
            <nav className='navbar'>
                <ul className='navbar-items'>
                    <NavLink className='navbar-navlink' to="/">
                        Accueil
                    </NavLink>
                    <NavLink className='navbar-navlink' to="/Projects">
                        Projets
                    </NavLink>
                    <NavLink className='navbar-navlink' to="/AboutMe">
                        A propos
                    </NavLink>
                    <NavLink className='navbar-navlink' to="/Contact">
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;