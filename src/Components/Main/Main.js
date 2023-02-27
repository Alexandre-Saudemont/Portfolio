import React from 'react';
import './Main.css';
import {Outlet} from 'react-router-dom';

function Main({toggleTrad}) {
	// pour passer plusieurs props on fait comme ça
	// const props = {toto: 'poule', toggleTrad};
	const props = toggleTrad;
	return (
		<main className='main'>
			{/* Outlet affiche les enfant de main */}
			<Outlet context={props} />
		</main>
	);
}

export default Main;
