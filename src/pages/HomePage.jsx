/* eslint-disable no-underscore-dangle */
import React from 'react';

import { apiStates, useApi } from '../utils/useApi/UseApi';
import { Helmet } from "react-helmet";

/* Components Import */
import LandingPageComponent from '../component/LandingPageComponent/LandingPageComponent';
import FrameWithBackgroundComponent from '../component/FrameWithBackgroundComponent/FrameWithBackgroundComponent';
import PortfolioComponent from '../component/PortfolioComponent/PortfolioComponent';
import FooterComponent from '../component/FooterComponent/FooterComponent';
// import LoadingPage from './LoadingPage/LoadingPage';
import NavigationBarComponent from '../component/NavigationBarComponent/NavigationBarComponent';
import SpeedDialWidget from '../widget/SpeedDialWidget/SpeedDialWidget';

function HomePage() {
  // const {state, error, data} = useApi('http://localhost:1337/pages/2');
  const { state, error, data } = useApi('https://perla-backend.herokuapp.com/pages/1');
  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:
      return (
        <div style={{ position: 'relative' }}>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Chiara Ganga, psicologa e istruttrice di Mindfulness a Torino e Online. Psicologa, specializzanda in psicoterapia della Gestalt presso l'Istituto SGT di Torino. Psicologa per bambini, adolescenti e adulti. Puoi contattarmi telefonicamente oppure su Whatsapp al +39 3450383042 oppure via mail e social" />
            <title>Chiara Ganga - Psicologa e Istruttrice di Mindfulness</title>
            <link rel="canonical" href="https://www.psicologachiaraganga.com" />
          </Helmet>
          <NavigationBarComponent />

          {data?.content?.map((component) => (
            <div key={component.id}>
              {component.__component === 'page.landing'
                && <LandingPageComponent data={component} />}

              {component.__component === 'page.frame'
                && <FrameWithBackgroundComponent data={component} />}

              {component.__component === 'page.service'
                && <PortfolioComponent data={component} />}

            </div>
          ))}
          <FooterComponent />
          <SpeedDialWidget />
        </div>
      );
    default:
      return (
        // <LoadingPage />
          <div style={{height: '100vh', width: '100vw', display:'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
      );
  }
}

export default HomePage;
