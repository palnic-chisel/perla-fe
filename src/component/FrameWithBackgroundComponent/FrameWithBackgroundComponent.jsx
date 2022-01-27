import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './FrameWithBackgroundComponentStyle.css';
import ReactMarkdown from 'react-markdown';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import SecondaryImage from '../../widget/SecondaryImage/SecondaryImage';

function FrameWithBackgroundComponent({ data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (

    <div
      className="frameB-inner-container"
    >

      <div className="frameB-text-container" style={{ textAlign: data.captionPosition }}>
        <div className="frameB-title-container">
          <span data-aos="fade-left" style={{ textAlign: data.captionPosition }}>
            {data.title}
          </span>
          <h1
            data-aos="fade-left"
            className={data.captionPosition === 'right' ? 'frameB-title-right' : 'frameB-title-left'}
            style={{ textAlign: data.captionPosition }}
          >
            {data.frameTitle}
          </h1>
        </div>
        <div data-aos="fade-left" className="frameB-description">
          {data.frameSecondaryImageYesOrNot && <SecondaryImage position={data.captionPosition} imageUrl={`${data?.frameSecondaryImage?.url}`} />}
          <div className="frameB-caption-container" style={{ paddingRight: data.captionPosition === 'Left' ? '50px' : '10px', paddingLeft: data.captionPosition === 'Right' ? '50px' : '10px' }}>
            <div className="frame-caption"><ReactMarkdown>{data?.richCaption}</ReactMarkdown></div>
          </div>
        </div>
      </div>

      {data.activeSeeMoreButton && (
      <ButtonComponent
        buttonText={data.seeMoreButtonText}
        onClickFnc={() => {
          // history.push(`/${data.frameButtonGoesTo}`)
        }}
      />
      )}

      {data?.backgroundImage?.url && (
      <div style={{
        content: '',
        // backgroundImage: `url(${data.backgroundImage.url})`,
        background: `url(${data?.backgroundImage?.url}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        opacity: '0.5',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        position: 'absolute',
        zIndex: '-1',
      }}
      />
      )}

    </div>

  );
}

export default FrameWithBackgroundComponent;
