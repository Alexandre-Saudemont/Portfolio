import React from 'react';
import "./AboutMe.css";
import profilePic from "../../asset/img/profile-pic.jpg";


function AboutMe() {
    return (
        <section className='aboutme'>
            <img src={profilePic} alt="profile pic" className='aboutme-profile-pic' />
            <h1 className='aboutme-title'>Hi ! My name is Alexandre Saudemont</h1>
            <p className='aboutme-p'>
                Après une formation de 6 mois pour devenir développeur FullStack JavaScript au sein de l'école O'Clock,
                je suis actuellement à la recherche d'un premier emploi en tant que développeur junior.
            </p>


        </section>
    );
}

export default AboutMe;