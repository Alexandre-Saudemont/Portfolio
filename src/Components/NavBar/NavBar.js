import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar({setToggleMenu, toggleTrad, toggleMenu}) {
	// const toggleTrad = useOutletContext();

	useEffect(() => {}, [toggleTrad]);
	const [testCondition, setTestCondition] = useState();

	// function responsive() {
	// 	if (window.screen.width >= 1024) {
	// 		setTestCondition(window.screen.width >= 1024);
	// 	} else {
	// 		setTestCondition(!toggleMenu);
	// 	}
	// }

	return (
		<div className='container-navbar'>
			<nav className='navbar'>
				<ul className='navbar-items'>
					<NavLink
						className='navbar-navlink'
						to='/'
						onClick={() => {
							setToggleMenu(false);
						}}>
						{toggleTrad ? 'Home' : 'Accueil'}
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/Projects'
						onClick={() => {
							setToggleMenu(false);
						}}>
						{toggleTrad ? 'Project' : 'Projet'}
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/AboutMe'
						onClick={() => {
							setToggleMenu(false);
						}}>
						{toggleTrad ? 'About Me' : 'A propos'}
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/Contact'
						onClick={() => {
							setToggleMenu(false);
						}}>
						Contact
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/CV'
						onClick={() => {
							setToggleMenu(false);
						}}>
						CV
					</NavLink>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
