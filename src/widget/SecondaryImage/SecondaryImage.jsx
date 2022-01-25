import React from 'react';
import './SecondaryImageStyle.css';

function SecondaryImage({ position, imageUrl }) {
  return (
    <div className="secondary-image-container" style={{ order: position === 'Left' ? '1' : 0 }}>
      <img alt="img" src={imageUrl} />
    </div>
  );
}

export default SecondaryImage;
