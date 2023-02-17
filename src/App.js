import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// Outlet is used with the new React router in order to not display a blank page

function App() {
	const [toggleTrad, setToggleTrad] = useState(false);

	function onClickToggleTrad() {
		setToggleTrad(!toggleTrad);
	}

	return (
		<div className='App'>
			<Header onClickToggleTrad={onClickToggleTrad} />
			<Main toggleTrad={toggleTrad} />
		</div>
	);
}

export default App;
