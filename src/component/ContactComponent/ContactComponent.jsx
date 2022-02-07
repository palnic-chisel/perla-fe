import React, { useState } from 'react';

/* Styles import */
import './ContactComponentStyle.css';

/* Assets import */

/* Libraries import */
import Parallax from 'react-rellax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp, faFacebook, faLinkedin, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

/* Components import */
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import WaveDividerWidget from '../../widget/WaveDividerWidget/WaveDividerWidget';
import ContactInputFieldWidget from '../../widget/ContactInputFieldWidget/ContactInputFieldWidget';
import ContactTextAreaFieldWidget from '../../widget/ContactTextAreaFieldWidget/ContactTextAreaFieldWidget';
import contactImage from '../../utils/Newsletter.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactComponent({ data }) {

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o73b2f9', 'template_3smr6sn', e.target, 'user_RmLLo70gSHG9OXndg2Oew')
      .then((result) => {
        console.log(result.text);
        setSeverity('success')
        setToastMessage('Ciao, ho ricevuto la tua richiesta e ti risponderò al più presto!')
        handleClick()
      }, (error) => {
        console.log(error.text);
        setSeverity('error')
        setToastMessage('Ciao, si è verificato un errore durante l\'invio della richiesta. Puoi contattarmi anche telefonicamente o su Whatsapp, oppure sui social')
        handleClick()
      });
    e.target.reset();
  }

  return (
    <div className="contact-container">

      <div className="contact-other-container">
        <h1>I miei riferimenti:</h1>
        <div className="contact-email-number-container">
          <div className="contact-email-number-inner-container">
            <span>{data.email}</span>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {
                navigator.clipboard.writeText(data.email);
              }}
              data-tooltip="Copia indirizzo email"
              data-tooltip-location="left"
              className="contact-email-image-inner-container"
              onClick={() => {
                navigator.clipboard.writeText(data.email);
              }}
            >
              <FontAwesomeIcon
                color="rgba(46, 49, 49, 1)"
                icon={faCopy}
                size="1x"
              />
            </div>
          </div>
          <div className="contact-email-number-inner-container">
            <span>{data.phone}</span>
            <div className="contact-email-image-inner-container">
              <a
                href={`tel:+39${data.phone}`}
              >
                <FontAwesomeIcon
                  color="rgba(46, 49, 49, 1)"
                  icon={faPhone}
                  size="1x"
                />
              </a>
            </div>
          </div>
          <div className="contact-email-number-inner-container">
            <span>{data.address}</span>
            <div className="contact-email-image-inner-container">
              <a
                target="_blank"
                href="https://www.google.it/maps/place/Piazza+Enrico+Toti,+15,+10153+Torino+TO/"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  color="rgba(46, 49, 49, 1)"
                  icon={faMapMarked}
                  size="1x"
                />
              </a>
            </div>
          </div>
        </div>
        <h2>...oppure puoi trovarmi su</h2>
        <div className="contact-other-image-container">
          <div className="contact-other-image-inner-container">
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send/?phone=${data.phone}`}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                color="rgba(123, 239, 178, 1)"
                icon={faWhatsapp}
                size="3x"
              />
            </a>
          </div>
          <div className="contact-other-image-inner-container">
            <a
              target="_blank"
              href={data.facebook}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                color="rgba(65, 131, 215, 1)"
                icon={faFacebook}
                size="3x"
              />
            </a>
          </div>
          <div className="contact-other-image-inner-container">
            <a
              target="_blank"
              href={data.linkedin}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                color="rgba(65, 131, 215, 1)"
                icon={faLinkedin}
                size="3x"
              />
            </a>
          </div>
          <div className="contact-other-image-inner-container">
            <a
              target="_blank"
              href={data.instagram}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                color="rgba(65, 131, 215, 1)"
                icon={faInstagram}
                size="3x"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <h1>Contattami</h1>
        <form onSubmit={sendEmail}>
          <ContactInputFieldWidget type="text" label="Nome" required name="from_name" />
          <ContactInputFieldWidget type="text" label="Numero di telefono" required name="from_number" />
          <ContactInputFieldWidget type="text" label="Indirizzo email" required name="from_email" />
          <ContactTextAreaFieldWidget label="Scrivi qualcosa" required name="from_text" />
          <input id = 'submitMail' className="button" type="submit" />
        </form>
      </div>

      <Parallax speed={5} percentage={0.9}>
        <div className="contact-image-container">
          <img alt="contacts" src={contactImage} />
        </div>
      </Parallax>

      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {toastMessage}
        </Alert>
      </Snackbar>

      <WaveDividerWidget />

    </div>
  );
}

export default ContactComponent;
