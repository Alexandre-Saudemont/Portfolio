
import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
// Outlet is used with the new React router in order to not display a blank page
import { Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Outlet />
    </main>

  );
}

export default App;
