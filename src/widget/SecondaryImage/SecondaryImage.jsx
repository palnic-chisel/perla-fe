import React from 'react';
import './SecondaryImageStyle.css'

const SecondaryImage = ({position, imageUrl}) => {
    return (
        <div className='secondary-image-container' style={{order: position === 'Left' ? '1' : 0}}>
            <img alt='img' src={imageUrl}/>
        </div>
    );
};

export default SecondaryImage;
