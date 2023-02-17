import React from 'react';
import './Main.css';
import {Outlet} from 'react-router-dom';

function Main({toggleTrad}) {
	console.log('toggle dans main', toggleTrad);
	return (
		<main className='main'>
			{/* Outlet affiche les enfant de main */}
			<Outlet context={toggleTrad} />
		</main>
	);
}

export default Main;
