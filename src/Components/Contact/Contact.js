import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import chicken from '../../asset/img/chicken.gif';

function Contact() {
	// A l'envoie du formulaire je dois : toggle un state
	// Avec le toggle, je fais un affichage conditionnel
	// DANS l'affichage conditionnel je fais mon composant modal
	// dans mon composant modal, je dois mettre un button qui dois faire l'inverse du toggle pour fermer la modal
	// au click de l'envoie du formulaire, je dois vider mon formulaire

	const [toggleModalSuccess, setToggleModalSuccess] = useState(false);
	const [toggleModalError, setToggleModalError] = useState(false);

	function onClickToggleCloseModalError() {
		setToggleModalError(!toggleModalError);
	}

	function onClickToggleCloseModalSuccess() {
		setToggleModalSuccess(!toggleModalSuccess);
	}
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'template_l2nwp6s', form.current, 'Z3rh0mNjILy5GvJ3-').then(
			result => {
				setToggleModalSuccess(!toggleModalSuccess);
				console.log(result.text);
			},
			error => {
				setToggleModalError(!toggleModalError);
				console.log(error.text);
			},
		);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className='contact-form'>
			<img src={chicken} alt='chicken gif' />
			<p className='contact-p'>Me contacter :</p>
			<input className='contact-input' type='text' id='name' placeholder='Nom' />
			<input className='contact-input' type='email' id='email' placeholder='Exemple@gmail.com' />
			<textarea className='contact-input' name='message' rows='8' placeholder='Message' />
			<input type='submit' if='message' value='Envoyer' className='contact-button' />
			{toggleModalError && (
				<div className='contact-container'>
					<div className='contact-container-modal'>
						<p className='contact-modal-error'>Une erreur est survenu, votre message n'à pas été envoyé</p>
						<button type='button' className='contact-button' onClick={onClickToggleCloseModalError}>
							Fermer
						</button>
					</div>
				</div>
			)}
			{toggleModalSuccess && (
				<div className='contact-container'>
					<div className='contact-container-modal'>
						<p className='contact-modal-success'>Votre message à bien été envoyé.</p>
						<button type='button' className='contact-button' onClick={onClickToggleCloseModalSuccess}>
							Fermer
						</button>
					</div>
				</div>
			)}
		</form>
	);
}

export default Contact;
