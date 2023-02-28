import React from 'react';
import {useOutletContext} from 'react-router-dom';
import './Projects.css';

function Projects() {
	const toggleTrad = useOutletContext();
	return (
		<div className='project-container'>
			{toggleTrad ? (
				<div className='project'>Work in Progress, come back later ! </div>
			) : (
				<div className='project'>Projet en cours, repasser plus tard !</div>
			)}
		</div>
	);
}

export default Projects;
