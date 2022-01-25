import React from 'react';

/* Styles import */
import './ContactInputFieldStyle.css';

function ContactInputFieldWidget({
  type, required, label, name,
}) {
  return (
    <div className="contact-input-container-field">
      <input className="contact-input-field" type={type} required={required} name={name} id="name" />
      <label htmlFor="name">{label}</label>
    </div>
  );
}

export default ContactInputFieldWidget;
