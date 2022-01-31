import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './FrameWithBackgroundComponentStyle.css';
import ReactMarkdown from 'react-markdown';

function FrameWithBackgroundComponent({ data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="frame-container">

      <div className="frame-inner-container">

        <div className="frame-text-container">

          <div className="frame-title-container">
            <span
             data-aos="fade-left"
             >
              {data.title}
            </span>
          </div>

          <div
            data-aos="fade-left"
            className="frame-caption-container"
          >
            <div
              className="frame-description"
            >
              <ReactMarkdown>{data?.richCaption}</ReactMarkdown>
            </div>
          </div>


        </div>

        {/* {data.activeSeeMoreButton && (
          <ButtonComponent
            buttonText={data.seeMoreButtonText}
            onClickFnc={() => {
              // history.push(`/${data.frameuttonGoesTo}`)
            }}
          />
        )} */}

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


    </div>

  );
}

export default FrameWithBackgroundComponent;
