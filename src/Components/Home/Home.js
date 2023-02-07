import React from 'react';
import './Home.css';
import hair from "../../asset/img/profile-picV2.jpg";
import github from "../../asset/img/github-mark.svg"
import linkedin from "../../asset/img/linkedin-mark.svg"
function Home() {

    return (
        <section className='home'>
            <h1 className='home-title'>Alexandre Saudemont</h1>
            <img src={hair} alt="hair not found" className='home-profile-pic' />

            <p className='home-description'>Je suis un développeur FullStack JavaScript</p>
            <ul className='home-links'>
                <li><img src={github} alt="github icon" className='home-github' /></li>
                <li><img src={linkedin} alt="linkedin icon" className='home-linkedin' /></li>
                <li></li>
            </ul>
        </section>
    );
}

export default Home;