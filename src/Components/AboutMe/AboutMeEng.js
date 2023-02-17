import React from 'react';
import './AboutMe.css';
import profilePic from '../../asset/img/profile-pic.jpg';

function AboutMeEng() {
	return (
		<div>
			<section className='aboutme'>
				<h1 className='aboutme-title'>Hi ! I'm Alexandre Saudemont </h1>
				<h2 className='aboutme-subtitle'>Developer Web FullStack</h2>
				<p className='aboutme-p'>
					Fascinated by computers since I was little and after several years in administration without any real advancement in my career, I
					decided to convert to web development.
				</p>
				<p className='aboutme-p'>
					I started by training myself as an autodidact, then I looked for training in order to improve my skills and that's how I found
					myself on my way to the 100% remote school O'Clock.
				</p>
				<p className='aboutme-p'>I studied at O'Clock from January 17, 2022 until July 02, 2022.</p>
				<p className='aboutme-p'>
					The program consisted of 3 months of "Basic" to learn the basics of development in JavaScript, 1 month of specialization on React
					and 1 month for a professional project.
				</p>
				<p className='aboutme-p'>I was Front-End developer on the project.</p>
			</section>
		</div>
	);
}

export default AboutMeEng;
