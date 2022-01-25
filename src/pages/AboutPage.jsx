/* eslint-disable no-underscore-dangle */
import React from 'react';

import { apiStates, useApi } from '../utils/useApi/UseApi';

/* Components Import */
import LandingPageComponent from '../component/LandingPageComponent/LandingPageComponent';
import FrameWithBackgroundComponent from '../component/FrameWithBackgroundComponent/FrameWithBackgroundComponent';
import PortfolioComponent from '../component/PortfolioComponent/PortfolioComponent';
import FooterComponent from '../component/FooterComponent/FooterComponent';
import LoadingPage from './LoadingPage/LoadingPage';
import NavigationBarComponent from '../component/NavigationBarComponent/NavigationBarComponent';
import SpeedDialWidget from '../widget/SpeedDialWidget/SpeedDialWidget';

function AboutPage() {
  const { state, error, data } = useApi('https://perla-backend.herokuapp.com/pages/2');
  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:
      return (
        <div style={{ width: '100%' }}>
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
        <LoadingPage />
      );
  }
}

export default AboutPage;
