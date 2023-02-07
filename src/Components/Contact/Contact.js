import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

export const Contact = () => {
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
            <label className='contact-label' for="name">Name</label>
            <input className='contact-input' type="text" id="name" placeholder='M' />
            <label className='contact-label' for="email">Email</label>
            <input className='contact-input' type="email" id="email" placeholder='Exemple@gmail.com' />
            <label className='contact-label' for="message">Message</label>
            <textarea className='contact-input' name="message" />
            <input type="submit" if="message" value="Send" />
        </form>
    );
};

export default Contact;