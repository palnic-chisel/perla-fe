import React from 'react';

/*Styles import*/
import './ContactComponentStyle.css'

/*Assets import*/
import contactImage from '../../utils/Newsletter.png'

/*Libraries import*/
import Parallax from 'react-rellax'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp, faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import emailjs from 'emailjs-com'

/*Components import*/
import WaveDividerWidget from "../../widget/WaveDividerWidget/WaveDividerWidget";
import ContactInputFieldWidget from "../../widget/ContactInputFieldWidget/ContactInputFieldWidget";
import ContactTextAreaFieldWidget from "../../widget/ContactTextAreaFieldWidget/ContactTextAreaFieldWidget";
import {faCopy} from "@fortawesome/free-solid-svg-icons/faCopy";


const ContactComponent = ({data}) => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_o73b2f9', 'template_3smr6sn', e.target, 'user_RmLLo70gSHG9OXndg2Oew')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    console.log(data)

    return (
        <div className='contact-container'>

            <div className='contact-form-container'>
                <h1>Contattami</h1>
                <form onSubmit={sendEmail}>
                    <ContactInputFieldWidget type={'text'} label={'Nome'} required={true} name={"from_name"}/>
                    <ContactInputFieldWidget type={'text'} label={'Numero di telefono'} required={true} name={"from_number"}/>
                    <ContactInputFieldWidget type={'text'} label={'Indirizzo email'} required={true} name={"from_email"}/>
                    <ContactTextAreaFieldWidget label={'Scrivi qualcosa'} required={true} name={"from_text"}/>
                    <input className='button' type='submit'/>
                </form>
            </div>

            <div className='contact-other-container'>
                <h1>I miei riferimenti:</h1>
                <div className='contact-email-number-container'>
                    <div className='contact-email-number-inner-container'><span>{data.email}</span>
                        <div data-tooltip="Copia indirizzo email"
                             data-tooltip-location="left" className='contact-email-image-inner-container'
                             onClick={() => {
                                 navigator.clipboard.writeText(data.email)
                             }}><FontAwesomeIcon
                            color='rgba(46, 49, 49, 1)' icon={faCopy} size='1x'/></div>
                    </div>
                    <div className='contact-email-number-inner-container'><span>{data.phone}</span>
                        <div className='contact-email-image-inner-container'><a
                            href={`tel:+39${data.phone}`}><FontAwesomeIcon color='rgba(46, 49, 49, 1)'
                                                                                      icon={faPhone}
                                                                                      size='1x'/></a></div>
                    </div>
                    <div className='contact-email-number-inner-container'><span>{data.address}</span>
                        <div className='contact-email-image-inner-container'><a target="_blank"
                                                                                href='https://www.google.it/maps/place/Corso+Regina+Margherita,+10,+10153+Torino+TO' rel="noreferrer"><FontAwesomeIcon
                            color='rgba(46, 49, 49, 1)' icon={faMapMarked} size='1x'/></a></div>
                    </div>
                </div>
                <h2>...oppure puoi trovarmi su</h2>
                <div className='contact-other-image-container'>
                    <div className='contact-other-image-inner-container'><a target="_blank"
                                                                            href={`https://api.whatsapp.com/send/?phone=${data.phone}`} rel="noreferrer"><FontAwesomeIcon
                        color='rgba(123, 239, 178, 1)' icon={faWhatsapp} size='3x'/></a></div>
                    <div className='contact-other-image-inner-container'><a target="_blank"
                                                                            href={data.facebook} rel="noreferrer"><FontAwesomeIcon
                        color='rgba(65, 131, 215, 1)'
                        icon={faFacebook} size='3x'/>
                    </a></div>
                    <div className='contact-other-image-inner-container'><a target="_blank"
                                                                            href={data.linkedin} rel="noreferrer"><FontAwesomeIcon
                        color='rgba(65, 131, 215, 1)'
                        icon={faLinkedin} size='3x'/>
                    </a></div>
                    <div className='contact-other-image-inner-container'><a target="_blank"
                                                                            href={data.instagram} rel="noreferrer"><FontAwesomeIcon
                        color='rgba(65, 131, 215, 1)'
                        icon={faInstagram} size='3x'/>
                    </a></div>
                </div>
            </div>

            <Parallax speed={5} percentage={0.9}>
                <div className='contact-image-container'>
                    <img alt='contacts' src={contactImage}/>
                </div>
            </Parallax>

            <WaveDividerWidget/>

        </div>
    );
};

export default ContactComponent;
