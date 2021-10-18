import React from 'react';

/*Styles import*/
import './ButtonStyle.css'

const ButtonComponent = ({onClickFnc, buttonText}) => {
    return (
        <div className='button' onClick={onClickFnc}><span>{buttonText}</span></div>
    );
};

export default ButtonComponent;
