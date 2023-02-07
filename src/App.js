
import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
// Outlet is used with the new React router in order to not display a blank page
import { Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>

      <Header />
      {/* <Main /> */}
      {/* <Home /> */}
      <section className='Main'>
        <Outlet />
      </section>
    </div>

  );
}

export default App;
