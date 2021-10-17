import React from 'react';

/*Styles import*/
import './PortfolioItemStyle.css'

const PortfolioItemWidget = ({image, description}) => {
    return (
        <div data-aos="zoom-in" className='portfolio-item-container'>
            <div className='portfolio-item-image-container'><img src={image}/></div>
            <p>{description}</p>
        </div>
    );
};

export default PortfolioItemWidget;