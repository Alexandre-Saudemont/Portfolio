import './Home.css';
import profilePic from '../../asset/img/profile-picV2.jpg';
import github from '../../asset/img/github.svg';
import linkedin from '../../asset/img/linkedin.svg';
import {useOutletContext} from 'react-router-dom';

function Home() {
	const toggleTrad = useOutletContext();

	return (
		<>
			<section className='home'>
				<h1 className='home-title'>Alexandre Saudemont</h1>
				<img src={profilePic} alt='profile' className='home-profile-pic' />
				{toggleTrad ? (
					<p className='home-description'>I'm a FullStack Web Developer</p>
				) : (
					<p className='home-description'>Je suis Développeur FullStack JavaScript</p>
				)}

				<ul className='home-links'>
					<a href='https://github.com/Alexandre-Saudemont' target='_blank' rel='noreferrer'>
						<li>
							<img src={github} alt='github icon' className='home-github' />
						</li>
					</a>
					<a href='https://www.linkedin.com/in/alexandre-saudemont-535481239/' target='_blank' rel='noreferrer'>
						<li>
							<img src={linkedin} alt='linkedin icon' className='home-linkedin' />
						</li>
					</a>
				</ul>
			</section>
		</>
	);
}

export default Home;
