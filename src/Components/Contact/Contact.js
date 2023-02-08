import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'template_l2nwp6s', form.current, 'Z3rh0mNjILy5GvJ3-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <p className='contact'>Me contacter :</p>

            <input className='contact-input' type="text" id="name" placeholder='Nom' />

            <input className='contact-input' type="email" id="email" placeholder='Exemple@gmail.com' />

            <textarea className='contact-input' name="message" rows="8" placeholder='Message' />
            <input type="submit" if="message" value="Envoyer" />
        </form>
    );
};

export default Contact;