import React from 'react';
import "./AboutMe.css";
import Contact from "../Contact/Contact.js"

function AboutMe() {
    return (
        <section className='aboutme'>
            <h1 className='aboutme-title'>Bonjour ! Je m'appelle Alexandre Saudemont</h1>
            <p className='aboutme-p'>
                Après une formation de 6 mois pour devenir développeur FullStack JavaScript au sein de l'école O'Clock,
                je suis actuellement à la recherche d'un premier emploi en tant que développeur junior.
            </p>
            <Contact />
        </section>
    );
}

export default AboutMe;