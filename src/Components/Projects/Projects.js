import React from 'react';
import {useOutletContext} from 'react-router-dom';
import './Projects.css';
import pokedeck from '../../asset/img/pokedeck.png';
function Projects() {
	const toggleTrad = useOutletContext();

	return (
		<div className='project-container'>
			{toggleTrad ? (
				<>
					<div className='project'>
						Pokedeck website
						<img src={pokedeck} alt='pokedeck' className='projet-pokedeck' />
					</div>
					<div className='project-button-container'>
						<a
							href='https://github.com/Alexandre-Saudemont/pokedeck-front'
							type='submit'
							target='_blank'
							rel='noreferrer'
							className='project-button'>
							GitHub (frontend)
						</a>
						<a
							href='https://github.com/Alexandre-Saudemont/pokedeck-back'
							type='submit'
							target='_blank'
							rel='noreferrer'
							className='project-button'>
							GitHub (backend)
						</a>
					</div>
					<a href='http://pokedeck.alexandre-saudemont.fr/' type='submit' target='_blank' rel='noreferrer' className='project-button'>
						Demonstration
					</a>
				</>
			) : (
				<>
					<div className='project'>
						Site de Pokedeck
						<img src={pokedeck} alt='pokedeck' className='projet-pokedeck' />
					</div>
					<div className='project-button-container'>
						<a
							href='https://github.com/Alexandre-Saudemont/pokedeck-front'
							type='submit'
							target='_blank'
							rel='noreferrer'
							className='project-button'>
							GitHub (frontend)
						</a>
						<a
							href='https://github.com/Alexandre-Saudemont/pokedeck-back'
							type='submit'
							target='_blank'
							rel='noreferrer'
							className='project-button'>
							GitHub (backend)
						</a>
					</div>
					<a href='http://pokedeck.alexandre-saudemont.fr/' type='submit' target='_blank' rel='noreferrer' className='project-button'>
						Démonstration
					</a>
				</>
			)}
		</div>
	);
}

export default Projects;
