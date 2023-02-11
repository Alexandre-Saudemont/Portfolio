import {NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar({setToggleMenu}) {
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
						Accueil
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/Projects'
						onClick={() => {
							setToggleMenu(false);
						}}>
						Projets
					</NavLink>
					<NavLink
						className='navbar-navlink'
						to='/AboutMe'
						onClick={() => {
							setToggleMenu(false);
						}}>
						A propos
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
