import React, { useState } from 'react';
import menuburger from "../../asset/img/menuburger.png";
import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);

    // On crée une fonction car en React on ne peut pas appeler le state directement dans la balise "img"
    function onClickToggleMenu() {
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            <header className='header'>
                <h1 className='header-title'>Portfolio</h1>
                {/*  J'apelle ma fonction onClickToggleMenu qui utilise le state toggleMenu. Ici setToggleMenu change la valeur de mon state (toggleMenu). Ici mon toggleMenu est initialisé a false, avec le onClick le setToggleMenu va changer ma 
            valeur en true graçe au "!" qui fait l'inverse du toggleMenu (donc l'inverse de false) */}
                <img src={menuburger} className="header-menuburger" alt="menu burger" onClick={onClickToggleMenu} />
            </header>
            {/* Affichage conditionnel : Si  mon toggleMenu est true alors, j'affiche la NavBar */}
            {toggleMenu &&
                <NavBar />
            }
        </>

    );
}

export default Header;