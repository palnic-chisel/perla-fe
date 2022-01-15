import React from 'react';
import "./LogoComponentStyle.css"

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
};

const LogoComponent = ({ withBack, history, match, responsive }) => {
    return (
        <div className="logo-container">
            <Link onClick={scrollToTop} to='/'>
                <div>
                    <span className='logo-name' style={{ color: withBack && responsive ? '#3b434a' : '#f5f6fa' }}>Chiara</span>
                    <span className='logo-lastname' style={{ color: withBack && responsive ? '#3b434a' : '#f5f6fa' }}>Ganga</span>
                </div>
                <div>
                    <span className='logo-sub1' style={{ color: withBack && responsive ? '#3b434a' : '#f5f6fa' }}>psicologa - </span>
                    <span className='logo-sub2' style={{ color: withBack && responsive ? '#3b434a' : '#f5f6fa' }}>istruttrice mindfulness</span>
                </div>

            </Link>
        </div>
    );
};

export default withRouter(LogoComponent);
