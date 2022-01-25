/* eslint-disable no-case-declarations */
import React from 'react';
import './FooterComponentStyle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import InfoBoxWidget from '../../widget/InfoBoxWidget/InfoBoxWidget';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { apiStates, useApi } from '../../utils/useApi/UseApi';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

function FooterComponent() {
  const { state, error, data } = useApi('https://perla-backend.herokuapp.com/contacts/1');
  const responsive = useMediaQuery('(min-width: 800px)');
  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:

      const aboutList = [
        { key: 'Telefono: ', value: `${data.phone}` },
        { key: 'Indirizzo: ', value: `${data.address}` },
        { key: 'Partita Iva: ', value: `${data.partitaIva}` },
      ];

      return (
        <div className="footer-container">

          <div className="footer-inner-container">

            <InfoBoxWidget boxTitle="ABOUT ME" list={aboutList} />

            <div className="footer-box-info">
              <h4>SEGUIMI SU</h4>
              <div className="footer-social-container">
                <ul className="footer-social-info-list">
                  <li>
                    <div className="footer-social-icon-container">
                      <a href={data.facebook}>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          color="white"
                          size="2x"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="footer-social-icon-container">
                      <a href={data.instagram}>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          color="white"
                          size="2x"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="footer-social-icon-container">
                      <a href={data.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          color="white"
                          size="2x"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {responsive && <hr className="footer-divider" />}
          {responsive && <div className="footer-copyright-container"><p style={{ textAlign: 'right' }}>Created by - palnic</p></div>}
        </div>
      );
    default:
      return (
        <LoadingPage />
      );
  }
}

export default FooterComponent;
