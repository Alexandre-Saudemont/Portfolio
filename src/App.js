import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// Outlet is used with the new React router in order to not display a blank page
import { Outlet } from 'react-router-dom';


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
