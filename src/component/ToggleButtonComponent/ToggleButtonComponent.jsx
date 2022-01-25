/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './ToggleButtonComponentStyle.css';

function ToggleButtonComponent({ burgerHandler }) {
  return (
    <div role="button" className="toggle-button" tabIndex={0} onKeyDown={burgerHandler} onClick={burgerHandler}>
      <FontAwesomeIcon
        style={{
          width: '20px',
          height: '20px',
        }}
        icon={faBars}
        color="white"
      />
    </div>
  );
}

export default ToggleButtonComponent;
