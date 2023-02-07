import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./Main.css";
import Home from '../Home/Home.js';
import AboutMe from '../AboutMe/AboutMe';
function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="AboutMe"
                    element={<AboutMe />}
                />
            </Routes>
        </main>

    );
}

export default Main;