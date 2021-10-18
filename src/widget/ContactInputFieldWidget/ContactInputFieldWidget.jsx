import React from 'react';

/*Styles import*/
import './ContactInputFieldStyle.css'

const ContactInputFieldWidget = ({type, required, label, name}) => {
    return (
        <div className='contact-input-container-field'>
            <input className='contact-input-field' type={type} required={required} name={name}/>
            <label>{label}</label>
        </div>
    );
};

export default ContactInputFieldWidget;
