import React from 'react';
import "./AboutMe.css";
import profilePic from "../../asset/img/profile-pic.jpg";


function AboutMe() {
    return (
        <section className='aboutme'>
            <img src={profilePic} alt="profile pic" className='aboutme-profile-pic' />
            <h1 className='aboutme-title'>Bonjour, Je suis Alexandre Saudemont </h1>
            <h2 className='aboutme-subtitle'>Développeur Web FullStack</h2>
            <p className='aboutme-p'>
                J'ai étudié chez O'Clock du 17 Janvier 2022 jusqu'au 02 Juillet 2022.
            </p>
            <p className='aboutme-p'>
                Le programme est constitué de 3 mois de "Socle" pour apprendre les bases du développement en JavaScript,
                un 1 de spécialisation sur React et un 1 mois de projet professionnel.
            </p>
            <p className='aboutme-p'>
                J'étais développeur Front-End sur le projet professionnel.
            </p>
        </section>
    );
}

export default AboutMe;