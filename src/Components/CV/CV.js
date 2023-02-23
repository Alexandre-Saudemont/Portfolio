import './CV.css';
import CValex from '../../asset/img/cv-alex.jpg';
import {useOutletContext} from 'react-router-dom';

function CV() {
	const toggleTrad = useOutletContext();

	return (
		<div>
			{/* <div>
												<Document file={CVpdf} >		

														<Page pageNumber={1} />
												</Document>

										</div> */}
			<div className='cv-container'>
				<img src={CValex} alt='CV alex' className='cv' />
				<a href='https://drive.google.com/file/d/1ewYRavyeQoaVFf62dfIw5sRSWk4XhbIR/view?usp=share_link' target='_blank' rel='noreferrer'>
					{toggleTrad ? (
						<button type='submit' className='contact-button'>
							Download CV
						</button>
					) : (
						<button type='submit' className='contact-button'>
							Télécharger le CV
						</button>
					)}
				</a>
			</div>
		</div>
	);
}

export default CV;
