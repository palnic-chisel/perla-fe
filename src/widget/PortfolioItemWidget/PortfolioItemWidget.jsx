/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

/* Styles import */
import './PortfolioItemStyle.css';

function PortfolioItemWidget({ image, description, redirect }) {
  const history = useHistory();
  const redirectTo = (redirect) => {
    const regexPsicologa = /psicologa/g;
    const regexContatti = /contatti/g;
    const regexMindfulness = /mindfulness/g;
    const regexAbout = /about/g;
    const foundPsicologa = redirect.match(regexPsicologa);
    const foundContatti = redirect.match(regexContatti);
    const foundMindfulness = redirect.match(regexMindfulness);
    const foundAbout = redirect.match(regexAbout);
    if(foundPsicologa){history.push('/psicologia')}
    if(foundContatti){history.push('/contatti')}
    if(foundMindfulness){history.push('/mindfulness')}
    if(foundAbout){history.push('/about')}
  }

  return (
    <div data-aos="zoom-in" className="portfolio-item-container" onClick={()=>redirectTo(redirect)}>
      <div className="portfolio-item-image-container"><img alt="service" src={image} /></div>
      <p>{description}</p>
    </div>
  );
}

export default PortfolioItemWidget;
