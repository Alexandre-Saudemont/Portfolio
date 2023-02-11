import React from 'react';
import './AboutMe.css';
import profilePic from '../../asset/img/profile-pic.jpg';

function AboutMe() {
	return (
		<div>
			<section className='aboutme'>
				<img src={profilePic} alt='profile pic' className='aboutme-profile-pic' />
				<h1 className='aboutme-title'>Bonjour, Je suis Alexandre Saudemont </h1>
				<h2 className='aboutme-subtitle'>Développeur Web FullStack</h2>
				<p className='aboutme-p'>
					Passionné depuis tout petit par l'informatique et après plusieurs années en administration
					sans réel avancement dans ma carrière, j'ai décidé de me reconvertir dans le développement
					Web.
				</p>
				<p className='aboutme-p'>
					J'ai commencé par me former en autodidacte, puis j'ai ensuite cherché une formation afin
					d'améliorer mes compétences et c'est comme ça que je me suis retrouvé sur le chemin de
					l'école 100% remote O'Clock.
				</p>
				<p className='aboutme-p'>
					J'ai étudié chez O'Clock du 17 Janvier 2022 jusqu'au 02 Juillet 2022.
				</p>
				<p className='aboutme-p'>
					Le programme est constitué de 3 mois de "Socle" pour apprendre les bases du développement
					en JavaScript, un 1 de spécialisation sur React et un 1 mois de projet professionnel.
				</p>
				<p className='aboutme-p'>J'étais développeur Front-End sur le projet professionnel.</p>
			</section>
		</div>
	);
}

export default AboutMe;
