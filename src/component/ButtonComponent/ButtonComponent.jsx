import React from 'react';

/* Styles import */
import './ButtonStyle.css';

function ButtonComponent({ onClickFnc, buttonText }) {
  return (
    <div role="button" onKeyDown={onClickFnc} tabIndex={0} className="button" onClick={onClickFnc}><span>{buttonText}</span></div>
  );
}

export default ButtonComponent;
