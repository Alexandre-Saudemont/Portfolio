
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>


      <NavBar />
      <Outlet />

    </main>

  );
}

export default App;
