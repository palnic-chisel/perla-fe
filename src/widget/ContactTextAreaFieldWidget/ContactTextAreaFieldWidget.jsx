import React from 'react';

/*Styles import*/
import './ContactTextAreaFieldStyle.css'

const ContactTextAreaFieldWidget = ({label, required, name}) => {
    return (
        <div className='contact-input-container-field'>
            <textarea className='contact-input-textarea' required={required} name={name}></textarea>
            <label>{label}</label>
        </div>
    );
};

export default ContactTextAreaFieldWidget;
