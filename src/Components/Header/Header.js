import React, { useState } from 'react';
import menuburger from "../../asset/img/menuburger.png";
import menuclose from "../../asset/img/menu-close.svg"
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
                {/* l'idée serait de faire un affichage conditionnel. Si j'ai cliqué, alors j'affiche la croix pas le burger, sinon j'affiche le burger, pas la croix. ToogleMenu ? une condition : l'autre condition */}
                {toggleMenu ?
                    <img src={menuclose} className="header-menuburger-close" alt="menu burger close" onClick={onClickToggleMenu} />
                    :
                    <img src={menuburger} className="header-menuburger-open" alt="menu burger" onClick={onClickToggleMenu} />
                }
                {/*  J'apelle ma fonction onClickToggleMenu qui utilise le state toggleMenu. Ici setToggleMenu change la valeur de mon state (toggleMenu). Ici mon toggleMenu est initialisé a false, avec le onClick le setToggleMenu va changer ma 
            valeur en true graçe au "!" qui fait l'inverse du toggleMenu (donc l'inverse de false) */}
            </header>
            {/* Affichage conditionnel : Si  mon toggleMenu est true alors, j'affiche la NavBar */}

            {toggleMenu &&
                <NavBar />
            }
        </>

    );
}

export default Header;