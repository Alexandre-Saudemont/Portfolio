
import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
// Outlet is used with the new React router in order to not display a blank page
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <Header />

      <Outlet />
    </main>

  );
}

export default App;
