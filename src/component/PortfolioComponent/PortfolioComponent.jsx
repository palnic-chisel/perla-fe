import React from 'react';

import './PortfolioComponentStyle.css';
import Parallax from 'react-rellax';
import PortfolioItemWidget from '../../widget/PortfolioItemWidget/PortfolioItemWidget';

function PortfolioComponent({ data }) {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title-container">
        <Parallax speed={1} percentage={1}><span data-aos="fade-left">{data.title}</span></Parallax>
      </div>
      <div className="portfolio-inner-container">
        {data?.image?.map((obj) => (
          <PortfolioItemWidget key={obj.id} image={`${obj.url}`} description={obj.caption} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioComponent;
