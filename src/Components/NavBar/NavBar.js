import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css'

function NavBar({ setToggleMenu }) {

    return (
        <div className='container-navbar'>
            <nav className='navbar'>
                <ul className='navbar-items'>
                    <Link className='navbar-navlink' to="/" state={{ setToggleMenu: { setToggleMenu } }}>
                        Accueil
                    </Link>
                    <NavLink className='navbar-navlink' to="/Projects" state={{ setToggleMenu: { setToggleMenu } }}>
                        Projets
                    </NavLink>
                    <NavLink className='navbar-navlink' to="/AboutMe" state={{ setToggleMenu: { setToggleMenu } }}>
                        A propos
                    </NavLink>
                    <NavLink className='navbar-navlink' to="/Contact" state={{ setToggleMenu: { setToggleMenu } }}>
                        Contact
                    </NavLink>
                    <NavLink className='navbar-navlink' to="/CV" state={{ setToggleMenu: { setToggleMenu } }}>
                        CV
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;