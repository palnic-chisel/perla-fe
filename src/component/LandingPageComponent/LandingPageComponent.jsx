import React, { useEffect } from 'react';
import './LandingPageComponentStyle.css';

import Parallax from 'react-rellax';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const scrollTo = () => {
  scroll.scrollTo(window.innerHeight);
};

function LandingPageComponent({ data }) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="landing-page-container">
      <div className="landing-page-inner-container">
        <div data-aos="fade-right" className="landing-page-text-container">
          <Parallax speed={-0.5}><h1 className="landing-page-section-title">{data?.title}</h1></Parallax>
          <Parallax speed={1}>
            <div className="landing-page-section-description-container">
              <div className="landing-page-section-description">
                <ReactMarkdown>{data?.richCaption}</ReactMarkdown>
                {' '}
              </div>
            </div>
            {data?.seeMoreButtonActive && (
            <ButtonComponent
              buttonText={data?.seeMoreButtonText}
              onClickFnc={scrollTo}
            />
            )}
          </Parallax>
        </div>
      </div>

      {data?.backgroundImage?.url && (
      <div style={{
        content: '',
        background: `url(${data?.backgroundImage?.url})  center center fixed`,
        backgroundSize: 'cover',
        opacity: '0.6',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
      }}
      />
      )}
    </div>
  );
}

export default LandingPageComponent;
