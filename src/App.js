import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// Outlet is used with the new React router in order to not display a blank page

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
		</div>
	);
}

export default App;
