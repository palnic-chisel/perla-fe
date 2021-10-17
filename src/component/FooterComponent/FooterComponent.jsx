import React from 'react';
import './FooterComponentStyle.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import InfoBoxWidget from "../../widget/InfoBoxWidget/InfoBoxWidget";

import {apiStates, useApi} from '../../utils/useApi/UseApi.jsx';
import LandingPageComponent from "../LandingPageComponent/LandingPageComponent";
import NavigationBarComponent from "../NavigationBarComponent/NavigationBarComponent";
import ContactComponent from "../ContactComponent/ContactComponent";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const mockContatti = {
    "id": 1,
    "Indirizzo": "Corso Regina 10 Torino",
    "PartitaIva": "1234567890",
    "NumeroDiTelefono": "1234567890",
    "Linkedin": "https://www.linkedin.com/feed/",
    "Facebook": "https://www.facebook.com/",
    "Instagram": "https://www.instagram.com/",
    "IndirizzoEmail": "psicologa@psicologa.it",
    "published_at": "2021-01-23T02:21:53.349Z",
    "created_at": "2021-01-23T02:21:50.592Z",
    "updated_at": "2021-01-23T02:21:53.371Z"
};


const FooterComponent = () => {

    const {state, error, data} = useApi('https://perla-backend.herokuapp.com/contacts');
    switch (state) {
        case apiStates.SUCCESS:
            return <LandingPageComponent/>;
        case apiStates.ERROR:

            const aboutList = [
                {key: 'Telefono: ', value: `${data.phone}`},
                {key: 'Indirizzo: ', value: `${data.address}`},
                {key: 'Partita Iva: ', value: `${data.partitaIva}`},
            ];

            return (
                <div className='footer-container'>

                    <div className='footer-inner-container'>

                        <InfoBoxWidget boxTitle={'ABOUT ME'} list={aboutList}/>

                        <div className='footer-box-info'>
                            <h4>SEGUIMI SU</h4>
                            <div className = 'footer-social-container'>
                                <ul className='footer-social-info-list'>
                                    <li>
                                        <div className='footer-social-icon-container'><a href={data.facebook}><FontAwesomeIcon
                                            icon={faFacebook} color='white' size={'2x'}/></a></div>
                                    </li>
                                    <li>
                                        <div className='footer-social-icon-container'><a href={data.instagram}><FontAwesomeIcon
                                            icon={faInstagram} color='white' size={'2x'}/></a></div>
                                    </li>
                                    <li>
                                        <div className='footer-social-icon-container'><a href={data.linkedin}><FontAwesomeIcon
                                            icon={faLinkedin} color='white' size={'2x'}/></a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className='footer-divider'/>
                    <div className='footer-copyright-container'><p className=''>Copyright blackout-chisel 2020</p></div>
                </div>
            );
        default:
            return (
                <LoadingPage/>
            )
    }

};

export default FooterComponent;
