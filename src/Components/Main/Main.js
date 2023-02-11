import React from 'react';
import './Main.css';
import {Outlet} from 'react-router-dom';

function Main() {
	return (
		<main className='main'>
			{/* Outlet affiche les enfant de m */}
			<Outlet />
		</main>
	);
}

export default Main;
