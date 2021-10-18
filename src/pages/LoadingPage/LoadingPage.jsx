import React from 'react';
import './LoadingPageStyle.css'
import {faBrain} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const LoadingPage = () => {
    return (
        <div className="container">
            <div className="item">
                <FontAwesomeIcon icon={faBrain} size='3x' color='rgba(248, 148, 6, 1)'/>
            </div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
}

export default LoadingPage;
