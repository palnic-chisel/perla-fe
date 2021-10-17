import React from 'react';
import "./ToggleButtonComponentStyle.css"

const ToggleButtonComponent = ({withBack}) => {
 return (
  <a href="#" className="toggle-button">
      <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
      </svg>
  </a>
 );
};

export default ToggleButtonComponent;