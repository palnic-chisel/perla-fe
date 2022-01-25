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

function MindfulnessPage() {
  const { state, error, data } = useApi('https://perla-backend.herokuapp.com/pages/4');
  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:
      return (
        <>
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
        </>
      );
    default:
      return (
        <LoadingPage />
      );
  }
}

export default MindfulnessPage;
