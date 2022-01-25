import React from 'react';

/* Styles import */
import './ContactTextAreaFieldStyle.css';

function ContactTextAreaFieldWidget({ label, required, name }) {
  return (
    <div className="contact-input-container-field">
      <textarea className="contact-input-textarea" required={required} name={name} id="text-area" />
      <label htmlFor="text-area">{label}</label>
    </div>
  );
}

export default ContactTextAreaFieldWidget;
