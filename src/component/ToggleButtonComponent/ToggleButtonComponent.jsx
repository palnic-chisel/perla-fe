/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./ToggleButtonComponentStyle.css"

const ToggleButtonComponent = ({ withBack, burgerHandler }) => {
    return (
        <div className='toggle-button' onClick={burgerHandler}>
            <FontAwesomeIcon icon={faBars} color='white' />
        </div>
    );
};

export default ToggleButtonComponent;