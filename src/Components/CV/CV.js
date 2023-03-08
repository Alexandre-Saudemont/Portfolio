import './CV.css';
import CValex from '../../asset/img/cv-alex.jpg';
import {useOutletContext} from 'react-router-dom';
import CValexEng from '../../asset/img/cv-alex-eng.jpg';
function CV() {
	const toggleTrad = useOutletContext();

	return (
		<div>
			<div className='cv-container'>
				<a href='https://drive.google.com/file/d/1ewYRavyeQoaVFf62dfIw5sRSWk4XhbIR/view?usp=share_link' target='_blank' rel='noreferrer'>
					{toggleTrad ? (
						<div className='cv-img-container'>
							<img src={CValexEng} alt='CV alex eng' className='cv' />
							<button type='submit' className='contact-button'>
								Download CV
							</button>
						</div>
					) : (
						<div className='cv-img-container'>
							<img src={CValex} alt='CV alex' className='cv' />
							<button type='submit' className='contact-button'>
								Télécharger le CV
							</button>
						</div>
					)}
				</a>
			</div>
		</div>
	);
}

export default CV;
